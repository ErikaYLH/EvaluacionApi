//el controlador recibe peticiones, da respuestas y envia 
//peticiones http

const Diagnostico = require('../models/diagnostico') 


const getDiagnostico = async(req,res) =>{
    const diagnostico = await Diagnostico.find()
    res.json({
        msg: 'Diagnostico GET API',
        diagnostico
    })
}

const postDiagnostico = async(req,res) =>{
    const { nombrePaciente, documentoPaciente, edad, genero, temperatura, fiebre, nombreMedico } = req.body
    //crear el objeto de la clase Cliente
    const diagnostico = new Diagnostico({nombrePaciente, documentoPaciente, edad, genero, temperatura, fiebre, nombreMedico})
    await diagnostico.save() //metodo para guardar informacion en mongo

    res.json({
        msg: 'Diagnostico POST API',
        diagnostico
    })

}

const putDiagnostico = async(req,res) =>{
    const { nombrePaciente, documentoPaciente, edad, genero, temperatura, fiebre, nombreMedico } = req.body
    const diagnostico = await Diagnostico.findOneAndUpdate({nombrePaciente:nombrePaciente},{documentoPaciente:documentoPaciente, edad:edad, genero:genero, temperatura:temperatura, fiebre:fiebre, nombreMedico:nombreMedico})
    res.json({
        msg: 'Diagnostico PUT API',
        diagnostico
    })
}

const patchDiagnostico = async(req,res) =>{
    const { nombrePaciente, documentoPaciente, edad, genero, temperatura, fiebre, nombreMedico } = req.body
    const diagnostico = await Diagnostico.findOneAndUpdate({nombrePaciente:nombrePaciente},{documentoPaciente:documentoPaciente})
    res.json({
        msg: 'Diagnotico PATCH API',
        diagnostico
})
}

const deleteDiagnostico = async(req, res) =>{
    const {documentoPaciente} = req.query
    const diagnostico = await Diagnostico.findOneAndDelete({documentoPaciente:documentoPaciente})
    res.json({
        msg : 'Diagnostico DELETE API',
        diagnostico
    })
}


module.exports = {
    getDiagnostico,
    postDiagnostico,
    putDiagnostico,
    patchDiagnostico,
    deleteDiagnostico
}