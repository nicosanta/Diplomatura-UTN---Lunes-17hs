var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedades => { //parametro novedad
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, { //cloudinary.image
                width: 70,
                height: 70,
                crop: 'fill'
            }); // creamos el nuevo array de elementos
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

module.exports = router; 