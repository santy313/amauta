module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {
      usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      telefono: {
        type: DataTypes.STRING(20),
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      direccion: {
        type: DataTypes.TEXT,
      },
      fecha_alta: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_baja: {
        type: DataTypes.DATEONLY,
      },
      tipo_usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Usuarios;
  };