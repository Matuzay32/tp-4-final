const router = require("express").Router();

const middlewares = require("../middlewares");
const jwt = require("jwt-simple");
const ROL_ADMIN = 1;

//obtengo el DB
const { Provincias, Paises } = require("../../db");

router.get("/", async (req, res) => {
	const provincias = await Provincias.findAll();
	res.json(provincias);
});

router.post("/", async (req, res) => {
	//var cabecera = req.headers["user-token"];
	//var usuario =  jwt.decode(cabecera,"frase secreta");

	const provincias = req.body.provincias;
	let provinciasCreadas = null;
	for (let index = 0; index < provincias.length; index++) {
		let obj = {
			provincia: provincias[index].provincia,
			paiseId: provincias[index].paiseId,
		};

		provinciasCreadas = await Provincias.create(obj);
	}

	res.json(provinciasCreadas);
});

router.get("/porPais/:paisId", async (req, res) => {
	const idPais = req.params.paisId;
	console.log("Pais a borrar", idPais);
	const provincias = await Provincias.findAll({
		where: {
			paiseId: idPais,
		},
	});
	res.json(provincias);
});

router.delete("/:provinciaId", async (req, res) => {
	const borrarDato = req.params.provinciaId;
	console.log("Request:", req.body);
	await Provincias.destroy({ where: { id: borrarDato } });
	res.json({ succcess: "provincia borrado con exito" });
});

module.exports = router;
