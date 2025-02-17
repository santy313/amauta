module.exports = (sequelize, DataTypes) => {
    const Expedientes = sequelize.define("Expedientes", {
      expediente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_expediente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado_expediente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    return Expedientes;
  };