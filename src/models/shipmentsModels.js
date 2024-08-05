import { pool } from "../../config/db.js";

export async function getShipments() {
    const [rows] = await pool.query("SELECT * FROM shipments");
    console.log(rows)
    return rows;
}

export async function getShipmentbyId(id) {
    const [rows] = await pool.query("SELECT * FROM shipments WHERE id = ?", [id]);
    return rows[0];
}

export async function createShipment(item, quantity, driver_id, vehicle_id, warehouse_id) {
    const [rows] = await pool.query("INSERT INTO shipments (item, quantity, werehouse_id, vehicle_id, driver_id) VALUES (?, ?, ?, ?, ?)", [item,quantity, warehouse_id, vehicle_id, driver_id]);
    return rows;
}

export async function updateShipment(id, item, quantity, driver_id, vehicle_id, warehouse_id) {
    const [rows] = await pool.query("UPDATE shipments SET item = ?, quantity = ?, werehouse_id = ?, vehicle_id = ?, driver_id = ? WHERE id = ?", [item,quantity, warehouse_id, vehicle_id, driver_id, id]);
    return rows;
}

export async function deleteShipment(id) {
    const [rows] = await pool.query("DELETE FROM shipments WHERE id = ?", [id]);
    return rows;
}