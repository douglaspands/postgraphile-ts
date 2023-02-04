import express, { Express } from 'express';
import middleware from '@register/middleware';
import router from '@register/router';
import bodyParser from 'body-parser';

export const createApp = async (): Promise<Express> => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    await middleware.initApp(app);
    await router.initApp(app);
    return app;
};

export default { createApp };
