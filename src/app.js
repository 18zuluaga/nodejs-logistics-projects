import express from 'express';
import { routes } from './routes/router.js';

const app = express();

app.use('/', routes);

app.listen(3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
})