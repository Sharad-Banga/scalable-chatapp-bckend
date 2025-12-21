import http from 'http';
import { createWebSocket } from './ws/websocket.js';

const server = http.createServer();

createWebSocket(server);

server.listen(3001,()=>{
  console.log("server is listening at port 3001");
})