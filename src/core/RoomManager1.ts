// class RoomManager1{

//   private static instance:RoomManager1;
//   private rooms : Map<String , any>;

//   constructor(){
//     this.rooms = new Map();
    
//   }

//   public static getInstance(){

//     if(!RoomManager1.instance){
//       RoomManager1.instance = new RoomManager1();
//     }
//     return RoomManager1.instance;
//   }


//   joinRoom(roomId : string , socket :any){
//       if(!this.rooms.has(roomId)){
//         this.rooms.set(roomId , new Set());
//       }
//       this.rooms.get(roomId).add(socket);
//   }

//   leaveRoom(roomId : string , socket :any){
//     if(this.rooms.has(roomId)){
//       this.rooms.get(roomId).delete(socket);
//       if(this.rooms.get(roomId).size()==0){
//         this.rooms.delete(roomId);
//       }
//     }
//   }


// }

// export const roomManager1 = RoomManager1.getInstance();