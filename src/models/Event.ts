import { EventType } from "../types.d";
/**
 * @author Mohamed Camara 
 */

export class Event implements EventType {


	aggregateType: string;
	aggregateId: number;
	eventType: string;
	eventId: number;
	eventData: [];
	dispatcherType: string;
	dispatcherId: number;

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