import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsControlle = new SettingsController;

routes.post("/settings", settingsControlle.create)

export { routes };