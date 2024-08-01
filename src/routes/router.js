import express from 'express';
import { warehousesRouter } from './warehousesRouter.js';

export const routes = express();

routes.use('/warehouses', warehousesRouter);
// app.use('/vehicles', vehiclesRoutes);
// app.use('/dirvers', dirversRoutes);
// app.use('/shipments', shipmentsRoutes);
