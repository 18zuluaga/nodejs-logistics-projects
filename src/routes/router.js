import express from 'express';
import { warehousesRouter } from './warehousesRouter.js';
import { vehiclesRouter } from './vehiclesRouter.js';
import { driversRouter } from './driverRouter.js';
import { shipmentsRoutes } from './shipmentsRouter.js';

export const router = express();

router.use('/warehouses', warehousesRouter);
router.use('/vehicles', vehiclesRouter);
router.use('/drivers', driversRouter);
router.use('/shipments', shipmentsRoutes);
