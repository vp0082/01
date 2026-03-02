import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Lock, 
  Camera, 
  Users, 
  CheckCircle, 
  Star,
  ShieldCheck,
  CreditCard,
  QrCode,
  Upload,
  MessageSquare,
  TrendingUp,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Heart,
  Share2,
  MoreHorizontal
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline', size?: 'sm' | 'md' | 'lg' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[#ff6b00] text-white shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:bg-[#ff8533]',
      secondary: 'bg-white/10 text-white hover:bg-white/20',
      outline: 'border border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00]/10'
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base font-semibold',
      lg: 'px-8 py-4 text-lg font-bold'
    };
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

// --- Main App ---

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [countdown, setCountdown] = useState(600);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCountdown(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!isLoaded) return <div className="min-h-screen bg-[#0f0f0f]" />;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-[#ff6b00] selection:text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-[#ff6b00]">PRIVACY</span>
            <span className="text-white">CLONE</span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="secondary" className="hidden md:flex">Entrar</Button>
            <Button size="sm" onClick={() => setShowCheckout(true)}>Assinar</Button>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="relative h-64 md:h-96">
        <img 
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop" 
          alt="Cover" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
        
        <div className="absolute -bottom-20 left-6 md:left-12 flex items-end gap-6">
          <div className="relative">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" 
              alt="Profile" 
              className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#0f0f0f] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-[#0f0f0f] rounded-full" />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <main className="max-w-7xl mx-auto px-6 mt-24 pb-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black flex items-center gap-3">
                Juliana Mendes <CheckCircle className="text-[#ff6b00] w-7 h-7" fill="currentColor" />
              </h1>
              <p className="text-white/60 text-lg mt-1">@juliana_mendes</p>
            </div>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-[#ff6b00] transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-[#ff6b00] transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-[#ff6b00] transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-8 mb-8 border-b border-white/10 pb-6">
            <div className="text-center">
              <p className="text-xl font-bold">1.2k</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">45.8k</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Likes</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">12.4k</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Fãs</p>
            </div>
          </div>
          
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Bem-vindo ao meu cantinho privado! 🔥 <br />
            Aqui você encontra tudo o que o Instagram não deixa eu postar. 
            Vídeos diários, chats exclusivos e muito mais. Vem me conhecer de verdade! 😈
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setShowCheckout(true)}
              >
                <img 
                  src={`https://picsum.photos/seed/content${i}/600/800`} 
                  alt="Content" 
                  className="w-full h-full object-cover blur-3xl scale-110 transition-transform duration-700 group-hover:scale-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#ff6b00]/20 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-[#ff6b00]" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest mb-1">Conteúdo Bloqueado</p>
                  <p className="text-xs text-white/60">Assine para desbloquear</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-[2rem] sticky top-28 border-[#ff6b00]/20 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="text-xs font-bold text-[#ff6b00] uppercase tracking-widest">Promoção Ativa</span>
            </div>
            
            <h3 className="text-2xl font-black mb-2">Assinatura VIP</h3>
            <p className="text-white/40 text-sm mb-8">Acesso total e imediato a todo o conteúdo.</p>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-[#ff6b00] tracking-tighter">R$ 29,90</span>
              <span className="text-white/40 font-medium">/mês</span>
            </div>
            
            <div className="space-y-4 mb-10">
              {[
                "Acesso a +1.200 fotos e vídeos",
                "Chat direto e privado",
                "Conteúdo novo todos os dias",
                "Sem anúncios ou censura",
                "Cancele quando quiser"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <CheckCircle className="text-[#ff6b00] w-5 h-5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Button className="w-full py-5 text-lg" onClick={() => setShowCheckout(true)}>
              QUERO ASSINAR AGORA
            </Button>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 grayscale opacity-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94Pix.svg" className="h-4" alt="Pix" />
                <div className="w-px h-4 bg-white/20" />
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="text-xs text-white/40 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro & Discreto
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheckout(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setShowCheckout(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Summary */}
              <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <h2 className="text-3xl font-black mb-8">Finalizar Assinatura</h2>
                
                <div className="flex gap-4 mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
                    className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    alt="Creator"
                  />
                  <div>
                    <p className="font-black text-lg">VIP - Juliana Mendes</p>
                    <p className="text-sm text-white/40">Acesso Mensal Recorrente</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                      <Star className="w-3 h-3" fill="currentColor" /> MELHOR ESCOLHA
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>R$ 29,90</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-bold">
                    <span>Cupom: BOASVINDAS</span>
                    <span>- R$ 10,00</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                    <span className="font-bold">Total a pagar</span>
                    <span className="text-4xl font-black text-[#ff6b00] tracking-tighter">R$ 29,90</span>
                  </div>
                </div>

                <div className="bg-[#ff6b00]/10 border border-[#ff6b00]/20 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b00]/20 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    <span className="font-bold text-white">Oferta Exclusiva:</span> Assine agora e ganhe acesso ao grupo VIP do Telegram gratuitamente.
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="md:w-1/2 p-8 md:p-12 bg-white/5">
                <div className="bg-red-500/10 text-red-500 text-center py-2 rounded-xl text-xs font-black mb-8 animate-pulse uppercase tracking-widest">
                  Oferta expira em {formatTime(countdown)}
                </div>

                <div className="flex gap-2 mb-8">
                  <button 
                    onClick={() => setPaymentMethod('pix')}
                    className={cn(
                      "flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 font-black transition-all",
                      paymentMethod === 'pix' ? "bg-[#ff6b00] text-white shadow-lg shadow-[#ff6b00]/20" : "bg-white/5 text-white/40 hover:bg-white/10"
                    )}
                  >
                    <QrCode className="w-5 h-5" /> PIX
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={cn(
                      "flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 font-black transition-all",
                      paymentMethod === 'card' ? "bg-[#ff6b00] text-white shadow-lg shadow-[#ff6b00]/20" : "bg-white/5 text-white/40 hover:bg-white/10"
                    )}
                  >
                    <CreditCard className="w-5 h-5" /> CARTÃO
                  </button>
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-3xl inline-block mb-6 shadow-2xl">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PrivacyClonePixPayment" 
                        alt="QR Code" 
                        className="w-44 h-44"
                      />
                    </div>
                    <p className="text-sm text-white/60 mb-6 px-4">Escaneie o QR Code ou copie a chave abaixo para liberar seu acesso instantaneamente.</p>
                    <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between gap-4 mb-8 border border-white/10">
                      <code className="text-[10px] truncate text-white/40 font-mono">00020126580014BR.GOV.BCB.PIX0136...</code>
                      <button className="text-[#ff6b00] font-bold text-xs shrink-0 hover:underline">COPIAR</button>
                    </div>
                    <Button className="w-full py-4">JÁ REALIZEI O PAGAMENTO</Button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Número do Cartão</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent outline-none transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Validade</label>
                        <input type="text" placeholder="MM/AA" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent outline-none transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">CVV</label>
                        <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Nome no Cartão</label>
                      <input type="text" placeholder="Como impresso no cartão" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent outline-none transition-colors" />
                    </div>
                    <Button className="w-full py-4 mt-4 shadow-lg shadow-[#ff6b00]/20">FINALIZAR COMPRA</Button>
                    <p className="text-[10px] text-center text-white/30 mt-4">Sua fatura aparecerá como "PAG*CONTEUDO" para sua privacidade.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-[#ff6b00]">PRIVACY</span>
            <span className="text-white">CLONE</span>
          </div>
          <p className="text-white/40 text-xs">© 2024 Privacy Clone. Apenas para maiores de 18 anos. Termos de Uso e Privacidade.</p>
          <div className="flex gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
            <a href="#" className="hover:text-white transition-colors">Afiliados</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
