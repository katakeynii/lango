import { Service } from "./models/Service";
import { RouteType, ServiceType } from "./types";

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

	setRoute(identifier: string, service: ServiceType ): Router{
		const route = new Route(identifier, service);
		this.routes.push(route);
		return this;
	}

	getRoute(identifier: string): Route | null {
		return this.routes.filter((item: Route, index: number , routes: Route[]) =>{
			return  item.getIdentifier() === identifier;
		})[0];
	}

	getRoutes(): Route[]{
	 	return this.routes;
	}

}
class Route {
	private identifier: string;
	private service: ServiceType;
	constructor(identifier: string, service: ServiceType) {
		this.identifier = identifier;
		this.service = service;
	}
	getIdentifier(): string{
		return this.identifier;
	}
	getService(): ServiceType {
		return this.service;
	}
	toString(): string {
		return this.identifier	;
	}
}


