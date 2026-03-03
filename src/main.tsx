import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Main.tsx loading...');
const container = document.getElementById('root');
if (container) {
  console.log('Root container found, rendering...');
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log('Render call finished');
  } catch (err) {
    console.error('Render error:', err);
    container.innerHTML = '<h1>Erro ao renderizar React: ' + err.message + '</h1>';
  }
} else {
  console.error('Root container NOT found');
}
