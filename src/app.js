import express from "express";
import config from './config.js';
// Rutas
import productRoutes from './routes/products.routes';
const app = express();

// Settings 
app.set('port', config.port)

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(productRoutes);


export default app;