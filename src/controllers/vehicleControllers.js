import { createVehicle, getVehiclebyId, getVehicles } from "../models/vehicleModels.js";



export async function get(_, res){
    try {
        const vehicles = await getVehicles();
        res.status(200).json({
            message: "vehicles successfully fetched",
            data: vehicles
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getById(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({
                message: "ID is required"
            })
        }
        const vehicle = await getVehiclebyId(id);
        res.status(200).json({
            message: "Vehicle successfully fetched",
            data: vehicle
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function create(req, res) {
    try {
        const { model, year, driver_id } = req.body;
        if(!model && !year && !driver_id) {
            res.status(400).json({
                message: "Model, Year and Driver are required"
            })
        }
        const vehicle = await createVehicle(model, year, driver_id);
        res.status(201).json({
            message: "Vehicle successfully created",
            data: vehicle
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}