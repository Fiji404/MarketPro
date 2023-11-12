import { Router } from 'express';
import { Route } from '@/types/express';
import { StatsController } from '@/controllers/stats.controller';

export class StatsRoute implements Route {
    public path = '/stats';
    public router = Router();
    public product = new StatsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.product.getStats);
    }
}
