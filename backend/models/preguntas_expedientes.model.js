module.exports = (sequelize, DataTypes) => {
  const PreguntasExpedientes = sequelize.define("PreguntasExpedientes", {
    pregunta_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_expediente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pregunta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    requiere_archivo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return PreguntasExpedientes;
};
