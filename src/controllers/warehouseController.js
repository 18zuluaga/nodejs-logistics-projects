import { createWarehouse, deleteWarehouse, getWarehousebyId, getWarehouses, updateWarehouse } from "../models/warehousesModels.js";


export async function get(_, res){
    try {
        const warehouses = await getWarehouses();
        res.status(200).json({
            message: "Warehouses successfully fetched",
            data: warehouses
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
        const warehouse = await getWarehousebyId(id);
        res.status(200).json({
            message: "Warehouse successfully fetched",
            data: warehouse
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function update(req, res) {
    try {
        const { id } = req.params;
        const { name, location } = req.body;
        if(!name && !location && id) {
            res.status(400).json({
                message: "Name, ID and Location are required"
            })
        }
        const warehouse = await updateWarehouse(id, name, location);
        res.status(200).json({
            message: "Warehouse successfully updated",
            data: warehouse
        })
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function create(req, res) {
    try {
        const { name, location } = req.body;
        if(!name && !location && id) {
            res.status(400).json({
                message: "Name, Id and Location are required"
            })
        }
        const warehouse = await createWarehouse(name, location);
        res.status(200).json({
            message: "Warehouse successfully created",
            data: warehouse
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno
        });
    }
}

export async function deleteW(req, res){
    try{
        const { id } = req.params;
        if(!id) {
            res.status(400).json({
                message: "ID is required"
            })
        }
        const warehouse = await deleteWarehouse(id);
        res.status(200).json({
            message: "Warehouse successfully deleted",
            data: warehouse
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}