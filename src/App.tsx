import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-600 text-white p-10">
      <h1 className="text-6xl font-black mb-4">TESTE DE RENDERIZAÇÃO</h1>
      <p className="text-2xl opacity-90">Se você está vendo este fundo VERMELHO, o React e o Tailwind estão funcionando corretamente.</p>
      <div className="mt-10 p-6 bg-white text-red-600 rounded-2xl font-bold text-xl shadow-2xl">
        O JS FOI EXECUTADO COM SUCESSO
      </div>
    </div>
  );
}
