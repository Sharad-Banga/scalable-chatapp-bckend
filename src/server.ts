import fs from 'fs';
import https from 'https';
import { WebSocketServer } from 'ws';

const server = https.createServer({
  key: fs.readFileSync('./ssl/private.key'),  // relative Linux path
  cert: fs.readFileSync('./ssl/cert.pem')
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (msg) => ws.send(`Echo: ${msg}`));
  ws.send('Welcome!');
});

server.listen(3001, () => console.log('WSS 3001'));
