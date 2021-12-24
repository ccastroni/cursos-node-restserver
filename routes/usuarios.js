const { Router } = require('express')
const router =  Router();
const { usuarioGet, usuarioDel,usuarioPost,usuarioPut } = require('../controllers/usuarios')


router.get('/', usuarioGet)
// Enviar parametros fijos
router.put('/:id',usuarioPut)

router.post('/', usuarioPost)

router.delete('/', usuarioDel)

module.exports = router;