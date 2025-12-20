import WebSocket, { WebSocketServer } from "ws";
import { roomManager } from "../core/RoomManager.js";
import { pubsubManager } from "../core/PubsubManager.js";
export function createWebSocket(server) {
    const ws = new WebSocketServer({ server });
    ws.on('connection', function (socket) {
        socket.on('message', async function (message) {
            const parsedData = JSON.parse(message.toString());
            if (parsedData.type == "join-room") {
                roomManager.join(parsedData.roomId, socket);
                if (roomManager.getSize(parsedData.roomId) == 1) {
                    pubsubManager.subscribe(parsedData.roomId);
                    pubsubManager.on(`room:${parsedData.roomId}`, (payload) => {
                        for (const ws of roomManager.getMembers(parsedData.roomId)) {
                            if (ws.readyState === WebSocket.OPEN) {
                                ws.send(JSON.stringify(payload));
                            }
                        }
                    });
                }
            }
            if (parsedData.type == "chat") {
                await pubsubManager.publish(parsedData.roomId, {
                    type: "chat",
                    roomId: parsedData.roomId,
                    message: parsedData.message,
                    ts: Date.now()
                });
            }
        });
    });
}
//# sourceMappingURL=websocket.js.map