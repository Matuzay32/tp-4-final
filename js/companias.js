let containerListaCompanias = document.getElementById("containerListaCompanias");
let btnAgregarCompania      = document.getElementById("btnAgregarCompania");
let agregarCompaniaInput    = document.getElementById("agregarCompaniaInput");
//varible global en la que voy a guardar el obj de companias
var arrayDeObjetos          = [];

//esta funcion crea los divs con los contenidos del metodo get
var creaCompania            = (comp, idComp, containerListaCompanias) => {
    containerListaCompanias.innerHTML += `<div class="row bg-dark mb-5 d-flex flex-row m-3  sombra bordeFila">
                    
    <div class="col-1 bg-dark text-light   "> 
        <button class="btn btn-outline-warning mt-3  btnBorrarCompania" value =${idComp} ><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="col bg-dark text-light m-5   "> <h2  style="border-radius: 30px; display: flex; justify-content: center;" class="bordeFila">${comp}</h2></div>
    </div>
    `




}
// esta funcion recorre el objeto que viene por el metodo get
var recorreCompania         = (data) => {

    data.forEach(element => {
        let comp = element.compania;
        let idComp = element.id;


        //Pasa cada uno de los elemento el primer parametro es el nombre de compania
        //segundo parametro ID compania
        // Tercer paramereo el contenedor donde se van a mostrar las companias
        // esto simplemente es la funcion que hace un inner html con los parametros propiamente dichos
        creaCompania(comp, idComp, containerListaCompanias);

        borrarCompania(idComp);
    });

}

var borrarCompania          = () => {
    let botonesBorrarCompania = document.getElementsByClassName("btnBorrarCompania");

    //recorro botones con clase btnBorrarCompania 
    for (let index = 0; index < botonesBorrarCompania.length; index++) {

        //Cuando haga click en cualquiera de los elementos con esa clase simplemente guardo el value
        botonesBorrarCompania[index].addEventListener("click", function (ev) {


            //value
            let valor = botonesBorrarCompania[index].value;

            // console.log(companiaABorrar(parseInt(valor)))

            //Paso a  la funcion de delete el objeto que esta en la funcion companiaABorrar
            // A la funcion CompaniaABorrar le paso el value que lo transformo a entero, por si acaso
            metodoPostBorrarCompania(companiaABorrar(parseInt(valor)));
            containerListaCompanias.innerHTML = "";
            setTimeout(() => {
                fetchCompaniasSeccion();

            }, 500);


        })
    }

}

var companiaABorrar         = (valorId) => {
    console.log(valorId);
    return data = {
        id: valorId
    }

}


//METODO GET COMPANIAS
var fetchCompaniasSeccion       = () => {
    fetch('http://localhost:3000/api/companias')
        .then(response => response.json())
        .then((data) => {
            recorreCompania(data);

        });


}
//METODO DELETE COMPANIA
var metodoPostBorrarCompania    = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/companias", {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-token': ObtenerTokenLocalStorage("Copañia borrada con exito","Intente ingresasr a la sesion nuevamente para poder borrar la compañia"), //Obtengo el token del secion Storage

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();


}


//METODO POST AGREAGAR COMPAÑIAS
var metodoPostAgregarCompania   = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/companias", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-token': ObtenerTokenLocalStorage("Compañia Agregada exitosamente","Intente ingresar a la sesion nuevamente para poder agregar una compañia"), //Obtengo el token del secion Storage

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();


}



var crearCompaniaBaseDatos      = (valorInput) => {
    // Separo lo que pongo en el input en distintos indices con una coma 

    let arrString = valorInput.split(",");

    //Recorro el array que se crea con cada una de los indices
    arrString.forEach(element => {

        //Creo un objeto el indice del array espesifico
        let obj02 = {
            compania: element
        }
        //Aca pusheo ese indice al arra simplemente 
        arrayDeObjetos.push(obj02);
    });


    console.log(arrayDeObjetos);


    //Creo otro obj con un array de objetos adentro simplemente 
    return obj = {
        companias:
            arrayDeObjetos



    }




}


btnAgregarCompania.addEventListener("click", () => {

    metodoPostAgregarCompania(crearCompaniaBaseDatos(agregarCompaniaInput.value));
    containerListaCompanias.innerHTML = "";
    setTimeout(() => {
        fetchCompaniasSeccion();
        arrayDeObjetos = [];

    }, 500);

})

fetchCompaniasSeccion();



