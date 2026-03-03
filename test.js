console.log('Test script loaded');
const statusDiv = document.getElementById('script-status');
if (statusDiv) {
  statusDiv.innerText = 'SCRIPT CARREGADO COM SUCESSO! (VERDE)';
  statusDiv.style.color = 'lime';
}
document.body.style.backgroundColor = 'green';
