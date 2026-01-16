

import https from 'https';
import fs from 'fs';
import { createWebSocket } from './ws/websocket.js';

const server = https.createServer({
  key: fs.readFileSync('/path/to/private.key'),
  cert: fs.readFileSync('/path/to/cert.crt')
});

createWebSocket(server);

server.listen(3001, () => {
  console.log('Secure WebSocket server listening on 3001');
});
