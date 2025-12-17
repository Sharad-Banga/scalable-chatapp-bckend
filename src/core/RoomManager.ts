class RoomManager{



  private static instance: RoomManager;
  private rooms: Map<string, any>;
  constructor(){
    this.rooms = new Map();
  }

  public static getInstance(): RoomManager {
    if (!RoomManager.instance) {
      RoomManager.instance = new RoomManager();
    }   
    return RoomManager.instance;
  }

  public join(roomId: string, socket: any): void {
    if (!this.rooms.has(roomId)) {
      this.rooms.set(roomId, new Set());
    }
    this.rooms.get(roomId).add(socket); 
  }

  public leave(roomId: string, socket: any): void {
    if (this.rooms.has(roomId)) {
      this.rooms.get(roomId).delete(socket);
      if (this.rooms.get(roomId).size === 0) {
        this.rooms.delete(roomId);
      }
    }
  }

  
}

export const roomManager = RoomManager.getInstance();