import Sequelize from "sequelize";
import db from "../config/db.js";

// DEFINIENDO LAS TABLAS
export const Viaje = db.define("viajes", {
  titulo: {
    type: Sequelize.STRING,
  },
  precio: {
    type: Sequelize.STRING,
  },
  titulo: {
    type: Sequelize.STRING,
  },
  fecha_ida: {
    type: Sequelize.DATE,
  },
  fecha_vuelta: {
    type: Sequelize.DATE,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponibles: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  /*   createAt: {
    type: Sequelize.DATE,
  },
  updateAt: {
    type: Sequelize.DATE,
  }, */
});
