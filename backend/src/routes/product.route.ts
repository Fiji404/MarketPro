import { Router } from 'express';
import { Route } from '@/types/express';
import { ProductController } from '@/controllers/product.controller';

export class ProductRoute implements Route {
    public path = '/products';
    public router = Router();
    public product = new ProductController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.product.getProducts);
        this.router.post(this.path, this.product.setProduct);
    }
}
