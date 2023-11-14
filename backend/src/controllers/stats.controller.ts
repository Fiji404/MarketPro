import { Response } from 'express';
import Database from 'better-sqlite3';
import path from 'path';

export class StatsController {
    getStats(_, res: Response) {
        const productsDBPath = path.join(__dirname, '..', 'db', 'products.db');
        const db = new Database(productsDBPath, { fileMustExist: true });
        const bestSellingProductStmt = db.prepare(
            'SELECT name AS name, SUM(quantity) AS quantity FROM products GROUP BY name ORDER BY quantity DESC LIMIT 1;'
        );
        const bestSellingProduct = bestSellingProductStmt.get();

        const stats = { bestSellingProduct };

        res.status(200).json(stats);
    }
}
