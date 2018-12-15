"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * This class register routes of our services.
 * Services are our microservices applications.
 *
 * @author Mohamed Camara GUEYE
 */
class Router {
    constructor() {
        this.routes = [];
    }
    setRoute(identifier, service) {
        const route = new Route(identifier, service);
        this.routes.push(route);
        return this;
    }
    getRoute(identifier) {
        return this.routes.filter((item, index, routes) => {
            return item.getIdentifier() === identifier;
        })[0];
    }
    getRoutes() {
        return this.routes;
    }
}
exports.Router = Router;
class Route {
    constructor(identifier, service) {
        this.identifier = identifier;
        this.service = service;
    }
    getIdentifier() {
        return this.identifier;
    }
    getService() {
        return this.service;
    }
    toString() {
        return this.identifier;
    }
}
//# sourceMappingURL=router.js.map