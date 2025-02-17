const { crearEstructuraYSubirArchivos } = require('../services/googleDriveService');

exports.subirArchivos = async (req, res) => {
  const { adminName, userDNI, expedienteName, expedienteId, archivos } = req.body;

  try {
    const uploadedFiles = await crearEstructuraYSubirArchivos(adminName, userDNI, expedienteName, expedienteId, archivos);
    res.status(200).json({ message: 'Archivos subidos correctamente.', uploadedFiles });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir archivos.' });
  }
};