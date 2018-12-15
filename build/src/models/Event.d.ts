export declare class Event {
    private aggregateType;
    private aggregateId;
    private eventType;
    private eventId;
    private eventData;
    private dispatcherType;
    private dispatcherId;
    constructor(aggregateType: string, aggregateId: number, eventType: string, eventId: number, eventData: [], dispatcherType: string, dispatcherId: number);
}
