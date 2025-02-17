module.exports = (sequelize, DataTypes) => {
    const InformacionWeb = sequelize.define("InformacionWeb", {
      informacion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_web: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      cif: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    });
  
    return InformacionWeb;
  };