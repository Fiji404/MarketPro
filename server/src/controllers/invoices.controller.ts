import { Request, Response } from 'express';

export class InvoicesController {
    public getInvoices(req: Request, res: Response) {
        res.status(200).json({ data: [1, 2, 3], message: 'get invoices' });
    }
}
