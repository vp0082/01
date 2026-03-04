import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  Heart, 
  MessageCircle, 
  Lock, 
  Shield, 
  Star, 
  TrendingUp, 
  Camera, 
  Video,
  ChevronRight,
  Play,
  CheckCircle2,
  Instagram,
  Twitter,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-bottom border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white hidden sm:block">PRIVACY</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Explorar</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Como Funciona</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Criadores</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Planos</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-white hover:text-accent transition-colors">Entrar</button>
          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            Criar Perfil
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              <a href="#" className="text-lg font-medium text-white">Explorar</a>
              <a href="#" className="text-lg font-medium text-white">Como Funciona</a>
              <a href="#" className="text-lg font-medium text-white">Criadores</a>
              <a href="#" className="text-lg font-medium text-white">Planos</a>
              <hr className="w-full border-white/10" />
              <button className="text-lg font-semibold text-white">Entrar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CreatorCard = ({ name, username, image, followers, category }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative rounded-3xl overflow-hidden glass aspect-[3/4]"
  >
    <img 
      src={image} 
      alt={name} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
    
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-0.5 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-0.5">{name}</h3>
      <p className="text-white/60 text-sm mb-4">@{username}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-white/80 text-xs">
          <Star size={12} className="text-accent fill-accent" />
          <span>{followers} seguidores</span>
        </div>
        <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex flex-col gap-4 p-8 rounded-3xl glass hover:bg-white/10 transition-colors">
    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                A maior plataforma de conteúdo exclusivo do Brasil
              </span>
              <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                Monetize seu <br />
                <span className="text-premium">Conteúdo Premium</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Junte-se a milhares de criadores que estão transformando sua influência em um negócio lucrativo com total segurança e privacidade.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-accent/20 flex items-center justify-center gap-2">
                  Começar agora <ChevronRight size={20} />
                </button>
                <button className="w-full sm:w-auto glass hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
                  <Play size={20} className="fill-white" /> Ver como funciona
                </button>
              </div>

              <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">Pagamentos Rápidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span className="text-sm font-medium">Privacidade Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} />
                  <span className="text-sm font-medium">Crescimento Acelerado</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Criadores em Destaque</h2>
              <p className="text-white/60 text-lg">Descubra os perfis que estão bombando na plataforma.</p>
            </div>
            <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todos os criadores <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CreatorCard 
              name="Juliana Silva" 
              username="jusilva_vip" 
              image="https://picsum.photos/seed/model1/600/800"
              followers="125K"
              category="Lifestyle"
            />
            <CreatorCard 
              name="Marcos Oliveira" 
              username="marcosfit" 
              image="https://picsum.photos/seed/model2/600/800"
              followers="89K"
              category="Fitness"
            />
            <CreatorCard 
              name="Ana Clara" 
              username="anaclara_oficial" 
              image="https://picsum.photos/seed/model3/600/800"
              followers="210K"
              category="Fashion"
            />
            <CreatorCard 
              name="Ricardo Santos" 
              username="ricardo_chef" 
              image="https://picsum.photos/seed/model4/600/800"
              followers="45K"
              category="Culinária"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Por que escolher a Privacy?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Oferecemos as melhores ferramentas para você gerenciar sua carreira e seus fãs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem 
              icon={Shield}
              title="Segurança Máxima"
              description="Proteção contra pirataria e vazamento de conteúdo com tecnologia de ponta."
            />
            <FeatureItem 
              icon={TrendingUp}
              title="Melhores Taxas"
              description="Fique com a maior parte do seu faturamento. Sem taxas ocultas ou surpresas."
            />
            <FeatureItem 
              icon={MessageCircle}
              title="Engajamento Real"
              description="Ferramentas exclusivas de chat e interação direta com seus maiores fãs."
            />
            <FeatureItem 
              icon={Camera}
              title="Qualidade 4K"
              description="Suporte para upload de fotos e vídeos em altíssima resolução sem perda de qualidade."
            />
            <FeatureItem 
              icon={Video}
              title="Lives Exclusivas"
              description="Transmita ao vivo para seus assinantes e receba presentes em tempo real."
            />
            <FeatureItem 
              icon={Lock}
              title="Controle Total"
              description="Você decide o que postar, quanto cobrar e quem pode ver seu perfil."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-accent" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Pronto para começar?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Crie seu perfil em menos de 5 minutos e comece a faturar com seu conteúdo exclusivo hoje mesmo.
            </p>
            <button className="bg-white text-accent hover:bg-white/90 px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl">
              Criar meu Perfil Grátis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">PRIVACY</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                A plataforma líder em monetização de conteúdo exclusivo na América Latina. Transformando criadores em empreendedores de sucesso.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/50 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/50 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/50 transition-all">
                  <Globe size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Plataforma</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Explorar Criadores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Suporte</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm text-white/50 mb-4">Receba dicas de como crescer seu perfil.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent w-full"
                />
                <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-accent-hover transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              © 2024 Privacy Clone. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Direitos Autorais</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
