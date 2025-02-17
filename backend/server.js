require("dotenv").config();
// Importar dependencias
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes"); // Importar rutas de autenticación

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS desde el frontend (localhost:4200)
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware para parsear datos JSON
app.use(bodyParser.json());


// Rutas
app.use("/api/auth", authRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
