let containerListaCiudades = document.getElementById("containerListaCiudades");
let btnAgregarCiudad = document.getElementById("btnAgregarCiudad");
let agregarCiudadInput = document.getElementById("agregarCiudadInput");
//varible global en la que voy a guardar el obj de companias
var arrayDeObjetos = [];

//esta funcion crea los divs con los contenidos del metodo get
var creaCiudad = (comp, idComp, containerListaCompanias) => {
	containerListaCiudades.innerHTML += `<div class="row bg-dark mb-5 d-flex flex-row m-3  sombra bordeFila">
                    
    <div class="col-1 bg-dark text-light   "> 
        <button class="btn btn-outline-warning mt-3  btnBorrarCiudad" value =${idComp} ><i class="fas fa-trash-alt"></i> </button>
    </div>
    <div class="col bg-dark text-light m-5   "> <h2  style="border-radius: 30px; display: flex; justify-content: center;" class="bordeFila">${comp}</h2></div>
    </div>
    `;
};
// esta funcion recorre el objeto que viene por el metodo get
var recorreCiudad = (data) => {
	data.forEach((element) => {
		let comp = element.ciudad;
		let idComp = element.id;

		//Pasa cada uno de los elemento el primer parametro es el nombre de compania
		//segundo parametro ID compania
		// Tercer paramereo el contenedor donde se van a mostrar las companias
		// esto simplemente es la funcion que hace un inner html con los parametros propiamente dichos
		creaCiudad(comp, idComp, containerListaCompanias);

		borrarCiudad(idComp);
	});
};

var borrarCiudad = () => {
	let botonesborrarCiudad = document.getElementsByClassName("btnBorrarCiudad");

	//recorro botones con clase btnborrarCiudad
	for (let index = 0; index < botonesborrarCiudad.length; index++) {
		//Cuando haga click en cualquiera de los elementos con esa clase simplemente guardo el value
		botonesborrarCiudad[index].addEventListener("click", function (ev) {
			//value
			let valor = botonesborrarCiudad[index].value;

			// console.log(ciudadABorrar(parseInt(valor)))

			//Paso a  la funcion de delete el objeto que esta en la funcion ciudadABorrar
			// A la funcion ciudadABorrar le paso el value que lo transformo a entero, por si acaso
			metodoPostborrarCiudad(ciudadABorrar(parseInt(valor)));
			containerListaCiudades.innerHTML = "";
			setTimeout(() => {
				fetchCiudadesSeccion();
			}, 500);
		});
	}
};

var ciudadABorrar = (valorId) => {
	console.log(valorId);
	return (data = {
		id: valorId,
	});
};

//METODO GET COMPANIAS
var fetchCiudadesSeccion = () => {
	fetch("http://localhost:3000/api/ciudades")
		.then((response) => response.json())
		.then((data) => {
			recorreCiudad(data);
		});
};
var metodoPostborrarCiudad = async (data, token) => {
	const response = await fetch("http://localhost:3000/api/ciudades", {
		method: "DELETE",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"user-token": ObtenerTokenLocalStorage(
				"Ciudad borrada con exito",
				"Ingrese nuevamente a la sesion para poder borrar una ciudad"
			), //Obtengo el token del secion Storage
		},
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	modalSucces("Ciudad eliminada con exito", true);
	return response.json();
};

var metodoPostAgregarCiudad = async (data, token) => {
	const response = await fetch("http://localhost:3000/api/ciudades", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"user-token": ObtenerTokenLocalStorage(
				"Ciudad agregada con exito",
				"Intente ingresar de nuevo para poder agregar una ciudad"
			), //Obtengo el token del secion Storage
		},
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	return response.json();
};

var crearCiudadBaseDatos = (valorInput, valorSelect) => {
	// Separo lo que pongo en el input en distintos indices con una coma

	let arrString = valorInput.split(",");

	//Recorro el array que se crea con cada una de los indices
	arrString.forEach((element) => {
		//Creo un objeto el indice del array espesifico
		let obj02 = {
			ciudad: element,
			provinciaId: valorSelect,
		};
		//Aca pusheo ese indice al arra simplemente
		arrayDeObjetos.push(obj02);
	});

	console.log(arrayDeObjetos);

	//Creo otro obj con un array de objetos adentro simplemente
	return (obj = {
		ciudad: arrayDeObjetos,
	});
};

btnAgregarCiudad.addEventListener("click", () => {
	metodoPostAgregarCiudad(
		crearCiudadBaseDatos(
			agregarCiudadInput.value,
			document.getElementById("agregarProvinciaCiudad").value
		)
	);
	containerListaCiudades.innerHTML = "";
	setTimeout(() => {
		fetchCiudadesSeccion();
		arrayDeObjetos = [];
	}, 500);
});

fetchCiudadesSeccion();

const cargarProvinciasParaCiudades = () => {
	fetch("http://localhost:3000/api/provincias")
		.then((response) => response.json())
		.then((data) => {
			// Si no hay provincias creadas, deshabilito boton para agrear ciudades
			if (data.length == 0) {
				document.getElementById("btnAgregarCiudad").disabled = true;
			}

			data.forEach((item) => {
				const idProvincia = item.id;
				const nombreProvincia = item.provincia;

				const opcionProvincia = document.createElement("option");
				opcionProvincia.value = idProvincia;
				opcionProvincia.text = nombreProvincia;

				document
					.getElementById("agregarProvinciaCiudad")
					.appendChild(opcionProvincia);
			});
		});
};

cargarProvinciasParaCiudades();
