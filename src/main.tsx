import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('Script main.tsx carregado com sucesso!');

// Se o script rodar, a tela deve mudar de cor para verde
document.body.style.backgroundColor = 'green';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
