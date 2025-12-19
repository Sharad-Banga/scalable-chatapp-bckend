import { EventEmitter } from "events";
declare class PubSubManager extends EventEmitter {
    private static instance;
    pub: any;
    sub: any;
    constructor();
    static getInstance(): PubSubManager;
    channel(roomId: string): string;
    subscribe(roomId: string): Promise<void>;
    unsubscribe(roomId: string): Promise<void>;
    publish(roomId: string, payload: any): void;
}
export declare const pubsubManager: PubSubManager;
export {};
//# sourceMappingURL=PubsubManager.d.ts.map