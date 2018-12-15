"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @author Mohamed Camara GUEYE
 *
 */
class Service {
    constructor(identifier, host, port = 80) {
        this.identifier = identifier;
        this.host = host;
        this.port = port;
    }
    toString() {
        return `${this.host}:${this.port}`;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map