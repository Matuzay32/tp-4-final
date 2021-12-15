//api
const router = require("express").Router();
const middlewares = require("./middlewares");

const apiPaises = require("./api/paises");
const apiUsers = require("./api/users");
const apiCiudades = require("./api/ciudades");
const apiCanales = require("./api/canales");
const apiContactos = require("./api/contactos");
const apiCompanias = require("./api/companias");
const apiRoles = require("./api/roles");

const apiProvincias = require("./api/provincias");

router.use("/paises", apiPaises);
router.use("/ciudades", apiCiudades);
router.use("/users", apiUsers);
router.use("/canales", apiCanales);
router.use("/contactos", apiContactos);
router.use("/companias", apiCompanias);
router.use("/roles", apiRoles);

router.use("/provincias", apiProvincias);

module.exports = router;
