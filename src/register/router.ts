import { Express } from 'express';
import healthcheckController from '@controller/healthcheck';

function initApp(app: Express): void {
    app.use('/healthcheck', healthcheckController.router);
}

export default { initApp };
