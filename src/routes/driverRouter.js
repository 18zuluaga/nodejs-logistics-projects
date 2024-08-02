import { Router } from "express";
import { create, deleteD, get, getById, update } from "../controllers/driverController.js";

export const driversRouter = Router();

driversRouter.get('/',get)
driversRouter.get('/:id',getById)
driversRouter.post('/', create)
driversRouter.put('/:id',update)
driversRouter.delete('/:id', deleteD)