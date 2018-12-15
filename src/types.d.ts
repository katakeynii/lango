import * as express from 'express';

export interface RouteType {
  identifier: string;
  service: ServiceType;
}

export interface ServiceType {
	
	identifier: string;
	host: string;
	port: number;	

	resolve?(path:string, request: express.Request): void;
}

export interface EventType {
	aggregateType: string;
	aggregateId: number;
	eventType: string;
	eventId: number;
	eventData: [];
	dispatcherType: string;
	dispatcherId: number;
}