import { Request, Response } from 'express';
import Database from 'better-sqlite3';
import path from 'path';

interface Product {
    name: string;
    quantity: string;
    netPrice: string;
}

export class ProductController {
    getProducts(req: Request, res: Response) {
        const productsDBPath = path.join(__dirname, '..', 'db', 'products.db');
        const db = new Database(productsDBPath, { fileMustExist: true });
        const allProductsStmt = db.prepare('SELECT * FROM products');
        const products = allProductsStmt.all();
        res.status(200).json(products);
    }

    setProduct(req: Request, res: Response) {
        const { name, quantity, netPrice } = req.body as Product;

        const product = {
            name,
            quantity: Number(quantity),
            netPrice: parseFloat(netPrice)
        };

        const db = new Database(path.join(__dirname, '..', 'db', 'products.db'), { fileMustExist: true });
        const stmt = db.prepare('INSERT INTO products (name, quantity, netPrice) VALUES (@name, @quantity, @netPrice)');
        stmt.run(product);
    }
}
