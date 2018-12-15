import { Service } from "./models/Service";
import { RouteType } from "./types/Route";

/**
 *
 * This class register routes of our services.
 * Services are our microservices applications.
 * 
 * @author Mohamed Camara GUEYE
 */

export class Router {
	
	private routes: Route[] = [];
	constructor() {}

	setRoute(identifier: string, service: Service ): void{
		const route = new Route(identifier, service);
		this.routes.push(route);
	}

	getRoute(identifier: string): Route | null {
		return this.routes.filter((item: Route, index: number , routes: Route[]) =>{
			return  item.identifier === identifier;
		})[0];
	}

	getRoutes(): Route[]{
	 	return this.routes;
	}
}
class Route {
	identifier: string;
	service: Service;
	constructor(identifier: string, service: Service) {
		this.identifier = identifier;
		this.service = service;
	}
}


