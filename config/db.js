import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Nacional1989_',
    database: 'example',
    port: 3306,
});

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("conectado");
        return connection;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { pool };