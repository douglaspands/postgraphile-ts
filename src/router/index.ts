import { Express } from "express";
import healthcheckController from "../controllers/healthcheck";

async function initApp(app: Express): Promise<void> {
    app.use("/healthcheck", healthcheckController)
}

export default { initApp };