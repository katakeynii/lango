import * as express from 'express';
import { Router } from "./router";
import { Service } from "./models/Service";
import axios from "axios";
import * as axiosTypes from "axios";
import { ServiceType } from "./types.d";

class Server {
  express: express.Express;
  router: Router = new Router();
  constructor () {
    this.express = express();
    this.setMiddlewares();
    this.mountRoutes();
  }

  private mountRoutes (): void {
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

  private resolveResponse(service: ServiceType, path: string, req: express.Request): void {
    const url = `${service.host}:${service.port}/${path}`;
    axios.call("get", url)  
      .then((response: axiosTypes.AxiosResponse) => {
        // handle success
        console.log("================Host Reponse ======================");
        console.log(response);
      })
      .catch((error: axiosTypes.AxiosError) => {
        console.log("================ERROR ======================");
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  private setMiddlewares(): void {
    this.express.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {

      const serviceIdentifier: string = req.originalUrl.split("/")[1];
      const targetPath = req.originalUrl.split("/").splice(2).join("/");
      const route = this.router.getRoute(serviceIdentifier);
      if(route == null){
        console.log("service not found");
        res.send("Service Not Found");
        return;
      }else{
        const service = route.getService();
        this.resolveResponse(service, targetPath, req);
      }
      console.log(route);
      res.send();
      // next();
    });
  }
}

export default new Server().express;