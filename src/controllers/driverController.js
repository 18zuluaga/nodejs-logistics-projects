import { createDriver, deleteDriver, getDriverbyId, getDrivers, updateDriver } from "../models/driversModels.js";

export async function get(_, res){
    try {
        const drivers = await getDrivers();
        res.status(200).json({
            message: "Drivers successfully fetched",
            data: drivers
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
        const driver = await getDriverbyId(id);
        res.status(200).json({
            message: "Driver successfully fetched",
            data: driver
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function create(req, res) {
    try {
        const { name, warehouse_id } = req.body;
        if(!name && !warehouse_id) {
            res.status(400).json({
                message: "Name and ID are required"
            })
        }
        const driver = await createDriver(name, warehouse_id);
        res.status(200).json({
            message: "Driver successfully created",
            data: driver
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function update(req, res) {
    try {
        const { id } = req.params;
        const { name, warehouse_id } = req.body;
        if(!name && !warehouse_id && id) {
            res.status(400).json({
                message: "Name, ID and warehouse are required"
            })
        }
        const driver = await updateDriver(id, name, warehouse_id);
        res.status(200).json({
            message: "Driver successfully updated",
            data: driver
        })
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteD(req, res) {
    try {
        const { id } = req.params;
        if(!id) {
            res.status(400).json({
                message: "ID is required"
            })
        }
        const driver = await deleteDriver(id);
        res.status(200).json({
            message: "Driver successfully deleted",
            data: driver
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}