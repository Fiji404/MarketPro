import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { InvoicesController } from '@/controllers/invoices.controller';

export class InvoicesRoute implements Routes {
    public path = '/invoices';
    public router = Router();
    public invoices = new InvoicesController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.invoices.getInvoices);
        // ... this.router.post(this.path, ....);
    }
}
