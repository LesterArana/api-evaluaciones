// src/index.js
// Usaremos módulos ES (import/export). Ver paso 3 para "type": "module".
import express from "express";

const app = express();

// Middlewares básicos
app.use(express.json());

// Ruta de prueba (para verificar el deploy)
app.get("/", (req, res) => {
  res.json({ ok: true, message: "API en Vercel funcionando" });
});

// ⚠️ En Vercel puedes exportar la app (recomendado) o usar app.listen.
// Aquí usamos "default export", que Vercel soporta directo.
export default app;
