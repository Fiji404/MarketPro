import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { ProductRoute } from '@/routes/product.route';
import { StatsRoute } from './routes/stats.route';

ValidateEnv();

const app = new App([new ProductRoute(), new StatsRoute()]);

app.listen();
