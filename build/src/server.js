"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
    setMiddlewares() {
        this.express.use((req, res, next) => {
            console.log(Object.keys(req));
            console.log(req.originalUrl);
            console.log(req.baseUrl);
            next();
        });
    }
}
exports.default = new Server().express;
//# sourceMappingURL=server.js.map