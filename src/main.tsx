import {createRoot} from 'react-dom/client';
import App from './App.tsx';

// Direct DOM manipulation to verify script execution
const debugDiv = document.createElement('div');
debugDiv.style.position = 'fixed';
debugDiv.style.top = '0';
debugDiv.style.left = '0';
debugDiv.style.background = 'blue';
debugDiv.style.color = 'white';
debugDiv.style.padding = '10px';
debugDiv.style.zIndex = '9999';
debugDiv.innerText = 'JS SCRIPT EXECUTANDO';
document.body.appendChild(debugDiv);

console.log('Main.tsx loaded');

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Root element found, rendering App');
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element NOT found');
}
