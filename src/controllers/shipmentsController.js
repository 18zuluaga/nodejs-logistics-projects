import { createShipment, deleteShipment, getShipmentbyId, getShipments, updateShipment } from "../models/shipmentsModels.js";

export async function get(_, res){
    try {
        const shipments = await getShipments();
        res.status(200).json({
            message: "Shipments successfully fetched",
            data: shipments
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
            });
        }
        const shipment = await getShipmentbyId(id);
        res.status(200).json({
            message: "Shipment successfully fetched",
            data: shipment
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function create(req, res) {
    try {
        const { item, quantity, driver_id, warehouse_id, vehicle_id } = req.body;
        if (!item && !quantity && !driver_id && !warehouse_id && !vehicle_id) {
            res.status(400).json({
                message: "Item, quantity, driver, warehouse and vehicle are required"
            });
        }
        const shipment = await createShipment(item, quantity, driver_id, vehicle_id, warehouse_id);
        res.status(201).json({
            message: "Shipment successfully created",
            data: shipment
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function update(req, res) {
    try {
        const { id } = req.params;
        const { item, quantity, driver_id, warehouse_id, vehicle_id } = req.body;
        if (!id && !item && !quantity && !driver_id && !warehouse_id && !vehicle_id) {
            res.status(400).json({
                message: "ID, item, quantity, driver, warehouse and vehicle are required"
            });
        }
        const shipment = await updateShipment(id, item, quantity, driver_id, vehicle_id, warehouse_id);
        res.status(200).json({
            message: "Shipment successfully updated",
            data: shipment
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteS(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({
                message: "ID is required"
            });
        }
        const shipment = await deleteShipment(id);
        res.status(200).json({
            message: "Shipment successfully deleted",
            data: shipment
        }); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}