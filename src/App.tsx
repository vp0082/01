import React from 'react';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#0f0f0f', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color: '#ff6b00' }}>PRIVACY CLONE</h1>
      <h2 style={{ fontSize: '2rem', margin: '0 0 2rem 0' }}>Juliana Mendes</h2>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>A plataforma está carregando...</p>
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem 2rem', 
        backgroundColor: '#ff6b00', 
        borderRadius: '9999px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        ENTRAR AGORA
      </div>
    </div>
  );
}
