import { Router } from "express";
import { create, deleteS, get, getById, update } from "../controllers/shipmentsController.js";

export const shipmentsRoutes = Router();

shipmentsRoutes.get('/',get)
shipmentsRoutes.get('/:id', getById)
shipmentsRoutes.post('/', create)
shipmentsRoutes.put('/:id', update)
shipmentsRoutes.delete('/:id', deleteS)