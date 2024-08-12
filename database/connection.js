const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Futbol", "SA", "endurances10@", {
  host: "localhost",
  dialect: "mssql",
});


async function dbConnection(){
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos MySQL establecida con exito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos MySQL:', error);
  }
}

module.exports = {
  sequelize,
  dbConnection
};
