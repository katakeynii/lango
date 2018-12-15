import { EventType } from "../types.d";
/**
 * @author Mohamed Camara
 */
export declare class Event implements EventType {
    aggregateType: string;
    aggregateId: number;
    eventType: string;
    eventId: number;
    eventData: [];
    dispatcherType: string;
    dispatcherId: number;
    constructor(aggregateType: string, aggregateId: number, eventType: string, eventId: number, eventData: [], dispatcherType: string, dispatcherId: number);
}
