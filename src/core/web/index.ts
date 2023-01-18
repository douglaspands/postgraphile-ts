import express, { Express } from 'express';
import middleware from '@app/middlewares';
import router from '@app/routers';

async function createApp(): Promise<Express> {
    const app = express();

    await middleware.initApp(app);
    await router.initApp(app);

    return app;
}

export default { createApp };
