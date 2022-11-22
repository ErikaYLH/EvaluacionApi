const { Router } = require('express');
const router = Router(); // Obtener la funcion router
const {getDiagnostico,postDiagnostico, putDiagnostico, patchDiagnostico, deleteDiagnostico} = require('../controllers/diagnostico')


router.get('/', getDiagnostico)
router.post('/', postDiagnostico)
router.put('/',putDiagnostico)
router.patch('/', patchDiagnostico)
router.delete('/',deleteDiagnostico)


//exportar modulo
module.exports = router