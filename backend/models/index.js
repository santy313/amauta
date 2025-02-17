const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db");

// Crear una instancia de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// Objeto para exportar
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.TiposUsuarios = require("./tipos_usuarios.model")(sequelize, DataTypes);
db.Usuarios = require("./usuarios.model")(sequelize, DataTypes);
db.LoginUsuarios = require("./login_usuarios.model")(sequelize, DataTypes);
db.TiposExpedientes = require("./tipos_expedientes.model")(sequelize, DataTypes);
db.EstadosExpedientes = require("./estados_expedientes.model")(sequelize, DataTypes);
db.Expedientes = require("./expedientes.model")(sequelize, DataTypes);
db.PreguntasExpedientes = require("./preguntas_expedientes.model")(sequelize, DataTypes);
db.RespuestasExpedientes = require("./respuestas_expedientes.model")(sequelize, DataTypes);
db.LogsAcciones = require("./logs_acciones.model")(sequelize, DataTypes);
db.InformacionWeb = require("./informacion_web.model")(sequelize, DataTypes);

// Definir relaciones
db.TiposUsuarios.hasMany(db.Usuarios, { foreignKey: "tipo_usuario_id" });
db.Usuarios.belongsTo(db.TiposUsuarios, { foreignKey: "tipo_usuario_id" });

db.Usuarios.hasOne(db.LoginUsuarios, { foreignKey: "usuario_id" });
db.LoginUsuarios.belongsTo(db.Usuarios, { foreignKey: "usuario_id" });

db.TiposExpedientes.hasMany(db.Expedientes, { foreignKey: "tipo_expediente_id" });
db.Expedientes.belongsTo(db.TiposExpedientes, { foreignKey: "tipo_expediente_id" });

db.EstadosExpedientes.hasMany(db.Expedientes, { foreignKey: "estado_expediente_id" });
db.Expedientes.belongsTo(db.EstadosExpedientes, { foreignKey: "estado_expediente_id" });

db.Usuarios.hasMany(db.Expedientes, { foreignKey: "usuario_id" });
db.Expedientes.belongsTo(db.Usuarios, { foreignKey: "usuario_id" });

db.TiposExpedientes.hasMany(db.PreguntasExpedientes, { foreignKey: "tipo_expediente_id" });
db.PreguntasExpedientes.belongsTo(db.TiposExpedientes, { foreignKey: "tipo_expediente_id" });

db.Expedientes.hasMany(db.RespuestasExpedientes, { foreignKey: "expediente_id" });
db.RespuestasExpedientes.belongsTo(db.Expedientes, { foreignKey: "expediente_id" });

db.PreguntasExpedientes.hasMany(db.RespuestasExpedientes, { foreignKey: "pregunta_id" });
db.RespuestasExpedientes.belongsTo(db.PreguntasExpedientes, { foreignKey: "pregunta_id" });

db.Expedientes.hasMany(db.LogsAcciones, { foreignKey: "expediente_id" });
db.LogsAcciones.belongsTo(db.Expedientes, { foreignKey: "expediente_id" });

module.exports = db;