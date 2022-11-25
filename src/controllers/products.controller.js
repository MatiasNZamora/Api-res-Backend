import { getConnection, sql, querys } from '../database';

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection(); // llamo a la connection que retorna el pool.
        const result = await pool.request().query(querys.getAllProducts); // hace la peticion o consulta y lo guarda en la constante.
        res.json(result.recordset);

    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

};

export const createNewProduct = async (req, res) => {
    const { name, description } = req.body
    let {quantity} = req.body;

    if (name == null || description == null){
        return res.status(400).json({ message: 'Faltan datos #badRequest' });
    }

    if (quantity == null) quantity = 0;

    try { // validamos las consultas
        const pool = await getConnection();

        await pool.request()
        .input('Name', sql.VarChar, name)
        .input('Description', sql.Text, description)
        .input('Quantity', sql.Int, quantity)
        
        .query(querys.addNewProduct);
    
        console.log(name, description, quantity)
        res.json({name, description, quantity})

    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request().query(querys.getTotalProducts)
    
    console.log(result);
    res.json(result.recordset[0]['']);
};

export const getProductById = async (req, res) => {

    const { id } = req.params;
    const pool = await getConnection()
    const result = await pool.request().input('Id', id).query(querys.getProductById)
    
    console.log(result);
    res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection()
    const result = await pool.request().input('Id', id).query(querys.deleteProductById)
    
    console.log(result);
    res.send(result);
    res.sendStatusCode(200);
};

export const updateProductById = async (req, res) => {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    if (name == null || description == null, quantity == null) {
       return res.status(400).json({ message: 'Faltan datos #badRequest' });
    }
    
    const pool = await getConnection()
    await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(querys.updateProductById);

    res.json({ name, description, quantity });
};