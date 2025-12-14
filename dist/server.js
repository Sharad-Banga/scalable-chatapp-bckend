import http from 'http';
import { createWebSocket } from './ws/websocket.js';
const server = http.createServer();
// console.log(server);
createWebSocket(server);
server.listen(3000, () => {
    console.log("server is listening at port 3000");
});
//# sourceMappingURL=server.js.map