import express, { Express } from 'express';
import middleware from '@register/middleware';
import router from '@register/router';

async function createApp(): Promise<Express> {
    const app = express();

    await middleware.initApp(app);
    await router.initApp(app);

    return app;
}

export default { createApp };
