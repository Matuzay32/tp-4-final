// este es el pimer boton de agregar contacto
var AgregarContacto = document.getElementById("agregarContacto");
//La cruz que  muestra  deja de motrar el meno agregar contacto
var cruzMenuAgregar = document.getElementById("cruz-menu-agregar");
// esta es todo el menu de agregar contacto nuevo
var menuAgregar = document.getElementById("menu-agregar");
var agregarCanal = document.getElementById("bt-agregar-otro-canal");
//fila al tocar agregar canal
var rowAgregarMas = document.getElementById("rowAgregarMas");
//btn guardar contacto
var guardarContacto = document.getElementById("guardarContacto");
//btn eliminar contacto
var eliminarContacto = document.getElementById("eliminarContacto");
var sombraMenu = document.getElementById("sombraMenu");
var swichParaAgregarGet = 0;
var formulario = document.getElementById("formularioCrearContacto");

// Elementos del Formulario para pasar al objeto data

var nombre = document.getElementById("nombreMenuNuevoContacto");
var apellido = document.getElementById("apellidoMenuNuevoContacto");
var cargo = document.getElementById("cargoMenuNuevoContacto");
var email = document.getElementById("emailMenuNuevoContacto");
var direccion = document.getElementById("direccionMenuNuevoContacto");
var interes = document.getElementById("rangeMenuNuevoContacto");
var pais = document.getElementById("paisMenuNuevoContacto");
var provincia = document.getElementById("provinciaMenuNuevoContacto");
var ciudad = document.getElementById("ciudadMenuNuevoContacto");
var canal = document.getElementById("canalMenuNuevoContacto");
var canal2 = document.getElementById("canalMenuNuevoContacto2");
var datosCanal01 = document.getElementById("datosCanal01");
var datosCanal02 = document.getElementById("datosCanal02");
var compania = document.getElementById("companiaNuevoContacto");

var fetchPaises = () => {
	fetch("http://localhost:3000/api/paises")
		.then((response) => response.json())
		.then((data) => {
			trayendoPaisesMetodoGet(data);
		});
};

var fetchProvincias = (paisId, provinciaIdSeleccionado) => {
	provincia.innerHTML =
		'<option value="" selected="">Seleccione su provincia</option>';
	ciudad.innerHTML =
		'<option value="" selected="">Seleccione su ciudad</option>';
	fetch("http://localhost:3000/api/provincias/porPais/" + paisId)
		.then((response) => response.json())
		.then((data) => {
			trayendoProvinciasMetodoGet(data);

			if (provinciaIdSeleccionado) {
				document.getElementById("provinciaMenuNuevoContacto").value =
					provinciaIdSeleccionado;
			}
		});
};

var fetchCiudades = (idProvincia, ciudadIdSeleccionado) => {
	ciudad.innerHTML =
		'<option value="" selected="">Seleccione su ciudad</option>';
	fetch("http://localhost:3000/api/ciudades/porProvincia/" + idProvincia)
		.then((response) => response.json())
		.then((data) => {
			trayendoCiudadesMetodoGet(data);
			if (ciudadIdSeleccionado) {
				document.getElementById("ciudadMenuNuevoContacto").value =
					ciudadIdSeleccionado;
			}
		});
};
var fetchCanales = () => {
	fetch("http://localhost:3000/api/canales")
		.then((response) => response.json())
		.then((data) => {
			trayendoCanalesMetodoGet(data);
		});
};
var fetchCanales2 = () => {
	fetch("http://localhost:3000/api/canales")
		.then((response) => response.json())
		.then((data) => {
			trayendoCanales2MetodoGet(data);
		});
};

//metodos GET

var trayendoPaisesMetodoGet = (data) => {
	for (let index = 0; index < data.length; index++) {
		let paisMenu = document.getElementById("paisMenuNuevoContacto");

		let optionElement = document.createElement("option");
		paisMenu.appendChild(optionElement);
		optionElement.text = data[index].pais;
		optionElement.value = data[index].id;
	}
};

var trayendoProvinciasMetodoGet = (data) => {
	for (let index = 0; index < data.length; index++) {
		let provinciaMenu = document.getElementById("provinciaMenuNuevoContacto");

		let optionElement = document.createElement("option");
		provinciaMenu.appendChild(optionElement);
		optionElement.text = data[index].provincia;
		optionElement.value = data[index].id;
	}
};

var trayendoCiudadesMetodoGet = (data) => {
	for (let index = 0; index < data.length; index++) {
		let ciudadMenu = document.getElementById("ciudadMenuNuevoContacto");

		let optionElement = document.createElement("option");
		ciudadMenu.appendChild(optionElement);

		optionElement.text = data[index].ciudad;
		optionElement.value = data[index].id;
	}
};
var trayendoCanalesMetodoGet = (data) => {
	for (let index = 0; index < 1; index++) {
		let canalMenu = document.getElementById("canalMenuNuevoContacto");

		let optionElement = document.createElement("option");
		canalMenu.appendChild(optionElement);

		optionElement.text = data[0].nombre;
		optionElement.value = data[0].id;
	}
};
var trayendoCanales2MetodoGet = (data) => {
	for (let index = 0; index < 1; index++) {
		let canalMenu = document.getElementById("canalMenuNuevoContacto2");

		let optionElement = document.createElement("option");
		canalMenu.appendChild(optionElement);

		optionElement.text = data[1].nombre;
		optionElement.value = data[1].id;
	}
};
var trayendoCompaniasMetodoGet = (data) => {
	for (let index = 0; index < data.length; index++) {
		let companiaMenu = document.getElementById("companiaNuevoContacto");

		let optionElement = document.createElement("option");
		companiaMenu.appendChild(optionElement);
		optionElement.text = data[index].compania;
		optionElement.value = data[index].id;
	}
};
var fetchCompanias = () => {
	fetch("http://localhost:3000/api/companias")
		.then((response) => response.json())
		.then((data) => {
			trayendoCompaniasMetodoGet(data);
		});
};
var creaContacto = () => {
	return (datos = {
		nombre: `${nombre.value}`,
		apellido: `${apellido.value}`,
		cargo: `${cargo.value}`,
		email: `${email.value}`,
		direccion: `${direccion.value}`,
		companias: `${compania.value}`,
		interes: `${interes.value}`,
		paiseId: `${pais.value}`,
		provinciaId: `${provincia.value}`,
		ciudadeId: `${ciudad.value}`,
		datosCanales: [
			{
				dato: `${datosCanal01.value}`,
			},
			{
				dato: `${datosCanal02.value}`,
			},
		],
		canales: [
			{
				id: `${canal2.value}`,
			},
			{
				id: `${canal.value}`,
			},
		],
	});
};
var metodoPostContacto = async (data, token) => {
	const response = await fetch("http://localhost:3000/api/contactos", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"user-token": ObtenerTokenLocalStorage(
				"Contacto agregado con exito",
				"Intente ingresar a la sesion nuevamente para crear un contacto"
			),
		},
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	console.log(response);
	return response.json();
};

var metodoPostContactoPorImportacion = async (data, token) => {
	const response = await fetch(
		"http://localhost:3000/api/contactos/porImportacion",
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"user-token": ObtenerTokenLocalStorage(
					"Contactos agregados con exito",
					"Intente ingresar a la sesion nuevamente para crear contactos"
				),
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		}
	);
	console.log(response);
	return response.json();
};
//obtengo el Token del SesionStorage
var ObtenerTokenLocalStorage = (mensajeSucces, mensajeError) => {
	var miToken = sessionStorage.getItem("TOKEN");

	if (miToken) {
		// modalSucces(mensajeSucces)
		return miToken;
	} else {
		return modalError(mensajeError);
	}
};
fetchPaises();
//fetchProvincias();
//fetchCiudades ();
fetchCanales();
fetchCanales2();
fetchCompanias();

guardarContacto.addEventListener("click", async function () {
	let respuesta = await metodoPostContacto(creaContacto());
	console.log(respuesta);
	if (respuesta.id != null) {
		setTimeout(() => {
			modalSucces("Contacto registrado con exito", true);
		}, 3000);
	}
	if (respuesta.error != null) {
		modalError("El contacto ya se encuentra registrado", true);
	}
});

AgregarContacto.addEventListener("click", function (ev) {
	swichParaAgregarGet++;
	sombraMenu.classList.toggle("d-none");
});

cruzMenuAgregar.addEventListener("click", function (ev) {
	sombraMenu.classList.toggle("d-none");
});

// Manejo el evento de cambio de opcion de Pais
pais.addEventListener("change", (event) => {
	console.log("pais elegido", event.target.value);
	fetchProvincias(event.target.value);
});

// Manejo el evento de cambio de opcion de Provincia
provincia.addEventListener("change", (event) => {
	console.log("provincia elegida", event.target.value);
	fetchCiudades(event.target.value);
});
