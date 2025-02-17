const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuarios, LoginUsuarios } = require("../models");

exports.login = async (req, res) => {
  const { usuario, contrasena } = req.body;
  console.log("usuario", req.body);
  try {
    // Buscar el usuario en la tabla de login
    const loginUsuario = await LoginUsuarios.findOne({
      where: { usuario },
      logging: false,
      include: [
        { model: Usuarios, attributes: ["usuario_id", "nombre", "email"] },
      ],
    });
    // Verificar el usuario
    if (!loginUsuario) {
      console.warn("Usuario incorrecto.");
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }
    // Verificar la contraseña
    const contraseñaValida = await bcrypt.compare(
      contrasena,
      loginUsuario.contraseña_hash
    );

    if (!contraseñaValida) {
      console.warn("Contraseña incorrecta.");
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    // Generar token JWT
    const token = jwt.sign(
      { usuario_id: loginUsuario.Usuario.usuario_id },
      process.env.JWT_SECRET, // Clave secreta para firmar el token
      { expiresIn: "1h" } // El token expira en 1 hora
    );

    // Devolver el token y la información del usuario
    res.json({
      token,
      usuario: {
        usuario_id: loginUsuario.Usuario.usuario_id,
        nombre: loginUsuario.Usuario.nombre,
        email: loginUsuario.Usuario.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
