import React, { useState } from 'react';
import { Lock, Eye, CreditCard, CheckCircle, Shield, TrendingUp } from 'lucide-react';

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#ff6b00]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff6b00] rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter">
              PRIVACY<span className="text-[#ff6b00]">CLONE</span>
            </span>
          </div>
          <button 
            onClick={() => setShowCheckout(true)}
            className="bg-[#ff6b00] hover:bg-[#ff8533] text-white px-6 py-2 rounded-full font-bold transition-all active:scale-95"
          >
            Assinar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-[#ff6b00] p-1 mx-auto overflow-hidden">
              <img 
                src="https://picsum.photos/seed/model/400/400" 
                alt="Juliana Mendes" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[#ff6b00] p-1.5 rounded-full border-2 border-[#0f0f0f]">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Juliana <span className="text-[#ff6b00]">Mendes</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo ao meu lado privado. Aqui você encontra conteúdos exclusivos, 
            bastidores e conversas que você não verá em nenhum outro lugar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
              <TrendingUp className="w-6 h-6 text-[#ff6b00] mb-3 mx-auto" />
              <div className="text-2xl font-bold">1.2k+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">Publicações</div>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
              <Eye className="w-6 h-6 text-[#ff6b00] mb-3 mx-auto" />
              <div className="text-2xl font-bold">450k</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">Visualizações</div>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
              <Lock className="w-6 h-6 text-[#ff6b00] mb-3 mx-auto" />
              <div className="text-2xl font-bold">Privado</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">Acesso VIP</div>
            </div>
          </div>

          <button 
            onClick={() => setShowCheckout(true)}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff6b00] text-white font-black text-xl rounded-full overflow-hidden transition-all hover:bg-[#ff8533] active:scale-95 shadow-[0_0_40px_rgba(255,107,0,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              DESBLOQUEAR CONTEÚDO <Lock className="w-6 h-6" />
            </span>
          </button>
        </div>
      </main>

      {/* Content Grid (Locked) */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-[3/4] bg-zinc-900 rounded-2xl relative overflow-hidden group">
              <img 
                src={`https://picsum.photos/seed/locked-${i}/600/800?blur=10`} 
                alt="Locked Content" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-10 h-10 text-white/20 group-hover:text-[#ff6b00] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setShowCheckout(false)}
          />
          <div className="relative w-full max-w-md bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-black mb-1">Assinatura VIP</h2>
                  <p className="text-zinc-500">Acesso total por 30 dias</p>
                </div>
                <div className="bg-[#ff6b00]/10 text-[#ff6b00] px-3 py-1 rounded-full text-sm font-bold">
                  OFERTA
                </div>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl mb-8 border border-white/5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-[#ff6b00]">R$ 19,90</span>
                  <span className="text-zinc-500 line-through">R$ 49,90</span>
                </div>
                <p className="text-sm text-zinc-400">Pagamento único, sem renovação automática.</p>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-between p-4 bg-white text-black rounded-2xl font-bold hover:bg-zinc-200 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    Pagar com PIX
                  </span>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-zinc-800 text-white rounded-2xl font-bold hover:bg-zinc-700 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    Cartão de Crédito
                  </span>
                </button>
              </div>

              <p className="text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" /> Pagamento 100% Seguro & Discreto
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
