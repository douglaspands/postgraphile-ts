import { Express } from 'express';
import web from '@app/core/web';

export default new Promise<Express>((resolve, reject) => {
    web.createApp()
        .then((app: Express) => {
            resolve(app);
        })
        .catch((error) => {
            reject(error);
        });
});
