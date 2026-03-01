import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Lock, 
  Camera, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  ShieldCheck,
  CreditCard,
  QrCode,
  LayoutDashboard,
  Upload,
  MessageSquare,
  TrendingUp,
  LogOut,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from './lib/utils';

// --- Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline', size?: 'sm' | 'md' | 'lg' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-white neon-orange hover:bg-accent-hover',
      secondary: 'bg-white/10 text-white hover:bg-white/20',
      outline: 'border border-accent text-accent hover:bg-accent/10'
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'glass py-3' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <span className="text-accent">PRIVACY</span>
          <span className="text-white">CLONE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">Início</Link>
          <Link to="/perfil" className="text-sm font-medium hover:text-accent transition-colors">Explorar</Link>
          <Link to="/admin" className="text-sm font-medium hover:text-accent transition-colors">Criadores</Link>
          <Button size="sm" onClick={() => window.location.href = '/perfil'}>Assinar Agora</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass p-6 flex flex-col gap-4 md:hidden"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link to="/perfil" onClick={() => setIsMenuOpen(false)}>Explorar</Link>
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>Criadores</Link>
          <Button onClick={() => setIsMenuOpen(false)}>Assinar Agora</Button>
        </motion.div>
      )}
    </nav>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1920&auto=format&fit=crop" 
            alt="Creator" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
              CONTEÚDO EXCLUSIVO
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
              Acesse o lado <span className="text-accent">privado</span> da sua criadora favorita.
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-lg">
              Fotos, vídeos e interações que você não encontra em nenhum outro lugar. Assine agora e faça parte da comunidade VIP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/perfil">
                <Button size="lg" className="w-full sm:w-auto">Assinar Agora — R$ 29,90/mês</Button>
              </Link>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-background"
                      alt="User"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/80">+12.4k assinantes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que assinar?</h2>
            <p className="text-white/60">A melhor experiência para fãs e criadores.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Flame className="text-accent" />, title: "Conteúdo Exclusivo", desc: "Acesse mídias que nunca serão postadas em redes sociais públicas." },
              { icon: <Lock className="text-accent" />, title: "Acesso Privado", desc: "Um ambiente seguro e discreto para você aproveitar o melhor conteúdo." },
              { icon: <Camera className="text-accent" />, title: "Fotos e Vídeos 4K", desc: "Qualidade máxima em cada detalhe para uma imersão total." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">O que dizem os fãs</h2>
              <p className="text-white/60">Feedback real de quem já faz parte.</p>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <span className="text-white font-bold ml-2">4.9/5.0</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Carlos Silva", text: "Melhor investimento que já fiz. O conteúdo é realmente diferenciado e a plataforma é muito rápida." },
              { name: "André Santos", text: "A interação no chat é incrível. Sinto que realmente tenho acesso à rotina dela." },
              { name: "Ricardo M.", text: "O sistema de PIX é instantâneo. Assinei e em 2 segundos já estava vendo os vídeos." }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-3xl italic text-white/80">
                "{t.text}"
                <div className="mt-6 flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 rounded-full bg-accent/20" />
                  <span className="font-bold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">© 2024 Privacy Clone. Todos os direitos reservados. +18 apenas.</p>
      </footer>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <img 
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop" 
          alt="Cover" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-16 left-6 md:left-12 flex items-end gap-6">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" 
              alt="Profile" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-background rounded-full" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid lg:grid-cols-3 gap-12">
        {/* Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-black flex items-center gap-2">
                Juliana Mendes <CheckCircle className="text-accent w-6 h-6" fill="currentColor" />
              </h1>
              <p className="text-white/60">@juliana_mendes</p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="text-center">
                <p className="font-bold">1.2k</p>
                <p className="text-xs text-white/40">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold">45.8k</p>
                <p className="text-xs text-white/40">Likes</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Bem-vindo ao meu cantinho privado! 🔥 <br />
            Aqui você encontra tudo o que o Instagram não deixa eu postar. 
            Vídeos diários, chats exclusivos e muito mais. Vem me conhecer de verdade! 😈
          </p>

          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6,7,8,9].map(i => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&w=400&q=60`} 
                  alt="Content" 
                  className="w-full h-full object-cover blur-2xl scale-110 transition-transform duration-500 group-hover:scale-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                  <Lock className="w-8 h-8 mb-2 text-white/80" />
                  <p className="text-xs font-bold uppercase tracking-widest">Assine para ver</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Sticky */}
        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-3xl sticky top-28">
            <h3 className="text-2xl font-bold mb-6">Assinatura Mensal</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black text-accent">R$ 29,90</span>
              <span className="text-white/40">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Acesso a +1.200 fotos e vídeos",
                "Chat direto comigo",
                "Conteúdo novo todos os dias",
                "Sem anúncios",
                "Cancele quando quiser"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle className="text-accent w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/checkout">
              <Button className="w-full" size="lg">ASSINAR AGORA</Button>
            </Link>
            
            <p className="text-center text-xs text-white/40 mt-6 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [method, setMethod] = useState<'pix' | 'card'>('pix');
  const [countdown, setCountdown] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => setCountdown(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Summary */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Finalizar Assinatura</h2>
          <div className="glass p-6 rounded-3xl mb-6">
            <div className="flex gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
                className="w-16 h-16 rounded-2xl object-cover"
                alt="Creator"
              />
              <div>
                <p className="font-bold">Assinatura VIP - Juliana Mendes</p>
                <p className="text-sm text-white/40">Acesso Mensal Recorrente</p>
              </div>
            </div>
            <div className="space-y-3 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span className="text-white/60">Subtotal</span>
                <span>R$ 29,90</span>
              </div>
              <div className="flex justify-between text-green-400 text-sm">
                <span>Desconto (BOASVINDAS)</span>
                <span>- R$ 0,00</span>
              </div>
              <div className="flex justify-between font-bold text-xl pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-accent">R$ 29,90</span>
              </div>
            </div>
          </div>

          {/* Order Bump */}
          <div className="bg-accent/10 border border-accent/30 p-6 rounded-3xl flex items-center gap-4 cursor-pointer hover:bg-accent/20 transition-colors">
            <div className="w-6 h-6 rounded border-2 border-accent flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-sm" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Adicionar Pack Exclusivo de Praia 🏖️</p>
              <p className="text-xs text-white/60">Apenas +R$ 9,90 (Pagamento único)</p>
            </div>
            <span className="text-accent font-bold">+R$ 9,90</span>
          </div>

          <div className="mt-8 flex items-center gap-4 text-white/40 text-xs">
            <ShieldCheck className="w-8 h-8" />
            <p>Garantia de 7 dias. Se não gostar do conteúdo, devolvemos seu dinheiro sem perguntas.</p>
          </div>
        </div>

        {/* Right: Payment */}
        <div className="glass p-8 rounded-3xl h-fit">
          <div className="bg-red-500/10 text-red-500 text-center py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
            Oferta expira em {formatTime(countdown)}
          </div>

          <div className="flex gap-2 mb-8">
            <button 
              onClick={() => setMethod('pix')}
              className={cn(
                "flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all",
                method === 'pix' ? "bg-accent text-white" : "bg-white/5 text-white/40"
              )}
            >
              <QrCode className="w-5 h-5" /> PIX
            </button>
            <button 
              onClick={() => setMethod('card')}
              className={cn(
                "flex-1 py-3 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all",
                method === 'card' ? "bg-accent text-white" : "bg-white/5 text-white/40"
              )}
            >
              <CreditCard className="w-5 h-5" /> Cartão
            </button>
          </div>

          {method === 'pix' ? (
            <div className="text-center">
              <div className="bg-white p-4 rounded-2xl inline-block mb-6">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PrivacyClonePixPayment" 
                  alt="QR Code" 
                  className="w-40 h-40"
                />
              </div>
              <p className="text-sm text-white/60 mb-6">Escaneie o QR Code acima ou copie a chave abaixo para pagar via PIX.</p>
              <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between gap-4 mb-8">
                <code className="text-xs truncate text-white/40">00020126580014BR.GOV.BCB.PIX0136...</code>
                <button className="text-accent font-bold text-sm shrink-0">COPIAR</button>
              </div>
              <Button className="w-full">JÁ REALIZEI O PAGAMENTO</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-white/40 uppercase mb-2 block">Número do Cartão</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-2 block">Validade</label>
                  <input type="text" placeholder="MM/AA" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-2 block">CVV</label>
                  <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-white/40 uppercase mb-2 block">Nome no Cartão</label>
                <input type="text" placeholder="Como no cartão" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
              </div>
              <Button className="w-full mt-4">FINALIZAR COMPRA</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2">Painel do Criador</h1>
          <p className="text-white/40">Bem-vinda de volta, Juliana.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm" className="gap-2">
            <Upload className="w-4 h-4" /> Novo Post
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <LogOut className="w-4 h-4" /> Sair
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Assinantes Ativos", value: "1,248", change: "+12%", icon: <Users className="text-blue-400" /> },
          { label: "Receita Mensal", value: "R$ 37.410", change: "+8%", icon: <TrendingUp className="text-green-400" /> },
          { label: "Novas Mensagens", value: "24", change: "", icon: <MessageSquare className="text-accent" /> },
          { label: "Visualizações", value: "142k", change: "+24%", icon: <Camera className="text-purple-400" /> }
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-400">{stat.change}</span>
            </div>
            <p className="text-white/40 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Últimos Conteúdos</h3>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 overflow-hidden">
                    <img src={`https://picsum.photos/seed/post${i}/200/200`} className="w-full h-full object-cover" alt="Post" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Vídeo de Bom Dia ☕</p>
                    <p className="text-xs text-white/40">Postado há 2 horas • 1.2k views</p>
                  </div>
                  <ChevronRight className="text-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Planos de Assinatura</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border-2 border-accent bg-accent/5">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Mensal</span>
                  <span className="text-accent font-bold">R$ 29,90</span>
                </div>
                <p className="text-xs text-white/40">Plano padrão com acesso total.</p>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Trimestral</span>
                  <span className="text-white/60">R$ 79,90</span>
                </div>
                <p className="text-xs text-white/40">Economia de 15% para o fã.</p>
              </div>
              <Button variant="outline" className="w-full text-sm">Criar Novo Plano</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
