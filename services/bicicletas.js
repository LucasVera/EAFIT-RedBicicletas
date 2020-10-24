const { createBicicleta } = require("../controllers/Bicicletas");

let bicicletas = [];

module.exports = {
  getAllBicicletas() {
    return new Promise((resolve, reject) => {
      try {
        console.log('bicicletas', bicicletas)
        return resolve(bicicletas);
      }
      catch (ex) {
        console.error('Error in bicicletas service, in getAllBicicletas', ex);
        reject(ex);
      }
    });
  },

  createBicicleta(bicicleta) {
    return new Promise((resolve, reject) => {
      try {
        bicicletas.push(bicicleta);
        return resolve(bicicleta);
      }
      catch (ex) {
        console.error('Error in bicicletas service, in createBicicleta', ex);
        reject(ex);
      }
    })
  },

  deleteBicicleta(name) {
    return new Promise((resolve, reject) => {
      try {
        bicicletas = bicicletas.filter(bicicleta => bicicleta.name !== name);
        return resolve('ok');
      }
      catch (ex) {
        console.error('Error in bicicletas service, in deleteBicicleta', ex);
        reject(ex);
      }
    })
  },

  deleteAllBicicletas() {
    return new Promise((resolve, reject) => {
      try {
        bicicletas = [];
        return resolve('ok');
      }
      catch (ex) {
        console.error('Error in bicicletas service, in deleteAllBicicletas', ex);
        reject(ex);
      }
    });
  }
}
