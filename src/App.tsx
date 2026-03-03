import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Lock, 
  Heart, 
  MessageCircle, 
  Share2, 
  Search, 
  Bell, 
  Menu, 
  X, 
  CreditCard, 
  Settings, 
  LogOut,
  Star,
  Shield,
  Zap,
  Eye,
  Camera,
  CheckCircle,
  TrendingUp,
  MoreHorizontal,
  Bookmark,
  Image as ImageIcon,
  Video,
  Mic
} from 'lucide-react';

// --- Types ---
interface Creator {
  id: string;
  name: string;
  username: string;
  avatar: string;
  banner: string;
  bio: string;
  subscribers: string;
  postsCount: number;
  photosCount: number;
  videosCount: number;
  price: number;
  isVerified: boolean;
}

interface Post {
  id: string;
  creatorId: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  likes: number;
  comments: number;
  isLocked: boolean;
  timestamp: string;
}

// --- Mock Data ---
const MOCK_CREATORS: Creator[] = [
  {
    id: '1',
    name: 'Juliana Mendes',
    username: 'julimendes',
    avatar: 'https://picsum.photos/seed/juli/400/400',
    banner: 'https://picsum.photos/seed/banner1/1200/400',
    bio: 'Bem-vindo ao meu lado privado. Aqui você encontra conteúdos exclusivos, bastidores e conversas que você não verá em nenhum outro lugar. ✨',
    subscribers: '12.4K',
    postsCount: 142,
    photosCount: 89,
    videosCount: 24,
    price: 19.90,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    username: 'mthorne',
    avatar: 'https://picsum.photos/seed/marcus/400/400',
    banner: 'https://picsum.photos/seed/banner2/1200/400',
    bio: 'Fitness coach and wellness advocate. Join my journey to peak performance.',
    subscribers: '8.2K',
    postsCount: 95,
    photosCount: 45,
    videosCount: 32,
    price: 29.90,
    isVerified: true,
  }
];

const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    creatorId: '1',
    content: 'Bastidores do ensaio de hoje! O resultado completo está bloqueado para assinantes VIP. 📸🔥',
    mediaUrl: 'https://picsum.photos/seed/art1/800/1000',
    mediaType: 'image',
    likes: 1240,
    comments: 45,
    isLocked: true,
    timestamp: '2h atrás',
  },
  {
    id: 'p2',
    creatorId: '1',
    content: 'Bom dia meus amores! Pronta para começar a semana com tudo. Como vocês estão? ✨',
    likes: 850,
    comments: 12,
    isLocked: false,
    timestamp: '5h atrás',
  },
  {
    id: 'p3',
    creatorId: '1',
    content: 'Vídeo exclusivo que acabei de gravar. Só para quem é do clube! 🤫',
    mediaUrl: 'https://picsum.photos/seed/shoot1/800/1000',
    mediaType: 'image',
    likes: 2100,
    comments: 89,
    isLocked: true,
    timestamp: '1 dia atrás',
  }
];

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black tracking-tighter text-premium italic font-serif">PRIVACY</h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
            <a href="#" className="text-white hover:text-white transition-colors">Início</a>
            <a href="#" className="hover:text-white transition-colors">Descobrir</a>
            <a href="#" className="hover:text-white transition-colors">Criadores</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <Search size={16} className="text-white/40" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-40 placeholder:text-white/20"
            />
          </div>
          <button className="p-2 text-white/60 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#F27D26] rounded-full border-2 border-black"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F27D26] to-orange-600 flex items-center justify-center cursor-pointer">
            <User size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const CreatorProfile = ({ creator, onSubscribe }: any) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="h-48 md:h-80 w-full relative overflow-hidden">
        <img 
          src={creator.banner} 
          alt="Banner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Profile Info */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-zinc-900">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {creator.isVerified && (
                <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1 border-2 border-black">
                  <CheckCircle size={14} fill="white" className="text-white" />
                </div>
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-black flex items-center gap-2 tracking-tight">
                {creator.name}
                <span className="text-sm font-normal text-white/40">@{creator.username}</span>
              </h2>
              <p className="mt-2 text-white/70 max-w-lg leading-relaxed">{creator.bio}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button 
              onClick={onSubscribe}
              className="w-full md:w-64 bg-white text-black font-black py-4 rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-95"
            >
              <Zap size={18} fill="black" />
              ASSINAR POR R$ {creator.price.toFixed(2)}/MÊS
            </button>
            <div className="flex items-center gap-2">
              <button className="flex-1 p-3 glass rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
                <MessageCircle size={20} />
              </button>
              <button className="flex-1 p-3 glass rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="flex-1 p-3 glass rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-8 py-6 border-y border-white/5">
          <div className="text-center">
            <div className="text-xl font-black">{creator.postsCount}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black">{creator.photosCount}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Fotos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black">{creator.videosCount}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Vídeos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black">{creator.subscribers}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Fãs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ post, onSubscribe }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mt-6 glass rounded-2xl overflow-hidden border border-white/5"
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
            <img src={MOCK_CREATORS[0].avatar} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="font-bold text-sm">{MOCK_CREATORS[0].name}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">{post.timestamp}</div>
          </div>
        </div>
        <button className="text-white/40 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="px-4 pb-4 text-sm text-white/90 leading-relaxed">
        {post.content}
      </div>

      {post.mediaUrl && (
        <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
          <img 
            src={post.mediaUrl} 
            alt="Post content" 
            className={`w-full h-full object-cover transition-all duration-700 ${post.isLocked ? 'blur-3xl scale-110' : ''}`}
            referrerPolicy="no-referrer"
          />
          {post.isLocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">Conteúdo Exclusivo</h3>
              <p className="text-white/60 text-sm mb-6">Assine para desbloquear este post</p>
              <button 
                onClick={onSubscribe}
                className="bg-[#F27D26] hover:bg-[#F27D26]/90 text-white font-black px-8 py-3 rounded-full transition-all active:scale-95 shadow-lg shadow-[#F27D26]/20"
              >
                ASSINAR PARA VER
              </button>
            </div>
          )}
        </div>
      )}

      <div className="p-4 flex items-center justify-between border-t border-white/5">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors">
            <Heart size={20} />
            <span className="text-sm font-medium">{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <Share2 size={20} />
        </button>
      </div>
    </motion.div>
  );
};

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col gap-6 w-64 fixed left-4 top-24 bottom-4">
      <div className="glass rounded-2xl p-4 flex flex-col gap-2">
        <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] px-2 mb-2">Menu</h3>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-white/10 text-white font-bold text-sm">
          <User size={18} />
          Meu Perfil
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-sm font-medium">
          <CreditCard size={18} />
          Carteira
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-sm font-medium">
          <Star size={18} />
          Favoritos
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-sm font-medium">
          <Settings size={18} />
          Configurações
        </a>
      </div>

      <div className="glass rounded-2xl p-4">
        <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] px-2 mb-4">Sugestões</h3>
        <div className="flex flex-col gap-4">
          {MOCK_CREATORS.slice(1).map(c => (
            <div key={c.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div className="text-xs">
                  <div className="font-bold">{c.name}</div>
                  <div className="text-white/40">@{c.username}</div>
                </div>
              </div>
              <button className="p-1.5 rounded-full border border-white/10 hover:bg-white/5">
                <Zap size={14} className="text-[#F27D26]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-black mb-1 tracking-tight">Assinatura VIP</h2>
                  <p className="text-zinc-500 text-sm">Acesso total por 30 dias</p>
                </div>
                <div className="bg-[#F27D26]/10 text-[#F27D26] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  OFERTA
                </div>
              </div>

              <div className="bg-black/40 p-6 rounded-3xl mb-8 border border-white/5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-[#F27D26]">R$ 19,90</span>
                  <span className="text-zinc-500 line-through text-sm">R$ 49,90</span>
                </div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Pagamento único, sem renovação automática.</p>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-between p-4 bg-white text-black rounded-2xl font-black text-sm hover:bg-zinc-200 transition-colors active:scale-[0.98]">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    Pagar com PIX
                  </span>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-zinc-800 text-white rounded-2xl font-black text-sm hover:bg-zinc-700 transition-colors active:scale-[0.98]">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    Cartão de Crédito
                  </span>
                </button>
              </div>

              <p className="text-center text-[10px] text-zinc-500 flex items-center justify-center gap-2 uppercase tracking-widest">
                <Shield size={12} /> Pagamento 100% Seguro & Discreto
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/5 px-6 py-3 flex items-center justify-between z-50">
      <button className="text-[#F27D26]"><User size={24} /></button>
      <button className="text-white/60"><Search size={24} /></button>
      <button className="bg-[#F27D26] w-12 h-12 rounded-full flex items-center justify-center -mt-8 border-4 border-black shadow-lg">
        <Camera size={24} className="text-white" />
      </button>
      <button className="text-white/60"><MessageCircle size={24} /></button>
      <button className="text-white/60"><Settings size={24} /></button>
    </div>
  );
};

export default function App() {
  const [activeCreator] = useState(MOCK_CREATORS[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F27D26] selection:text-white">
      <Navbar />
      
      <main className="pt-16 pb-24 md:pb-8">
        <CreatorProfile creator={activeCreator} onSubscribe={() => setIsCheckoutOpen(true)} />
        
        <div className="max-w-7xl mx-auto px-4 mt-8 flex gap-8">
          <Sidebar />
          
          <div className="flex-1 lg:ml-72">
            <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
              <button className="px-6 py-2 rounded-full bg-white text-black font-black text-xs whitespace-nowrap uppercase tracking-wider">Todos os Posts</button>
              <button className="px-6 py-2 rounded-full glass text-white/60 font-black text-xs whitespace-nowrap uppercase tracking-wider hover:text-white transition-colors">Fotos</button>
              <button className="px-6 py-2 rounded-full glass text-white/60 font-black text-xs whitespace-nowrap uppercase tracking-wider hover:text-white transition-colors">Vídeos</button>
              <button className="px-6 py-2 rounded-full glass text-white/60 font-black text-xs whitespace-nowrap uppercase tracking-wider hover:text-white transition-colors">Áudio</button>
            </div>

            <div className="space-y-6">
              {MOCK_POSTS.map(post => (
                <PostCard key={post.id} post={post} onSubscribe={() => setIsCheckoutOpen(true)} />
              ))}
            </div>
          </div>

          <div className="hidden xl:block w-80">
            <div className="glass rounded-[2rem] p-8 sticky top-24 border border-white/5">
              <h3 className="text-xl font-black mb-6 tracking-tight">Assinatura</h3>
              <div className="p-5 rounded-2xl bg-[#F27D26]/10 border border-[#F27D26]/20 mb-6">
                <div className="text-[#F27D26] text-[10px] font-black mb-1 tracking-widest uppercase">MELHOR VALOR</div>
                <div className="text-3xl font-black">R$ 149,90<span className="text-xs font-normal text-white/40 tracking-normal">/ano</span></div>
                <div className="text-[10px] text-white/60 mt-1 uppercase tracking-wider">Economize 35% comparado ao mensal</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-xs font-medium text-white/80">
                  <Shield size={16} className="text-[#F27D26]" />
                  Acesso total a todo conteúdo
                </li>
                <li className="flex items-center gap-3 text-xs font-medium text-white/80">
                  <MessageCircle size={16} className="text-[#F27D26]" />
                  Mensagens diretas (DM)
                </li>
                <li className="flex items-center gap-3 text-xs font-medium text-white/80">
                  <Eye size={16} className="text-[#F27D26]" />
                  Lives exclusivas
                </li>
              </ul>
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-white text-black font-black py-4 rounded-full hover:bg-white/90 transition-all active:scale-95"
              >
                ASSINAR AGORA
              </button>
            </div>
          </div>
        </div>
      </main>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <MobileNav />
    </div>
  );
}
