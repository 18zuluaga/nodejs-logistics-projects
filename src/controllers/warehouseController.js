import { createWarehouse, getWarehousebyId, getWarehouses, updateWarehouse } from "../models/warehousesModels.js";


export async function get(_, res){
    try {
        const warehouses = await getWarehouses();
        console.log(warehouses);
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
        console.log("as");
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

export const createRequestFunction = async (req, res) => {
    const { name, location } = req.body;
    console.log(name, location);
    try {
        const warehouseCreated = await pool.query('INSERT INTO warehouses (name, location) VALUES (?, ?)', [name, location]);
        console.log(warehouseCreated);
        res.status(201).json({
            message: 'Warehouses created'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno
        });
    }
}