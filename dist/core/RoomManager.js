class RoomManager {
    static instance;
    rooms;
    constructor() {
        this.rooms = new Map();
    }
    static getInstance() {
        if (!RoomManager.instance) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    }
    join(roomId, socket) {
        if (!this.rooms.has(roomId)) {
            this.rooms.set(roomId, new Set());
        }
        this.rooms.get(roomId).add(socket);
    }
    leave(roomId, socket) {
        if (this.rooms.has(roomId)) {
            this.rooms.get(roomId).delete(socket);
            if (this.rooms.get(roomId).size === 0) {
                this.rooms.delete(roomId);
            }
        }
    }
    getMembers(roomId) {
        return this.rooms.get(roomId) ?? new Set();
    }
    getSize(roomId) {
        return this.rooms.get(roomId)?.size ?? 0;
    }
}
export const roomManager = RoomManager.getInstance();
//# sourceMappingURL=RoomManager.js.map