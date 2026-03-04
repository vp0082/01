import React from 'react';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#F27D26', fontSize: '3rem' }}>PRIVACY CLONE</h1>
      <p>Se você está vendo isso, o React carregou com sucesso!</p>
      <button 
        onClick={() => alert('Funcionando!')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#F27D26',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        TESTAR BOTÃO
      </button>
    </div>
  );
}
