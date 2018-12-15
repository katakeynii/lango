import { ServiceType } from "./types";
/**
 *
 * This class register routes of our services.
 * Services are our microservices applications.
 *
 * @author Mohamed Camara GUEYE
 */
export declare class Router {
    private routes;
    constructor();
    setRoute(identifier: string, service: ServiceType): Router;
    getRoute(identifier: string): Route | null;
    getRoutes(): Route[];
}
declare class Route {
    private identifier;
    private service;
    constructor(identifier: string, service: ServiceType);
    getIdentifier(): string;
    getService(): ServiceType;
    toString(): string;
}
export {};
