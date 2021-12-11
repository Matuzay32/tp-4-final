let containerListaPaises = document.getElementById("containerListaPaises");
let btnAgregarPais       = document.getElementById("btnAgregarPais");
let agregarPaisInput   = document.getElementById("agregarPaisInput");
//varible global en la que voy a guardar el obj de companias
var arrayDeObjetos          = [];

//esta funcion crea los divs con los contenidos del metodo get
var creaPais            = (comp, idComp, containerListaPaises) => {
    containerListaPaises.innerHTML += `<div class="row bg-dark mb-5 d-flex flex-row m-3  sombra bordeFila">
                    
    <div class="col-1 bg-dark text-light   "> 
        <button class="btn btn-outline-warning mt-3  btnborrarPais" value =${idComp} ><i class="fas fa-trash-alt"></i>

        </button>
    </div>
    <div class="col bg-dark text-light m-5   "> <h2  style="border-radius: 30px; display: flex; justify-content: center;" class="bordeFila">${comp}</h2></div>
    </div>
    `




}
// esta funcion recorre el objeto que viene por el metodo get
var recorrePais         = (data) => {

    // Limpio lista de paises para provincias
    document.getElementById("agregarPaisProvincia").innerHTML = "";

    // Habilito boton para agregar provincia
    document.getElementById("btnAgregarProvincia").disabled = false;

    data.forEach(element => {
        let comp = element.pais;
        let idComp = element.id;


        //Pasa cada uno de los elemento el primer parametro es el nombre de compania
        //segundo parametro ID compania
        // Tercer paramereo el contenedor donde se van a mostrar las companias
        // esto simplemente es la funcion que hace un inner html con los parametros propiamente dichos
        creaPais(comp, idComp, containerListaPaises);

        borrarPais(idComp);

        // Agrego pais a select de paises de las provincias
        agregarNuevoPaisAListaPaisesProvincia(idComp, comp);
    });

}

var borrarPais          = () => {
    let botonesborrarPais = document.getElementsByClassName("btnborrarPais");

    //recorro botones con clase btnborrarPais 
    for (let index = 0; index < botonesborrarPais.length; index++) {

        //Cuando haga click en cualquiera de los elementos con esa clase simplemente guardo el value
        botonesborrarPais[index].addEventListener("click", function (ev) {


            //value
            let valor = botonesborrarPais[index].value;

            // console.log(paisABorrar(parseInt(valor)))

            //Paso a  la funcion de delete el objeto que esta en la funcion paisABorrar
            // A la funcion paisABorrar le paso el value que lo transformo a entero, por si acaso
            metodoPostborrarPais(paisABorrar(parseInt(valor)));
            containerListaPaises.innerHTML = "";
            setTimeout(() => {
                fetchPaisesSeccion();

            }, 500);


        })
    }

}

var paisABorrar         = (valorId) => {
    console.log(valorId);
    return data = {
        id: valorId
    }

}


//METODO GET COMPANIAS
var fetchPaisesSeccion       = () => {
    fetch('http://localhost:3000/api/paises')
        .then(response => response.json())
        .then((data) => {
            recorrePais(data);

        });


}
//METODO DELETE COMPANIA
var metodoPostborrarPais    = async (data, token) => {

    // Compruebo si existen provincias para el pais a borrar
    fetch('http://localhost:3000/api/provincias/porPais/' + data.id)
        .then(response => response.json())
        .then( async (provinciasPorPais) => {

            if(provinciasPorPais.length == 0) {

                const response = await fetch("http://localhost:3000/api/paises/", {
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'user-token': ObtenerTokenLocalStorage("Pais eliminado con exito"), //Obtengo el token del secion Storage
            
                    },
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                modalSucces("Pais eliminado con exito", true);
                return response.json();
            } else {
                modalError("No se puede borrar un pais en uso!", true)
            }
        });



}


//METODO POST AGREAGAR COMPAÑIAS
var metodoPostAgregarPais   = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/paises", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-token': ObtenerTokenLocalStorage("Pais agregado con exito"), //Obtengo el token del secion Storage

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();


}



var crearPaisBaseDatos      = (valorInput) => {
    // Separo lo que pongo en el input en distintos indices con una coma 

    let arrString = valorInput.split(",");

    //Recorro el array que se crea con cada una de los indices
    arrString.forEach(element => {

        //Creo un objeto el indice del array espesifico
        let obj02 = {
            pais: element
        }
        //Aca pusheo ese indice al arra simplemente 
        arrayDeObjetos.push(obj02);
    });


    console.log(arrayDeObjetos);


    //Creo otro obj con un array de objetos adentro simplemente 
    return obj = {
        pais:arrayDeObjetos



    }




}

const agregarNuevoPaisAListaPaisesProvincia = (idPais, nombrePais) => {

    const opcionPais = document.createElement("option");
    opcionPais.value = idPais;
    opcionPais.text = nombrePais;

    document.getElementById("agregarPaisProvincia").appendChild(opcionPais);
}


btnAgregarPais.addEventListener("click", () => {

    metodoPostAgregarPais(crearPaisBaseDatos(agregarPaisInput.value));
    containerListaPaises.innerHTML = "";
    setTimeout(() => {
        fetchPaisesSeccion();
        arrayDeObjetos = [];

    }, 500);
    
})

fetchPaisesSeccion();


