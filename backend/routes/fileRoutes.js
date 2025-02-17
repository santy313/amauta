const express = require("express");
const fileController = require("../controllers/fileController");

const router = express.Router();

router.post("/subir-archivos", fileController.subirArchivos);

module.exports = router;
