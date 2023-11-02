import { Request, Response } from 'express';
import Database from 'better-sqlite3';
import path from 'path';

export class ProductController {
    public getProducts(req: Request, res: Response) {
        const productsDBPath = path.join(__dirname, '..', 'db', 'products.db');
        const db = new Database(productsDBPath, { fileMustExist: true });
        const allProductsStmt = db.prepare('SELECT * FROM products');
        const products = allProductsStmt.all();
        res.status(200).json(products);
    }
}
