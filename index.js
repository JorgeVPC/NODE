import express from "express";
// importar el archivo que se desea
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));
// definiendo el puerto
const port = process.env.PORT || 4000;

//habilitar PUG
app.set("view engine", "pug");

// obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de viajes";
  // obliga y llama al siguiente next
  next();
});

// agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//agregar routes
app.use("/", router);

app.listen(port, () => {
  console.log("el servidor esta funcionado en el puerto", port);
});
