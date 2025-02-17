module.exports = (sequelize, DataTypes) => {
    const LogsAcciones = sequelize.define("LogsAcciones", {
      log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      expediente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      accion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    return LogsAcciones;
  };