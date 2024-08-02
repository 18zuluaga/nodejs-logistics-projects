import { pool } from "../../config/db.js";

export async function getVehicles() {
    const [rows] = await pool.query("SELECT * FROM vehicles");
    return rows;
}

export async function getVehiclebyId(id) {
    const [rows] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [id]);
    return rows[0];
}

export async function createVehicle(model, year, driver_id) {
    const [rows] = await pool.query(
        "INSERT INTO vehicles (model, year, driver_id) VALUES (?, ?, ?)",
        [model, year, driver_id]
    );
    return rows;
}

export async function updateVehicle(id, model, year, driver_id) {
    const [rows] = await pool.query(
        "UPDATE vehicles SET model = ?, year = ?, driver_id = ? WHERE id = ?",
        [model, year, driver_id, id]
    );
    return rows;
}