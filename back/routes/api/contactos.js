const router = require("express").Router();

const middlewares = require("../middlewares");
const jwt = require("jwt-simple");
const ROL_ADMIN = 1;
//obtengo el DB
const {
	Contactos,
	ContactoCanales,
	Ciudades,
	Paises,
	Canales,
	Companias,
	Prueba,
	Provincias,
} = require("../../db");

router.get("/searchName/", async (req, res) => {
	console.log(req.query);
	const busqueda = req.query;

	const contactos = await Contactos.findAll(
		{ where: busqueda },

		{
			attributes: [
				"id",
				"nombre",
				"apellido",
				"cargo",
				"email",
				"direccion",
				"paiseId",
				"ciudadeId",
				"interes",
				"companias",
			],
		},
		{
			include: [
				{
					model: Paises,
					attributes: ["id", "pais"],
				},
				{
					model: Provincias,
					attributes: ["id", "provincia"],
				},
				{
					model: Ciudades,
					attributes: ["id", "ciudad"],
				},
				{
					model: Companias,
					attributes: ["id", "compania"],
				},
				{
					model: Canales,
					attributes: ["id", "nombre"],
				},
			],
		}
	);

	res.json(contactos);
});

router.get("/", async (req, res) => {
	const contactos = await Contactos.findAll({
		attributes: [
			"id",
			"nombre",
			"apellido",
			"cargo",
			"email",
			"direccion",
			"paiseId",
			"ciudadeId",
			"interes",
			"companias",
		],
		include: [
			{
				model: Paises,
				attributes: ["id", "pais"],
			},
			{
				model: Provincias,
				attributes: ["id", "provincia"],
			},
			{
				model: Ciudades,
				attributes: ["id", "ciudad"],
			},
			{
				model: Companias,
				attributes: ["id", "compania"],
			},
			{
				model: Canales,
				attributes: ["id", "nombre"],
			},
		],
	});

	res.json(contactos);
});

router.get("/individual/:id", async (req, res) => {
	const contactos = await Contactos.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Paises,
				attributes: ["id", "pais"],
			},
			{
				model: Ciudades,
				attributes: ["id", "ciudad"],
			},
			{
				model: Provincias,
				attributes: ["id", "provincia"],
			},
			{
				model: Companias,
				attributes: ["id", "compania"],
			},
			{
				model: Canales,
				attributes: ["id", "nombre"],
			},
		],
	});

	res.json(contactos);
});

router.post("/", async (req, res) => {
	/*  var cabecera = req.headers["user-token"];
    var usuario =  jwt.decode(cabecera,"frase secreta"); */

	const contactoEmail = await Contactos.findOne({
		where: { email: req.body.email },
	});
	if (contactoEmail) {
		res.json({
			error: " Ese contacto ya se encuentra registrado en la base de datos Intente ingresarlo con un email distinto",
		});
	} else {
		const contactos = await Contactos.create(req.body);
		/* //Este metodo es como hacer un find y un create al mismo tiempo si encuentra la empresa no la crea si no la encuentra la crea
        const [compania, created] = await Companias.findOrCreate({
            where: { compania: req.body.compania },
           
          }); */

		const canales = req.body.canales;
		const datosCanales = req.body.datosCanales;
		canales.forEach(async (recorrePropiedadCanales, index) => {
			let objCanal = {
				canaleId: recorrePropiedadCanales.id,
				contactoId: contactos.id,
				datosCanales: datosCanales[index].dato,
			};
			let contactoCanales = await ContactoCanales.create(objCanal);

			/*  let objPrueba ={
                contactoId:contactos.id,
                contactoCanaleId:recorrePropiedadCanales.id,
            };
    
          
           const prueba = await Prueba.create(objPrueba); */
		});

		res.json(contactos);
	}
});

router.post("/porImportacion", middlewares.rol, async (req, res) => {
	const contactosBody = req.body;
	const contactosGuardados = [];

	for (let index = 0; index < contactosBody.length; index++) {
		const contactoActual = contactosBody[index];
		console.log(contactoActual);

		const contactoEmail = await Contactos.findOne({
			where: { email: contactoActual.email },
		});
		if (!contactoEmail) {
			const contactos = await Contactos.create(contactoActual);

			const canales = contactoActual.canales;
			const datosCanales = contactoActual.datosCanales;
			canales.forEach(async (recorrePropiedadCanales, index) => {
				let objCanal = {
					canaleId: recorrePropiedadCanales.id,
					contactoId: contactos.id,
					datosCanales: datosCanales[index].dato,
				};
				let contactoCanales = await ContactoCanales.create(objCanal);
			});

			contactosGuardados.push(contactos);
		}
	}

	res.json(contactosGuardados);
});

router.put("/", async (req, res) => {
	var cabecera = req.headers["user-token"];
	var usuario = jwt.decode(cabecera, "frase secreta");

	/*   if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para actualizar pais.`);
        return false;
    } */
	const datoToUpdate = req.body.id;
	console.log(datoToUpdate);
	let obj = {
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		cargo: req.body.cargo,
		email: req.body.email,
		direccion: req.body.direccion,
		interes: req.body.interes,
		paiseId: req.body.paiseId,
		companias: req.body.companias,
		ciudadeId: req.body.ciudadeId,
	};

	const contacto = await Contactos.update(obj, {
		where: { id: datoToUpdate },
	});

	let datoCanal01 = {
		datosCanales: req.body.datosCanales[0].dato,
	};
	let datoCanal02 = {
		datosCanales: req.body.datosCanales[1].dato,
	};

	const contactoCanalesDatos = await ContactoCanales.findAll({
		where: { contactoId: datoToUpdate },
	});

	for (let index = 0; index < contactoCanalesDatos.length; index++) {
		contactoCanalesDatos[index].id;
		console.log(
			contactoCanalesDatos[index].Id,
			"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
		);

		await ContactoCanales.update(datoCanal01, {
			where: { id: contactoCanalesDatos[0].Id },
		});
		await ContactoCanales.update(datoCanal02, {
			where: { id: contactoCanalesDatos[1].Id },
		});
	}

	const canales = await Canales.findAll();
	console.log(canales, "canalesssssssssssssssssssss");

	res.json({ succcess: "update correcto" });
});

router.delete("/", async (req, res) => {
	/* var cabecera = req.headers["user-token"];
    var usuario =  jwt.decode(cabecera,"frase secreta"); */

	/* if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para eliminar un pais.`);
        return false;
    } */
	const borrarDato = req.body.id;
	await Contactos.destroy({ where: { id: borrarDato } });
	res.json({ succcess: "Contacto Borrado con exito" });
});

function esUsuarioValidoParaGestionarProducto(usuario) {
	if (!usuario || usuario.rolUsuario != ROL_ADMIN) {
		return false;
	}

	return true;
}

module.exports = router;
