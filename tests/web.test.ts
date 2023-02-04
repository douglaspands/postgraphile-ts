import { Express } from 'express';
import web from '@core/web';

test("Checando se 'app' inicializador é do tipo 'Express'", () => {
    const app = web.createApp();
    app.then((app: Express) => {
        expect(typeof app === 'function').toBe(true);
    });
});
