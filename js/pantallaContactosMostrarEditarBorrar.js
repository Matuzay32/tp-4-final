//Variables para editar contacto vienen del formulario
var editar_nombre          =  document.getElementById("nombreMenuNuevoContacto");   
var editar_apellido        =  document.getElementById("apellidoMenuNuevoContacto"); 
var editar_cargo           =  document.getElementById("cargoMenuNuevoContacto"); 
var editar_email           =  document.getElementById("emailMenuNuevoContacto"); 
var editar_direccion       =  document.getElementById("direccionMenuNuevoContacto");
var editar_interes         =  document.getElementById("rangeMenuNuevoContacto");
var editar_valor           =  document.getElementById("valor");
var editar_pais            =  document.getElementById("paisMenuNuevoContacto");
var editar_provincia       =  document.getElementById("provinciaMenuNuevoContacto");
var editar_ciudad          =  document.getElementById("ciudadMenuNuevoContacto");
var editar_canal           =  document.getElementById("canalMenuNuevoContacto");
var editar_canal2          =  document.getElementById("canalMenuNuevoContacto2");
var editar_datosCanal01    =  document.getElementById("datosCanal01");
var editar_datosCanal02    =  document.getElementById("datosCanal02");
var editar_compania        =  document.getElementById("companiaNuevoContacto");
var btnEditarContacto      =  document.getElementById("editarContacto");
var nombreContactoBusqueda =  document.getElementById("nombreContactoBusqueda");
var cargoBusqueda          =  document.getElementById("cargoBusqueda");
var paisBusqueda           =  document.getElementById("paisBusqueda");
var ciudadBusqueda         =  document.getElementById("ciudadBusqueda");
var companiaBusqueda       =  document.getElementById("companiaBusqueda");
var interesBusqueda        =  document.getElementById("rangeMenuBusqueda");
var busquedaGeneral        =  document.getElementById("busquedaGeneral");
var opcionesExtraBusqueda  =  document.getElementById("opcionesExtraBusqueda");
var arrayBusqueda          =  [];
//TODO: estoy trabajando para obtener los valores de la busqueda


function valoresBusquedaA0(params) {
    nombreContactoBusqueda.value = "";
    cargoBusqueda.value          = "";
    paisBusqueda.value           = "";
    ciudadBusqueda.value         = "";
    companiaBusqueda.value       = "";
    interesBusqueda.value        = 0;
    console.log(
        nombreContactoBusqueda.value,
        cargoBusqueda.value,
        paisBusqueda.value,
        ciudadBusqueda.value,
        companiaBusqueda.value,
        interesBusqueda.value
    );
}
opcionesExtraBusqueda.addEventListener("click",()=>{
    valoresBusquedaA0();
})
async function fetchAllGetAndReturnData() {
const res =await fetch("http://localhost:3000/api/contactos");
return await res.json();

    
}

  

valoresBusquedaA0();

document.getElementById("botonDeBusqueda").addEventListener("click",async (ev)=>{
    ev.preventDefault();
    let cuerpoTablaContactoPantallaContactos = document.getElementById("cuerpoTablaContactoPantallaContactos");
    cuerpoTablaContactoPantallaContactos.innerHTML ="";
    setTimeout(async () => {
                



        let  nombreB  = `nombre=${nombreContactoBusqueda.value}`;
        let  cargoB   = `cargo=${cargoBusqueda.value}`;
        let  paisB    = `paiseId=${paisBusqueda.value}`; 
        let ciudadB   = `ciudadeId=${ciudadBusqueda.value}`;
        let compaB    = `companias=${companiaBusqueda.value}`;
        let interesB  =  `interes=${interesBusqueda.value}`;  
        console.log(
				nombreContactoBusqueda.value,
				cargoBusqueda.value,
				paisBusqueda.value,
				ciudadBusqueda.value,
				companiaBusqueda.value,
				interesBusqueda.value
			);
        // fetchContactosBusqueda(
		// 		nombreB,
		// 		cargoB,
		// 		paisB,
		// 		ciudadB,
		// 		compaB,
		// 		interesB
		// 	);
        const datos=await fetchAllGetAndReturnData();
        console.log(datos,"estos son los datos")
      const  datosFiltrados= datos.filter((e)=>{


          return (
					e.compania.compania.toLowerCase() ==busquedaGeneral.value.toLowerCase()||
					e.interes.toLowerCase() == busquedaGeneral.value.toLowerCase() ||
					e.ciudade.ciudad.toLowerCase() == busquedaGeneral.value.toLowerCase() ||
					e.paise.pais.toLowerCase() == busquedaGeneral.value.toLowerCase() ||
					e.cargo.toLowerCase() == busquedaGeneral.value.toLowerCase() ||
					e.nombre.toLowerCase() == busquedaGeneral.value.toLowerCase() ||
					e.compania.id == companiaBusqueda.value ||
					e.interes == interesBusqueda.value ||
					e.ciudade.id == ciudadBusqueda.value ||
					e.paise.id == paisBusqueda.value ||
					e.cargo == cargoBusqueda.value.toLowerCase() ||
					e.nombre == nombreContactoBusqueda.value.toLowerCase()
				); 
           
               //e.compania.compania ||  e.interes==busquedaGeneral.value|| e.ciudade.ciudad ==busquedaGeneral.value || e.paise.pais ==busquedaGeneral.value ||e.cargo ==busquedaGeneral.value || e.nombre ==busquedaGeneral.value 
            })
        contactoDatos(datosFiltrados);
    }, 300);


    
})




var metodoPutContacto = async  (data,token) =>{
    const response = await fetch("http://localhost:3000/api/contactos", {
      method: 'PUT', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-token':ObtenerTokenLocalStorage("Contacto modificado correctamente","Intente ingresar a la sesion nuevamente para editar un contacto") ,
  
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response);
    return response.json(); 
  
    
}

var cargandoFormulario =(data)=>{
    
    console.log(data.canales,"este es mi data ");
   editar_nombre.value        = data.nombre;
   editar_apellido.value      = data.apellido;
   editar_cargo.value         = data.cargo;
   editar_email.value         = data.email;
   editar_direccion.value     =data.direccion;
   editar_interes.value       = data.interes;
   editar_valor.innerHTML     = `${data.interes}%`;
   editar_valor.style.display ="block";
   editar_pais.value          =data.paise.id;
   editar_provincia.value = data.provinciaId;
   editar_ciudad.value        =data.ciudade.id;
   editar_compania.value      = data.compania.id;
   editar_canal.value         = data.canales[0].id;
   editar_canal2.value        = data.canales[1].id;
   editar_datosCanal01.value  = data.canales[0].contactoCanales.datosCanales;
   editar_datosCanal02.value  = data.canales[1].contactoCanales.datosCanales;

}

var getIndividualContactos   = (id)=>{
    fetch(`http://localhost:3000/api/contactos/individual/${id}`)
    .then(response => response.json())
     .then((data) => {
      
        setTimeout(() => {

            fetchProvincias(data.paiseId, data.provinciaId);
            fetchCiudades(data.provinciaId, data.ciudadeId);
            cargandoFormulario(data);
        }, 500);
        
     });
     
    
}





var metodoPostborrarContacto    = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/contactos", {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-token': ObtenerTokenLocalStorage("Contacto borrado con exito","Intente ingresar a la sesion nuevamente para borrar un contacto"), //Obtengo el token del secion Storage

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();


}



function actulizarTabla() {
    let cuerpoTablaContactoPantallaContactos = document.getElementById("cuerpoTablaContactoPantallaContactos");
    cuerpoTablaContactoPantallaContactos.innerHTML ="";
    setTimeout(() => {
    fetchContactosPantallaContacto();
        
    }, 300);
}


var botonBorrarContacto=()=>{
let  botonesBorrarContacto=  document.getElementsByClassName("btnBorrarContacto");
for (let index = 0; index < botonesBorrarContacto.length; index++) {
    botonesBorrarContacto[index].addEventListener("click",(ev)=>{
        //console.log(botonesBorrarContacto[index].value, "click")
        let datoABorrar={id:botonesBorrarContacto[index].value

        }
    actulizarTabla();

        metodoPostborrarContacto(datoABorrar);
        

    })    
    
}
}
var botonEditarContacto=()=>{
    let  botonesEditarContactos=  document.getElementsByClassName("btnEditarContactos");
    for (let index = 0; index < botonesEditarContactos.length; index++) {

        botonesEditarContactos[index].addEventListener("click",function (e) {
            console.log(botonesEditarContactos[index].value,"click");
       const contactoId =     botonesEditarContactos[index].value



       getIndividualContactos(contactoId);
       document.getElementById("editarContacto").value =contactoId;
       setTimeout(() => {
        sombraMenu.classList.replace("d-none","d-block");
           
       }, 500);
            
        })
        
    }

}
var botonExportarContacto=()=>{
    let  botonesExportarContactos=  document.getElementsByClassName("btnExportar");
    for (let index = 0; index < botonesExportarContactos.length; index++) {

        botonesExportarContactos[index].addEventListener("click",function (e) {
            
            console.log(botonesExportarContactos[index].value,"click",e);
    //    const contactoId =     botonesExportarContactos[index].value

    armarTablaParaExportarAExcel(botonesExportarContactos[index].value);

      
        })
        
    }

}

const armarTablaParaExportarAExcel = (idContacto) => {

    fetch(`http://localhost:3000/api/contactos/individual/${idContacto}`)
    .then(response => response.json())
     .then((data) => {
      
        const tabla = document.createElement("table");
        tabla.id = "tablaAExportarContacto_" + idContacto;

        const datosHeader = ["Nombre","Apellido","Cargo","Email","Company","Pais","Provincia","Ciudad","Direccion","Canal 1","Datos de canal 1","Canal 2","Datos de canal 2","Interes"];
        tabla.appendChild(obtenerTableHeader(datosHeader)); 
        tabla.appendChild(obtenerTrFila(data)); 

        document.body.appendChild(tabla);

        tableToExcel(tabla.id,`Datos contacto`);
        
     });

}

const obtenerTableHeader = (datosCabecera) => {

    const trCabecera = document.createElement("tr");
    for (const itemCabecera of datosCabecera) {
        
        const thNuevo = document.createElement("th");
        thNuevo.innerText = itemCabecera;
        trCabecera.appendChild(thNuevo);
    }

    return trCabecera;
}

const obtenerTrFila = (datoFila) => {

    const tr = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.innerText = datoFila.nombre;
    tr.appendChild(nombre);

    const apellido = document.createElement("td");
    apellido.innerText = datoFila.apellido;
    tr.appendChild(apellido);

    const cargo = document.createElement("td");
    cargo.innerText = datoFila.cargo;
    tr.appendChild(cargo);

    const email = document.createElement("td");
    email.innerText = datoFila.email;
    tr.appendChild(email);

    const compania = document.createElement("td");
    compania.innerText = datoFila.compania.id;
    tr.appendChild(compania);

    const pais = document.createElement("td");
    pais.innerText = datoFila.paiseId;
    tr.appendChild(pais);

    const provincia = document.createElement("td");
    provincia.innerText = datoFila.provinciaId;
    tr.appendChild(provincia);

    const ciudad = document.createElement("td");
    ciudad.innerText = datoFila.ciudadeId;
    tr.appendChild(ciudad);

    const direccion = document.createElement("td");
    direccion.innerText = datoFila.direccion;
    tr.appendChild(direccion);

    const canal1 = document.createElement("td");
    canal1.innerText = datoFila.canales[0].id;
    tr.appendChild(canal1);

    const datosCanal1 = document.createElement("td");
    datosCanal1.innerText = datoFila.canales[0].contactoCanales.datosCanales;
    tr.appendChild(datosCanal1);

    const canal2 = document.createElement("td");
    canal2.innerText = datoFila.canales[1].id;
    tr.appendChild(canal2);

    const datosCanal2 = document.createElement("td");
    datosCanal2.innerText = datoFila.canales[1].contactoCanales.datosCanales;
    tr.appendChild(datosCanal2);

    const interes = document.createElement("td");
    interes.innerText = datoFila.interes;
    tr.appendChild(interes);

    return tr;
}


var ocultarNumeroYinstagram=()=>{
let botonesWhatsapp  = document.getElementsByClassName("btnWhatsappPantallaContactos");
let botonesInstagram = document.getElementsByClassName("btnInstagramPantallaContactos");
let numerosWhatsapp  = document.getElementsByClassName("numeroWhatsappPantallaContactos");
let instagrams       =document.getElementsByClassName("instagramPantallaContactos");
    for (let index = 0; index < botonesInstagram.length; index++) {
        botonesInstagram[index].addEventListener("click",function (e) {
            instagrams[index].classList.toggle("d-none");
        })
        
    }
    for (let index = 0; index < botonesWhatsapp.length; index++) {
        botonesWhatsapp[index].addEventListener("click",function (e) {
            numerosWhatsapp[index].classList.toggle("d-none");
        })
        
    }
    
}
let contactoDatos = (data)=>{
    data.forEach((e,i) => {
      // console.log(e,i,"elementos");
        var obj ={
            id:e.id,
            nombre:e.nombre,
            numero:e.canales[1].contactoCanales.datosCanales,
            instagram:e.canales[0].contactoCanales.datosCanales,
            apellido:e.apellido,
            cargo:e.cargo,
            email:e.email,
            ciudad:e.ciudade.ciudad,
            pais: e.paise.pais,
            compania:e.compania.compania,
            interes:e.interes,
            provincia: e.provincia.provincia
        }
        crearContactosPantallaContactos(obj);
    });
}
let fetchContactosPantallaContacto =  () =>{
    fetch("http://localhost:3000/api/contactos")
    .then(response => response.json())
      .then((data) =>{
       let muestra = contactoDatos(data);
      });
}
document.getElementById("contactosLink").addEventListener("click",async function  (params) {
   
    actulizarTabla();
    
  
})
let crearContactosPantallaContactos = (obj)=>{
    cuerpoTablaContactoPantallaContactos.innerHTML += `             <tr id=table${obj.id}>
    <td>
        <ul>
            <li ${obj.nombre} class="mb-5">${obj.nombre} ${obj.apellido}  </li>
            <li>
                <address>
                    <a  class="link-warning"
                        href="mailto:${obj.email}">
                        ${obj.email}
                    </a>
                </address>
            </li>
        </ul>
 
    </td>
    <td>
        <ul>
            <li  class="mb-5">${obj.pais}</li>
            <li>${obj.provincia}</li>
            <li>${obj.ciudad}</li>
        </ul>
    </td>
    <td>
        <ul>
            <li  class="mb-5">
            ${obj.compania}
            </li>
        </ul>
    </td>
    <td>
        <ul>
            <li >
            ${obj.cargo}
            </li>
        </ul>
    </td>
    <td>
        <ul>
            <button  class="btn btn-warning btnWhatsappPantallaContactos m-2">
            <i class="fab fa-instagram"></i>
                
            </button>
            <li class="numeroWhatsappPantallaContactos d-none">${obj.numero}</li>
            <button  type="button"
                class=" m-2 btn btn-warning btnInstagramPantallaContactos">
                <i class="fab fa-whatsapp"></i>
            </button>
            <li class="instagramPantallaContactos d-none">${obj.instagram}</li>
        </ul>
    </td>
    <td>
        <div class="col">
            <input value=${obj.interes} type="range" class="form-range"
                disabled>
            <label for="" class="form-label">${obj.interes}%</label>
 
        </div>
 
    </td>
    <td><button value=${obj.id} type="button"
            class="btn btn-warning btnBorrarContacto"> <i class="fas fa-trash-alt"></i></button></td>
    <td>
    <button value=${obj.id} type="button"
            class="btn btn-warning  btnEditarContactos">Editar</button>
            </td>
            <button value=${obj.id} type="button"
            class="btn btn-warning  btnExportar">ExportarContacto</button>
            </td>
 </tr>`



 ocultarNumeroYinstagram();
 botonBorrarContacto();
 botonEditarContacto();
 botonExportarContacto();
 }
let obteniendoFormularioDeNuevo =(id)=>{
let editar_nombre      =  document.getElementById("nombreMenuNuevoContacto");   
let editar_apellido    =  document.getElementById("apellidoMenuNuevoContacto"); 
let editar_cargo       =  document.getElementById("cargoMenuNuevoContacto"); 
let editar_email       =  document.getElementById("emailMenuNuevoContacto"); 
let editar_direccion   =  document.getElementById("direccionMenuNuevoContacto");
let editar_interes     =  document.getElementById("rangeMenuNuevoContacto");
let editar_pais        =  document.getElementById("paisMenuNuevoContacto");
let editar_provincia   =  document.getElementById("provinciaMenuNuevoContacto");
let editar_ciudad      =  document.getElementById("ciudadMenuNuevoContacto");
let editar_datosCanal01=  document.getElementById("datosCanal01");
let editar_datosCanal02=  document.getElementById("datosCanal02");
let editar_compania    =  document.getElementById("companiaNuevoContacto");
let editar_canal       =  document.getElementById("canalMenuNuevoContacto");
let editar_canal2      =  document.getElementById("canalMenuNuevoContacto2");

return  datos ={
    id:`${id}`,
    nombre: `${editar_nombre.value}`,
    apellido: `${editar_apellido.value}`,
    cargo: `${editar_cargo.value}`,
    email: `${editar_email.value}`,
    direccion: `${editar_direccion.value}`,
    companias:`${editar_compania.value}`,
    interes: `${editar_interes.value}`,
    paiseId:`${editar_pais.value}`,
    provinciaId:`${editar_provincia.value}`,
    ciudadeId:`${editar_ciudad.value}`,
    datosCanales:[
      {
          dato:`${editar_datosCanal01.value}`
      },
      {
          dato:`${editar_datosCanal02.value}`
      }
     
  ],
    canales:[
        {
          
            id:`${editar_canal.value}`
        },
        {
            id:`${editar_canal2.value}`
        },
      
    ]
    
  }

}
let resetearFormulario =()=>{
        
 let editar_nombre      =  document.getElementById("nombreMenuNuevoContacto").value ="";   
 let editar_apellido    =  document.getElementById("apellidoMenuNuevoContacto").value =""; 
 let editar_cargo       =  document.getElementById("cargoMenuNuevoContacto").value=""; 
 let editar_email       =  document.getElementById("emailMenuNuevoContacto").value=""; 
 let editar_direccion   =  document.getElementById("direccionMenuNuevoContacto").value ="";
 let editar_interes     =  document.getElementById("rangeMenuNuevoContacto").value="";
 let editar_valor       =  document.getElementById("valor");
 let editar_datosCanal01=  document.getElementById("datosCanal01").value ="";
 let editar_datosCanal02=  document.getElementById("datosCanal02").value ="";
 let editar_compania    =  document.getElementById("companiaNuevoContacto").value="";
 let editar_pais        =  document.getElementById("paisMenuNuevoContacto").value ="";
 let editar_provincia   =  document.getElementById("provinciaMenuNuevoContacto").value ="";
 let editar_ciudad      =  document.getElementById("ciudadMenuNuevoContacto").value ="";
 let editar_canal       =  document.getElementById("canalMenuNuevoContacto").value ="";
 let editar_canal2      =  document.getElementById("canalMenuNuevoContacto2").value ="";


}
document.getElementById("editarContacto").addEventListener("click",(e)=>{
    console.log(e);
    let id=document.getElementById("editarContacto").value;
   let datosMetodoPut= obteniendoFormularioDeNuevo(id);
   console.log("todo lo que tengo",datosMetodoPut);
   metodoPutContacto(datosMetodoPut);
   actulizarTabla();
   sombraMenu.classList.toggle("d-none");
   setTimeout(() => {
    resetearFormulario();
   }, 2000);

});

//TODO: estoy haciendo la busqueda
let fetchContactosBusqueda =  (nombreBusqueda,cargoBusqueda,paisBusqueda,ciudadBusqueda,compaBusqueda,interesBusqueda) =>{
    fetch(`http://localhost:3000/api/contactos/searchName?${interesBusqueda}`)
    .then(response => response.json())
      .then((data) =>{
        //let muestra = contactoDatos(data);
        console.log(`http://localhost:3000/api/contactos/searchName?${interesBusqueda}`)
         console.log(data);
      });
}



const actualizarTablaContactos = () => {

    actulizarTabla();
}