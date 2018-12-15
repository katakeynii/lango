export interface Event {
	aggregateType: string;
	aggregateId: number;
	eventType: string;
	eventId: number;
	eventData: [];
	dispatcherType: string;
	dispatcherId: number;

}
