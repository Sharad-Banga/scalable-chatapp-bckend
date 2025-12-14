import WebSocket, { WebSocketServer } from "ws";
export function createWebSocket(server) {
    const ws = new WebSocketServer({ server });
    ws.on('connection', function (socket) {
        socket.on('message', () => {
            socket.send("heloooooo");
        });
    });
}
//# sourceMappingURL=websocket.js.map