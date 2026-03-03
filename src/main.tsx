console.log('Main.tsx module starting...');

const status = document.getElementById('status-text');
if (status) {
  status.innerText = 'JS MODULE CARREGADO! INICIANDO APP...';
}

document.body.style.backgroundColor = 'orange';

import React from 'react';
import {createRoot} from 'react-dom/client';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#ff0000',
      color: 'white',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>APP CARREGADO COM SUCESSO!</h1>
      <p style={{ fontSize: '1.5rem' }}>Se você vê este fundo VERMELHO, o React está funcionando sem arquivos externos.</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
  document.body.style.backgroundColor = 'white';
}
