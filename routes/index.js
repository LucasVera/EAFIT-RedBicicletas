var express = require('express');
const { inspect } = require('util');
const { getAllBicicletas, createBicicleta, deleteAllBicicletas, deleteBicicleta } = require('../services/bicicletas');
var router = express.Router();

const renderHomepage = (res) => {
  getAllBicicletas().then(bicicletas => {
    res.render('index', { title: 'Red de bicicletas', bicicletas });
  }).catch(ex => {
    renderError(res, ex);
  })
}

const renderError = (res, ex) => {
  res.render('error', { message: ex.message, error: { status: ex.status, stack: ex.stack } });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  renderHomepage(res);
});

router.post('/bicicleta', (req, res) => {
  const {
    name,
    latitude,
    longitude,
    color
  } = req.body;
  createBicicleta({ name, latitude, longitude, color }).then(ok => {
    if (ok) {
      renderHomepage(res);
    }
    else {
      throw new Error('create bicicleta not successful');
    }
  }).catch(ex => {
    renderError(res, ex);
  });
});

router.get('/bicicleta/delete-all', (req, res) => {
  deleteAllBicicletas().then(ok => {
    if (ok) {
      renderHomepage(res);
    }
    else {
      throw new Error('delete all bicicletas not successful');
    }
  }).catch(ex => {
    renderError(res, ex);
  });
});

router.post('/bicicleta/delete', (req, res) => {
  const { bicicletaToDelete: name } = req.body;
  console.log('deleting',{ name })
  deleteBicicleta(name).then(ok => {
    if (ok) {
      renderHomepage(res);
    }
  }).catch(ex => renderError(res, ex));
});

module.exports = router;
