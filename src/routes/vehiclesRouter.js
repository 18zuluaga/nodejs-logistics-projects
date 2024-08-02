import { Router } from "express";
import { create, get, getById } from "../controllers/vehicleControllers.js";

export const vehiclesRouter = Router();

vehiclesRouter.get('/', get)
vehiclesRouter.get('/:id', getById)
vehiclesRouter.post('/', create)