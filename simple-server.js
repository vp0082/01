import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/debug-files', (req, res) => {
  import('fs').then(fs => {
    res.json({
      dirname: __dirname,
      files: fs.readdirSync(__dirname),
      publicFiles: fs.existsSync(path.join(__dirname, 'public')) ? fs.readdirSync(path.join(__dirname, 'public')) : []
    });
  });
});

app.get('/meu-script-novo.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`
    console.log('Script novo carregado');
    const statusDiv = document.getElementById('script-status');
    if (statusDiv) {
      statusDiv.innerText = 'NOVO SCRIPT CARREGADO! (VERDE)';
      statusDiv.style.color = 'lime';
    }
    document.body.style.backgroundColor = 'green';
  `);
});

// Serve static files from the root directory
app.use(express.static(__dirname));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Simple server running at http://0.0.0.0:${PORT}`);
});
