import fs from 'fs';
import https from 'https';
import { WebSocketServer } from 'ws';

// Load SSL certificate and key
const server = https.createServer({
  key: fs.readFileSync('C:\\Users\\hp5cd\\ssl\\private.key'),
  cert: fs.readFileSync('C:\\Users\\hp5cd\\ssl\\cert.pem')
});

// Create WebSocket server on top of HTTPS
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    ws.send(`Echo: ${message.toString()}`);
  });

  ws.send('Welcome to the secure WebSocket server!');
});

// Start server
server.listen(3001, () => {
  console.log('WSS running at https://localhost:3001');
});


// import https from 'https';
// import fs from 'fs';
// import { createWebSocket } from './ws/websocket.js';

// const server = https.createServer({
//   key: fs.readFileSync('/path/to/private.key'),
//   cert: fs.readFileSync('/path/to/cert.crt')
// });

// createWebSocket(server);

// server.listen(3001, () => {
//   console.log('Secure WebSocket server listening on 3001');
// });
