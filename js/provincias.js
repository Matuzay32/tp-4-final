
let creaProvincia = (comp, idComp, container) => {
    container.innerHTML += `<div class="row bg-dark mb-5 d-flex flex-row m-3  sombra bordeFila">
                    
    <div class="col-1 bg-dark text-light   "> 
        <button class="btn btn-outline-warning mt-3  btnborrarProvincia" value =${idComp} ><i class="fas fa-trash-alt"></i>

        </button>
    </div>
    <div class="col bg-dark text-light m-5   "> <h2  style="border-radius: 30px; display: flex; justify-content: center;" class="bordeFila">${comp}</h2></div>
    </div>
    `
}

let containerListaProvincias = document.getElementById("containerListaProvincias");
let recorreProvincias = (data) => {

    // Limpio lista de provincias desactualizada
    document.getElementById("containerListaProvincias").innerHTML = "";

    // Limpio lista de provincias para ciudades
    document.getElementById("agregarProvinciaCiudad").innerHTML = "";

    // Habilito boton para agregar ciudad
    document.getElementById("btnAgregarCiudad").disabled = false;


    data.forEach(element => {

        let comp = element.provincia;
        let idComp = element.id;

        creaProvincia(comp, idComp, containerListaProvincias);

        habilitarBotonesBorrarProvincia();

        // Agrego provincia a select de provincias de las ciudades
        agregarNuevaProvinciaAListaProvinciasCiudad(idComp, comp);

    });

}

let habilitarBotonesBorrarProvincia = () => {

    let botonesborrarProvincia = document.getElementsByClassName("btnborrarProvincia");

    for (let index = 0; index < botonesborrarProvincia.length; index++) {

        botonesborrarProvincia[index].addEventListener("click", function (ev) {

            //value
            let valor = botonesborrarProvincia[index].value;
            console.log("valor provincia: ", valor);

            borrarProvincia(parseInt(valor));
            containerListaProvincias.innerHTML = "";
            setTimeout(() => {
                fetchProvinciasSeccion();

            }, 500);


        })
    }

}

const agregarNuevaProvinciaAListaProvinciasCiudad = (idProvincia, nombreCiudad) => {

    const opcionProvincia = document.createElement("option");
    opcionProvincia.value = idProvincia;
    opcionProvincia.text = nombreCiudad;

    document.getElementById("agregarProvinciaCiudad").appendChild(opcionProvincia);
}

var fetchProvinciasSeccion = () => {
    fetch('http://localhost:3000/api/provincias')
        .then(response => response.json())
        .then((data) => {
            recorreProvincias(data);
        });


}

var crearProvinciasBaseDatos = (valorInput, valorSelect) => {
    // Separo lo que pongo en el input en distintos indices con una coma 

    let arrString = valorInput.split(",");

    //Recorro el array que se crea con cada una de los indices
    arrString.forEach(element => {

        //Creo un objeto el indice del array espesifico
        let obj02 = {
            provincia: element,
            paiseId: valorSelect
        }
        //Aca pusheo ese indice al arra simplemente 
        arrayDeObjetos.push(obj02);
    });


    console.log(arrayDeObjetos);


    //Creo otro obj con un array de objetos adentro simplemente 
    return obj = {
        provincias: arrayDeObjetos

    }

}

let btnAgregarProvincia = document.getElementById("btnAgregarProvincia");
btnAgregarProvincia.addEventListener("click", () => {

    agregarProvincia(crearProvinciasBaseDatos(document.getElementById("agregarProvinciaInput").value, document.getElementById("agregarPaisProvincia").value));
    setTimeout(() => {
        fetchProvinciasSeccion();
        arrayDeObjetos = [];

    }, 500);

})

const agregarProvincia = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/provincias", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-token': ObtenerTokenLocalStorage("Provincia agregada con exito"), //Obtengo el token del secion Storage

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();
}


const borrarProvincia = (idProvincia) => {

    console.log(idProvincia);
    fetch('http://localhost:3000/api/ciudades/porProvincia/' + idProvincia)
        .then(response => response.json())
        .then(async (ciudadesPorProvincia) => {

            if (ciudadesPorProvincia.length == 0) {

                const response = await fetch("http://localhost:3000/api/provincias/" + idProvincia, {
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'user-token': ObtenerTokenLocalStorage("Provincia eliminada con exito"), //Obtengo el token del secion Storage

                    }
                });
                modalSucces("Provincia eliminada con exito", true);
                return response.json();
            } else {
                modalError("No se puede borrar una provincia en uso!", true)
            }

        });
}

fetchProvinciasSeccion();