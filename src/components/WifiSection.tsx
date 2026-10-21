import React, { useState } from 'react';
import { Wifi, Copy, Check, Lock } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';

export const WifiSection: React.FC = () => {
  const wifiData = DEFAULT_STUDIO_CONFIG.wifi;
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCopyPassword = async () => {
    // Copies EXCLUSIVELY wifiPassword
    const success = await copyToClipboard(wifiData.password);
    if (success) {
      setCopied(true);
      setCopyError(false);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } else {
      setCopyError(true);
      setTimeout(() => {
        setCopyError(false);
      }, 3000);
    }
  };

  return (
    <section className="w-full my-6 px-4">
      <div className="max-w-md mx-auto rounded-3xl bg-white border border-[#E7D3A0] p-5 shadow-sm hover:shadow-md transition-shadow">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#FAF8F3]">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF8F3] to-[#E7D3A0]/40 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B]">
            <Wifi className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#171717] tracking-wide">
              Wi-Fi para Clientes
            </h3>
            <p className="text-[11px] text-[#77736D]">
              Conecte-se durante seu momento de autocuidado
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mt-4 space-y-3">
          {/* Network Name Field */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F3] border border-[#E7D3A0]/50">
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[#77736D]">
                Rede Wi-Fi
              </span>
              <span className="text-sm font-semibold text-[#171717] tracking-wide select-all">
                {wifiData.name}
              </span>
            </div>
            <span className="text-[11px] text-[#C6A15B] font-medium px-2 py-0.5 rounded-md bg-white border border-[#E7D3A0]/60">
              Disponível
            </span>
          </div>

          {/* Password Field */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F3] border border-[#E7D3A0]/50">
            <div className="text-left flex-1 mr-2">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[#77736D]">
                Senha
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-mono font-medium text-[#171717] tracking-wider select-all">
                  {showPassword ? wifiData.password : '••••••••••••'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] text-[#77736D] hover:text-[#171717] underline ml-1 focus:outline-none"
                >
                  {showPassword ? 'ocultar' : 'mostrar'}
                </button>
              </div>
            </div>
            <div className="text-[#C6A15B]">
              <Lock className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Copy Password Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleCopyPassword}
            className={`w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
              copied
                ? 'bg-[#171717] text-[#FAF8F3] shadow-md border border-[#C6A15B]'
                : 'bg-gradient-to-r from-[#C6A15B] via-[#E7D3A0] to-[#C6A15B] text-[#171717] hover:shadow-md hover:shadow-[#C6A15B]/20 border border-[#FAF8F3]/60'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#E7D3A0]" />
                <span className="font-semibold tracking-wide">
                  Senha copiada com sucesso!
                </span>
              </>
            ) : copyError ? (
              <span className="text-red-700">Erro ao copiar. Selecione manualmente.</span>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#171717]" />
                <span>Copiar senha</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
