import { pool } from "../../config/db.js";

export async function getDrivers() {
    const [rows] = await pool.query("SELECT * FROM drivers");
    console.log(rows)
    return rows;
}

export async function getDriverbyId(id) {
    const [rows] = await pool.query("SELECT * FROM drivers WHERE id = ?", [id]);
    return rows[0];
}

export async function createDriver(name, warehouse_id) {
    const [rows] = await pool.query("INSERT INTO drivers (name, warehouse_id) VALUES (?, ?)", [name,warehouse_id]);
    return rows;
}

export async function updateDriver(id, name, warehouse_id) {
    const [rows] = await pool.query("UPDATE drivers SET name = ?, warehouse_id = ? WHERE id = ?", [name, warehouse_id, id]);
    return rows;
}

export async function deleteDriver(id) {
    const [rows] = await pool.query("DELETE FROM drivers WHERE id = ?", [id]);
    return rows;
}