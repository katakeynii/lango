import * as express from 'express';

class Server {
  express: express.Express;

  constructor () {
    this.express = express();
    this.setMiddlewares();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req: express.Request, res: express.Response) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }

  private setMiddlewares(): void {
    this.express.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {

      let serviceIdentifier: string = req.originalUrl.split("/")[1];
      let targetUrl = req.originalUrl.split("/").splice(2).join("/");

      next();
    });
  }
}

export default new Server().express;