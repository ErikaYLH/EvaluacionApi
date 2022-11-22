const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config'); // Vincular la conexion 

class Server {

    constructor() {
        this.app = express()

        this.port = process.env.port; //El puerto de la aplicacion

        this.diagnosticoPath = '/api/diagnosticos'

        this.conectarDB() //Metodo para la conexion   
        
        this.middlewares() // Incluir funcionalidades a la aplicacion

        this.routes() // Incuir las rutas

        
    }


    async conectarDB() {
        await dbConnection()
    }

    middlewares(){ //Otras funcionalidad
        this.app.use( cors() ); // Seguridad
        this.app.use( express.static('public') ); // Indica el directorio de las paginas estaticas
        this.app.use( express.json() ) // Permite que la aplicacion reciba peticiones tipo json 
    }

    routes(){// Rutas de la aplicacion
        this.app.use( this.diagnosticoPath, require('../routes/diagnosticos'))
        
    }



    listen(){//Para escuchar el puerto
        this.app.listen(this.port, (req, res)=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        }) 
    }
}

module.exports = Server