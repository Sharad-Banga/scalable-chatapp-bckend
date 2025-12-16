import { createClient } from "redis";
import { EventEmitter } from "events";

class PubSubManager extends EventEmitter{

  private static instance :PubSubManager;
  pub: any;
  sub:any;
  
  constructor() {
    super();
    this.pub = createClient({url: "redis://localhost:6379"});
    this.sub = createClient({url: "redis://localhost:6379"});

    this.pub.connect();
    this.sub.connect();

    this.sub.on('message',(channel:string , message:string)=>{
        this.emit(channel,JSON.parse(message))
    })

  }

  public static getInstance(){
    if(!PubSubManager.instance){
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  channel(roomId:string):string{
    return  `room:${roomId}`;
  }

  //i am subscribing to my channel
  async subscribe(roomId:string){
    const ch = this.channel(roomId);
    await this.sub.subscribe(ch);
  }

  async unsubscribe(roomId:string){
    const ch = this.channel(roomId);
    await this.sub.unsubscribe(ch);
  }
    

  publish(roomId:string,payload:any){
      this.pub.publish(this.channel(roomId) , JSON.stringify(payload));
  }

}

export const pubsubManager = PubSubManager.getInstance();