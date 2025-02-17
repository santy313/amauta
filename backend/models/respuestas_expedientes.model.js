module.exports = (sequelize, DataTypes) => {
    const RespuestasExpedientes = sequelize.define("RespuestasExpedientes", {
      respuesta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      expediente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pregunta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      respuesta_texto: {
        type: DataTypes.TEXT,
      },
      archivo_google_drive_id: {
        type: DataTypes.STRING(255),
      },
      archivo_subido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return RespuestasExpedientes;
  };