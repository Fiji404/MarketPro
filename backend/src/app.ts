import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN } from '@config';
import { Route } from '@/types/express';
import { logger, stream } from '@utils/logger';
import { createServer } from 'http';
import { Server } from 'socket.io';

export class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
    static socket: Server;

    constructor(routes: Route[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSocketIo();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(morgan(LOG_FORMAT, { stream }));
        this.app.use(cors({ origin: ORIGIN }));
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeSocketIo() {
        const httpServer = createServer(this.app);
        App.socket = new Server(httpServer, { cors: { origin: '*' } });

        httpServer.listen(4000);
    }

    private initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}
