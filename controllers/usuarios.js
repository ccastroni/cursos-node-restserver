const { response,request } = require('express')

const usuarioGet = (req = request, res = response) => {
    // parametros opcionales
    const params = req.query;

    res.json({
        "ok": true,
        "msg": " controlador todo ok",
        params        
    })
}

const usuarioPut =  (req, res) => {
    const id = req.params.id;
    res.json({
        "msg": "put controller",
        id
    })
}

const usuarioPost =  (req, res) => {
    const body = req.body;
    const {nombre, edad} = body
    res.json({
        "msg": `Post ${body.nombre}`,
        //body
        nombre,
        edad
    })
}

const usuarioDel =  (req, res) => {
    res.json({
        "msg": "delete controller"
    })
}

module.exports = {
    usuarioGet,
    usuarioDel,
usuarioPost,
usuarioPut
}