const router = require("express").Router();
const middlewares = require("../middlewares");
const jwt = require("jwt-simple");
const ROL_ADMIN = 1;

const { Paises } = require("../../db");

router.get("/", async (req, res) => {
	const paises = await Paises.findAll();
	res.json(paises);
});

router.post("/", async (req, res) => {
	var cabecera = req.headers["user-token"];
	var usuario = jwt.decode(cabecera, "frase secreta");

	/*   if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para agregar pais.`);
        return false;
    } */
	//const paises = await Paises.create(req.body);

	const pais = req.body.pais;
	for (let index = 0; index < pais.length; index++) {
		let obj = {
			pais: pais[index].pais,
		};

		var paises = await Paises.create(obj);
	}

	res.json(paises);
});

router.put("/:paisId", async (req, res) => {
	var cabecera = req.headers["user-token"];
	var usuario = jwt.decode(cabecera, "frase secreta");

	if (!esUsuarioValidoParaGestionarProducto(usuario)) {
		res.status(400).send(`Usuario invalido para actualizar pais.`);
		return false;
	}

	await Paises.update(req.body, {
		where: { id: req.params.paisId },
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
	console.log("Request:", req.body);
	await Paises.destroy({ where: { id: borrarDato } });
	res.json({ succcess: "pais borrado con exito" });
});

module.exports = router;
