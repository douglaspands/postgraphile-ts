import { Express } from 'express';
import healthcheckController from '@controller/healthcheck';
import authController from '@controller/authenticate';

function initApp(app: Express): void {
    app.use('/healthcheck', healthcheckController.router);
    app.use('/auth', authController.router);
}

export default { initApp };
