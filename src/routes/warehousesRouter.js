import { Router } from "express";
import { create, deleteW, get, getById, update} from "../controllers/warehouseController.js";

export const warehousesRouter = Router();

warehousesRouter.get('/', get)
warehousesRouter.get('/:id', getById)
warehousesRouter.put('/:id', update)
warehousesRouter.post('/', create)
warehousesRouter.delete('/:id', deleteW)