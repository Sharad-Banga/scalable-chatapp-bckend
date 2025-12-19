declare class RoomManager {
    private static instance;
    private rooms;
    constructor();
    static getInstance(): RoomManager;
    join(roomId: string, socket: any): void;
    leave(roomId: string, socket: any): void;
    getMembers(roomId: string): any;
    getSize(roomId: string): any;
}
export declare const roomManager: RoomManager;
export {};
//# sourceMappingURL=RoomManager.d.ts.map