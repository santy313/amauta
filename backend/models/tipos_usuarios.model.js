module.exports = (sequelize, DataTypes) => {
  const TiposUsuarios = sequelize.define("TiposUsuarios", {
    tipo_usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  });

  return TiposUsuarios;
};
