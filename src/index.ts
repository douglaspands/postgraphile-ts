import express, { Express } from "express";
import router from "./router"


async function createApp(): Promise<Express> {
    const app = express();
    await router.initApp(app);
    return app;
}

export default new Promise<Express>((resolve, reject) => {
    createApp()
        .then((app: Express) => {
            resolve(app);
        })
        .catch(error => {
            reject(error);
        });     
});
