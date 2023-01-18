import { Express } from 'express';
import healthcheckController from '@app/controllers/healthcheck';

function initApp(app: Express): void {
    app.use('/healthcheck', healthcheckController);
}

export default { initApp };