export class Event {


	private aggregateType: string;
	private aggregateId: number;
	private eventType: string;
	private eventId: number;
	private eventData: [];
	private dispatcherType: string;
	private dispatcherId: number;

	constructor( aggregateType: string,
			aggregateId: number,
			eventType: string,
			eventId: number,
			eventData: [],
			dispatcherType: string,
			dispatcherId: number) {

		this.aggregateType = aggregateType;     
		this.aggregateId = aggregateId;   
		this.eventType = eventType;             
		this.eventId = eventId;         
		this.eventData = eventData;    
		this.dispatcherType = dispatcherType;   
		this.dispatcherId = dispatcherId;   

	}
}