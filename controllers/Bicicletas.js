const { deleteBicicleta } = require("../services/bicicletas");
const bicicletasService = require("../services/bicicletas");

module.exports = {
  getAllBicicletas(req, res) {
    try {
      bicicletasService.getAllBicicletas().then((bicicletas) => {
        res.json({
          success: true,
          data: bicicletas
        });
      }).catch(ex => {
        throw ex;
      });
    }
    catch (ex) {
      console.error('Error in getBicicletas, controller', ex);
      res.json({
        success: false,
        error: ex
      })
    }
  },

  createBicicleta(req, res) {
    try {
      bicicletasService.getAllBicicletas().then((bicicletas) => {
        res.json({
          success: true,
          data: bicicletas
        });
      }).catch(ex => {
        throw ex;
      });
    }
    catch (ex) {
      console.error('Error in createBicicletas, controller', ex);
      res.json({
        success: false,
        error: ex
      })
    }
  },

  deleteBicicleta(req, res) {
    try {
      bicicletasService.getAllBicicletas().then((bicicletas) => {
        res.json({
          success: true,
          data: bicicletas
        });
      }).catch(ex => {
        throw ex;
      });
    }
    catch (ex) {
      console.error('Error in createBicicletas, controller', ex);
      res.json({
        success: false,
        error: ex
      })
    }
  }
};
