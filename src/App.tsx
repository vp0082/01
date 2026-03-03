import React from 'react';

export default function App() {
  console.log('App component rendering');
  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>
      APP CARREGADO COM SUCESSO! (FUNDO VERMELHO)
    </div>
  );
}
