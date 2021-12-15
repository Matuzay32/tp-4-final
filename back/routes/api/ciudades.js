const router = require("express").Router();

const middlewares = require("../middlewares");
const jwt = require("jwt-simple");
const ROL_ADMIN = 1;

//obtengo el DB
const { Ciudades, Provincias } = require("../../db");

router.get("/", async (req, res) => {
	const ciudades = await Ciudades.findAll();
	res.json(ciudades);
});

router.post("/", async (req, res) => {
	var cabecera = req.headers["user-token"];
	var usuario = jwt.decode(cabecera, "frase secreta");

	/*   if(!esUsuarioValidoParaGestionarProducto(usuario)) {
  
          res.status(400).send(`Usuario invalido para agregar pais.`);
          return false;
      } */
	//const paises = await Paises.create(req.body);

	console.log("Body de POST ciudades", JSON.stringify(req.body));

	const ciudad = req.body.ciudad;
	for (let index = 0; index < ciudad.length; index++) {
		let obj = {
			ciudad: ciudad[index].ciudad,
			provinciaId: ciudad[index].provinciaId,
		};

		var ciudades = await Ciudades.create(obj);
	}

	res.json(ciudades);
});

router.put("/:ciudadId", async (req, res) => {
	var cabecera = req.headers["user-token"];
	var usuario = jwt.decode(cabecera, "frase secreta");

	if (!esUsuarioValidoParaGestionarProducto(usuario)) {
		res.status(400).send(`Usuario invalido para actualizar pais.`);
		return false;
	}

	await Ciudades.update(req.body, {
		where: { id: req.params.ciudadId },
	});
	res.json({ succcess: "update correcto" });
});

router.delete("/", async (req, res) => {
	/* 
        var cabecera = req.headers["user-token"];
        var usuario =  jwt.decode(cabecera,"frase secreta") */ /* 
        if(!esUsuarioValidoParaGestionarProducto(usuario)) {
    
            res.status(400).send(`Usuario invalido para eliminar un pais.`);
            return false;
        } */
	const borrarDato = req.body.id;
	await Ciudades.destroy({ where: { id: borrarDato } });
	res.json({ succcess: "ciudad borrada con exito" });
});

router.get("/porProvincia/:provinciaId", async (req, res) => {
	const idProvincia = req.params.provinciaId;
	console.log("Provincia a borrar", idProvincia);
	const ciudades = await Ciudades.findAll({
		where: {
			provinciaId: idProvincia,
		},
	});
	res.json(ciudades);
});

module.exports = router;
