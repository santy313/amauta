module.exports = {
  HOST: "localhost",
  USER: "root", // Usuario de MySQL
  PASSWORD: "", // Contraseña de MySQL
  DB: "amauta", // Nombre de la base de datos
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
