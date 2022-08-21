var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    layout:'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next)=> {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.cuerpo !="") {
      await novedadesModel.instertNovedad(req.body);
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
    var obj = {
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo,
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