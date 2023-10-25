import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { InvoicesRoute } from './routes/invoices.route';

ValidateEnv();

const app = new App([new InvoicesRoute()]);

app.listen();
