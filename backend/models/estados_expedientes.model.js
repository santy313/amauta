module.exports = (sequelize, DataTypes) => {
  const EstadosExpedientes = sequelize.define("EstadosExpedientes", {
    estado_expediente_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  });

  return EstadosExpedientes;
};
