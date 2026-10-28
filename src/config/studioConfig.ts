export interface StudioConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  logoUrl: string;
  links: {
    booking: string;
    whatsapp: string;
    instagram: string;
    maps: string;
    googleReview: string;
  };
  portfolio: {
    id: number;
    url: string;
    title: string;
    category: string;
  }[];
  wifi: {
    name: string;
    password: string;
  };
  schedule: {
    day: string;
    shortDay: string;
    dayIndex: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
    openHour: number;
    openMinute: number;
    closeHour: number;
    closeMinute: number;
    isOpen: boolean;
    displayHours: string;
  }[];
}

export const DEFAULT_STUDIO_CONFIG: StudioConfig = {
  brandName: 'CLARA REIS STUDIO',
  tagline: 'Realçando sua beleza em cada detalhe.',
  subTagline: 'Cabelos · Unhas · Estética de Alto Padrão',
  logoUrl: 'https://i.postimg.cc/q7gggJmd/Logotipo-minimalista-CR-Clara-Reis-Studio.png',
  links: {
    booking: 'https://www.trinks.com/clara-reis-studio?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0DMTAwAHBkb2YCc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGngFuj88oZVVgDyOCHrWeNBG1tDQg0Y2NMj0zJDDPOvYbGcUoKicSBLUOlHWc_aem_AwLyoURjg4tZGWu4Ft3Heg',
    whatsapp: 'https://wa.link/ho1wgu',
    instagram: 'https://www.instagram.com/clarareisstudio?rpxt=dW1obWM2NWxtbDFi',
    maps: 'https://maps.app.goo.gl/e7eFqTGY1vUDkVaE7',
    googleReview: 'https://search.google.com/local/writereview?placeid=ChIJ6wRYl6N_mQAR3ajiX1piRfY',
  },
  portfolio: [
    {
      id: 1,
      url: 'https://i.postimg.cc/T1bD1d3T/Whats-App-Image-2026-10-20-at-19-44-10-(1).jpg',
      title: 'Transformação Capilar & Iluminação',
      category: 'Cabelos',
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/XNBFQ8cR/Whats-App-Image-2026-10-20-at-19-44-10.jpg',
      title: 'Tratamento & Finalização com Brilho',
      category: 'Cabelos',
    },
    {
      id: 3,
      url: 'https://i.postimg.cc/7PJ7mVMd/Whats-App-Image-2026-10-20-at-19-44-10-(2).jpg',
      title: 'Corte, Alinhamento & Movimento',
      category: 'Cabelos',
    },
    {
      id: 4,
      url: 'https://i.postimg.cc/Kc3LJNrV/Whats-App-Image-2026-10-20-at-19-44-10-(3).jpg',
      title: 'Alongamento em Gel & Acabamento Perfeito',
      category: 'Unhas',
    },
    {
      id: 5,
      url: 'https://i.postimg.cc/y639vPX2/Whats-App-Image-2026-10-20-at-19-44-10-(4).jpg',
      title: 'Esmaltação Delicada & Nail Art Sofisticada',
      category: 'Unhas',
    },
    {
      id: 6,
      url: 'https://i.postimg.cc/h4QxprbH/Whats-App-Image-2026-10-20-at-19-44-10-(5).jpg',
      title: 'Design de Unhas & Cuticulagem Fina',
      category: 'Unhas',
    },
  ],
  wifi: {
    name: 'CLARA REIS STUDIO',
    password: 'Studio2804',
  },
  schedule: [
    {
      day: 'Segunda-feira',
      shortDay: 'Seg',
      dayIndex: 1,
      openHour: 0,
      openMinute: 0,
      closeHour: 0,
      closeMinute: 0,
      isOpen: false,
      displayHours: 'Fechado',
    },
    {
      day: 'Terça-feira',
      shortDay: 'Ter',
      dayIndex: 2,
      openHour: 9,
      openMinute: 0,
      closeHour: 20,
      closeMinute: 0,
      isOpen: true,
      displayHours: '09:00 às 20:00',
    },
    {
      day: 'Quarta-feira',
      shortDay: 'Qua',
      dayIndex: 3,
      openHour: 9,
      openMinute: 0,
      closeHour: 20,
      closeMinute: 0,
      isOpen: true,
      displayHours: '09:00 às 20:00',
    },
    {
      day: 'Quinta-feira',
      shortDay: 'Qui',
      dayIndex: 4,
      openHour: 9,
      openMinute: 0,
      closeHour: 20,
      closeMinute: 0,
      isOpen: true,
      displayHours: '09:00 às 20:00',
    },
    {
      day: 'Sexta-feira',
      shortDay: 'Sex',
      dayIndex: 5,
      openHour: 8,
      openMinute: 0,
      closeHour: 20,
      closeMinute: 0,
      isOpen: true,
      displayHours: '08:00 às 20:00',
    },
    {
      day: 'Sábado',
      shortDay: 'Sáb',
      dayIndex: 6,
      openHour: 8,
      openMinute: 0,
      closeHour: 16,
      closeMinute: 0,
      isOpen: true,
      displayHours: '08:00 às 16:00',
    },
    {
      day: 'Domingo',
      shortDay: 'Dom',
      dayIndex: 0,
      openHour: 0,
      openMinute: 0,
      closeHour: 0,
      closeMinute: 0,
      isOpen: false,
      displayHours: 'Fechado',
    },
  ],
};
