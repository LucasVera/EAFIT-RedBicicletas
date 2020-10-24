const BicicletasController = require('../controllers/Bicicletas');
const package = require('../package.json');

const {
  createBicicleta,
  deleteBicicleta,
  getAllBicicletas
} = BicicletasController;

const {
  version,
  author,
  description
} = package;

module.exports = function(app) {
  app.get('/api/', (req, res) => {
    res.json({
      version,
      author,
      description
    });

    res.end();
  });

  app.get('/api/bicicletas', getAllBicicletas);
  app.post('/api/bicicleta', createBicicleta);
  app.post('/api/bicicleta/delete', deleteBicicleta);
}
