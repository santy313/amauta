module.exports = (sequelize, DataTypes) => {
    const TiposExpedientes = sequelize.define("TiposExpedientes", {
      tipo_expediente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    });
  
    return TiposExpedientes;
  };