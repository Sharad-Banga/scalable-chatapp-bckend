import { createClient } from "redis";
import { EventEmitter } from "events";
class PubSubManager extends EventEmitter {
    static instance;
    pub;
    sub;
    constructor() {
        super();
        this.pub = createClient({ url: "redis://127.0.0.1:6379" });
        this.sub = createClient({ url: "redis://127.0.0.1:6379" });
        this.pub.connect();
        this.sub.connect();
        this.sub.on('message', (channel, message) => {
            this.emit(channel, JSON.parse(message));
        });
    }
    static getInstance() {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }
    channel(roomId) {
        return `room:${roomId}`;
    }
    //i am subscribing to my channel
    async subscribe(roomId) {
        const ch = this.channel(roomId);
        await this.sub.subscribe(ch, (message) => {
            this.emit(ch, JSON.parse(message));
        });
    }
    async unsubscribe(roomId) {
        const ch = this.channel(roomId);
        await this.sub.unsubscribe(ch);
    }
    publish(roomId, payload) {
        this.pub.publish(this.channel(roomId), JSON.stringify(payload));
    }
}
export const pubsubManager = PubSubManager.getInstance();
//# sourceMappingURL=PubsubManager.js.map