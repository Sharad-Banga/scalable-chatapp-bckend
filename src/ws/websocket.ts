import WebSocket,{WebSocketServer} from "ws";

export function createWebSocket(server:any){

  const ws = new WebSocketServer({server});

  ws.on('connection',function(socket){

    socket.on('message',function(message){
      const parsedData = JSON.parse(message.toString());

      if(parsedData.type == "join-room"){

      }


      if(parsedData.type == "chat"){
        
      }
    })
    
  })
  
}