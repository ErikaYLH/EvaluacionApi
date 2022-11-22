const {Schema, model} = require('mongoose') //migracion permite que se genere un comando de estructura de tablas
//las llaves es para saber que solo se requiere el Schema y el model (la funcionalidad que se requiera)

//Definir la estructura de la coleccion
const DiagnosticoSchema = Schema({
    nombrePaciente: {
        type: String
    },
    documentoPaciente:{
        type: Number
    },
    edad:{
        type: Number
    },
    genero:{
        type: String
    },
    temperatura:{
        type: Number
    },
    fiebre:{
        type: Number
    },
    nombreMedico:{
        type: String
    }
})

module.exports = model('Diagnostico', DiagnosticoSchema)
//vehiculo: nombre que ira en la tabla de la base de datos
//VehiculoSchema: variable que contiene el nombre - la estructura