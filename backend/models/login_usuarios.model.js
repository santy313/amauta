module.exports = (sequelize, DataTypes) => {
  const LoginUsuarios = sequelize.define(
    "login_usuarios",
    {
      login_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      usuario: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      contraseña_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false, 
    }
  );

  return LoginUsuarios;
};
