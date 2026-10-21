import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';

export interface BusinessStatusResult {
  isOpen: boolean;
  statusText: string;
  nextOpenText: string;
  currentDayIndex: number;
  currentTimeFormatted: string;
}

export function getSaoPauloDate(): {
  date: Date;
  dayIndex: number;
  hours: number;
  minutes: number;
  timeString: string;
} {
  const now = new Date();
  
  // Format into Sao Paulo timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const parts = formatter.formatToParts(now);
  const partMap: Record<string, string> = {};
  for (const part of parts) {
    partMap[part.type] = part.value;
  }

  const hours = parseInt(partMap.hour, 10);
  const minutes = parseInt(partMap.minute, 10);

  // Map weekday abbreviation to dayIndex (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const dayIndex = weekdayMap[partMap.weekday] ?? now.getDay();

  const pad = (n: number) => n.toString().padStart(2, '0');
  const timeString = `${pad(hours)}:${pad(minutes)}`;

  return {
    date: now,
    dayIndex,
    hours,
    minutes,
    timeString,
  };
}

export function calculateBusinessStatus(): BusinessStatusResult {
  const { dayIndex, hours, minutes, timeString } = getSaoPauloDate();
  const schedule = DEFAULT_STUDIO_CONFIG.schedule;
  const currentSchedule = schedule.find((s) => s.dayIndex === dayIndex);

  const currentTotalMinutes = hours * 60 + minutes;

  if (currentSchedule && currentSchedule.isOpen) {
    const openTotalMinutes = currentSchedule.openHour * 60 + currentSchedule.openMinute;
    const closeTotalMinutes = currentSchedule.closeHour * 60 + currentSchedule.closeMinute;

    // Inside operating hours (strictly before closeHour:closeMinute, e.g. < 20:00)
    if (currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes) {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const closeFormatted = `${pad(currentSchedule.closeHour)}:${pad(currentSchedule.closeMinute)}`;
      return {
        isOpen: true,
        statusText: 'Aberto agora',
        nextOpenText: `Hoje até às ${closeFormatted}`,
        currentDayIndex: dayIndex,
        currentTimeFormatted: timeString,
      };
    }

    // Earlier today before opening
    if (currentTotalMinutes < openTotalMinutes) {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const openFormatted = `${pad(currentSchedule.openHour)}:${pad(currentSchedule.openMinute)}`;
      return {
        isOpen: false,
        statusText: 'Fechado agora',
        nextOpenText: `Abre hoje às ${openFormatted}`,
        currentDayIndex: dayIndex,
        currentTimeFormatted: timeString,
      };
    }
  }

  // If closed or after closing time today, look ahead for the next opening day
  const pad = (n: number) => n.toString().padStart(2, '0');
  for (let offset = 1; offset <= 7; offset++) {
    const nextDayIndex = (dayIndex + offset) % 7;
    const nextSched = schedule.find((s) => s.dayIndex === nextDayIndex);
    if (nextSched && nextSched.isOpen) {
      const openFormatted = `${pad(nextSched.openHour)}:${pad(nextSched.openMinute)}`;
      let dayLabel = '';
      if (offset === 1) {
        dayLabel = 'amanhã';
      } else {
        dayLabel = nextSched.day.toLowerCase();
      }

      return {
        isOpen: false,
        statusText: 'Fechado agora',
        nextOpenText: `Abre ${dayLabel} às ${openFormatted}`,
        currentDayIndex: dayIndex,
        currentTimeFormatted: timeString,
      };
    }
  }

  return {
    isOpen: false,
    statusText: 'Fechado agora',
    nextOpenText: 'Consulte os horários',
    currentDayIndex: dayIndex,
    currentTimeFormatted: timeString,
  };
}
