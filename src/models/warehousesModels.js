import { pool } from "../../config/db.js";

export async function getWarehouses() {
    const [rows] = await pool.query("SELECT * FROM warehouses");
    return rows;
}

export async function getWarehousebyId(id) {
    const [rows] = await pool.query("SELECT * FROM warehouses WHERE id = ?", [id]);
    return rows[0];
}

export async function updateWarehouse(id, name ,location) {
    const [rows] = await pool.query(
        "UPDATE warehouses SET name = ?, location = ? WHERE id = ?",
        [name ,location, id]
    );
    return rows;
}

export async function createWarehouse(name, location) {
    console.log(name, location);
    const [rows] = await pool.query(
        "INSERT INTO warehouses (name, location) VALUES (?, ?)",
        [name, location]
    );
    return rows;
}

export async function deleteWarehouse(id) {
    const [rows] = await pool.query("DELETE FROM warehouses WHERE id = ?", [id]);
    return rows;
}