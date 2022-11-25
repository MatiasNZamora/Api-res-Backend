import sql from 'mssql';
import config from '../config';

const dbsettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer, // IP
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    // port: 1433,
};

// lo ponemos como una promesa.
// Crea una funcion que se conecta a travez de los parametros a la base de datos y
// con la conexion va a hacer una consulta.

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return(pool);
    } catch (error) {
        console.log(error);
    }
}

export { sql };