import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
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