import { Express } from 'express';

function initApp(app: Express): void {
    app.use((req, res, next) => next());
}

export default { initApp };
