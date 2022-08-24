var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.upload);

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => { //parametro novedad
    if(novedad.img_id) {
      const imagen = cloudinary.image(novedades.img_id, { //cloudinary.image
        width: 70,
        height: 70,
        crop: 'fill'
      }); // creamos el nuevo array de elementos
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades',{
    layout:'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

/*Agregar una novedad*/

router.get('/agregar', (req, res, next)=> {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});//solicitamos vista 

router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = '';
    console.log(req.files.imagen);

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).pulic_id;
    }

    if (req.body.titulo != "" && req.body.cuerpo !="") {
      await novedadesModel.instertNovedad({
        ...req.body, //pread > tit,cuerpo y sumo img_id
        img_id
      });
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'no se cargo la novedad',
    });
  }
});

/*para elminar una novedad*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id; 
  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await(destroy(novedad.img_id));
  }
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades');
});//cierre 

/*para listar una sola novedad by Id - modificar*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});

/*para modificar la novedad*/
router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false; 

    if (req.body.img_delete === '1') {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.file && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true; 
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    console.log(obj);
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades'); 

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: "no se modifico la novedad",
    })
  }
})



module.exports = router; 