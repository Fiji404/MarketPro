import { Router } from 'express';
import { Route } from '@/types/express';
import { InvoicesController } from '@/controllers/invoices.controller';

export class InvoicesRoute implements Route {
    public path = '/invoices';
    public router = Router();
    public invoices = new InvoicesController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.invoices.getInvoices);
    }
}
