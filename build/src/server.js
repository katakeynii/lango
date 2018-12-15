"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
const axios_1 = require("axios");
class Server {
    constructor() {
        this.router = new router_1.Router();
        this.express = express();
        this.setMiddlewares();
        this.mountRoutes();
    }
    mountRoutes() {
        this.router
            .setRoute("core", {
            identifier: "core",
            host: "http://206.189.121.190", port: 3001
        })
            .setRoute("transfo", {
            identifier: "core",
            host: "http://206.189.121.190", port: 5003
        })
            .setRoute("auth", {
            identifier: "core",
            host: "http://167.99.202.94", port: 3002
        });
    }
    resolveResponse(service, path, req) {
        const url = `${service.host}:${service.port}/${path}`;
        axios_1.default.call("get", url)
            .then((response) => {
            // handle success
            console.log("================Host Reponse ======================");
            console.log(response);
        })
            .catch((error) => {
            console.log("================ERROR ======================");
            // handle error
            console.log(error);
        })
            .then(() => {
            // always executed
        });
    }
    setMiddlewares() {
        this.express.use((req, res, next) => {
            const serviceIdentifier = req.originalUrl.split("/")[1];
            const targetPath = req.originalUrl.split("/").splice(2).join("/");
            const route = this.router.getRoute(serviceIdentifier);
            if (route == null) {
                console.log("service not found");
                res.send("Service Not Found");
                return;
            }
            else {
                const service = route.getService();
                this.resolveResponse(service, targetPath, req);
            }
            console.log(route);
            res.send();
            // next();
        });
    }
}
exports.default = new Server().express;
//# sourceMappingURL=server.js.map