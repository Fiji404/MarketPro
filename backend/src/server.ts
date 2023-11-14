import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { ProductRoute, StatsRoute } from '@routes/index';

ValidateEnv();

const app = new App([new ProductRoute(), new StatsRoute()]);

app.listen();
