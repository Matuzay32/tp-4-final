//links 
var contactosLink       = document.getElementById("contactosLink");
var usuariosLink        = document.getElementById("usuariosLink");
var paisesCiudadesLink  = document.getElementById("paisesCiudadesLink");
var loginLink           = document.getElementById("loginLink");
var registrarseLink     = document.getElementById("registrarseLink");
var sombraMenu          = document.getElementById("sombraMenu");        
var companiasLink       = document.getElementById("companiasLink"); 
                                             

//secciones 
var contactosSection    = document.getElementById("ContactosSection");
var loginSection        = document.getElementById("loginSection");
var registerSection     = document.getElementById("registerSection");
var companiasSection    = document.getElementById("companiasSection");
var PaisCiudadSection   = document.getElementById("PaisCiudadSection");


//Funcion Imporntante obtiene como parametro todas cosas que se quieren ocultar como secciones o elementos de las mismas
var TodasLasSecciones   = (seccion1, seccion2, secion3, seccion4, seccion5,seccion6,seccion7) => {
    let arraySecciones = [];
    arraySecciones.push(seccion1, seccion2,secion3,seccion4,seccion5,seccion6);

    return arraySecciones;

}

// Aca hay que pasar lo que se quiere ocultar una ves se pasa de seccion como parametro
var arrSections         = TodasLasSecciones(contactosSection, loginSection,sombraMenu,registerSection,companiasSection,PaisCiudadSection);





//event Listeners de los links

contactosLink.addEventListener  ("click", () => {
    menuContactos(arrSections);

})

loginLink.addEventListener      ("click", () => {
    menuLogin(arrSections);

})

registrarseLink.addEventListener("click",()=>{
    menuRegistrar(arrSections);
})

companiasLink.addEventListener  ("click",()=>{
menuCompanias(arrSections);
})

paisesCiudadesLink.addEventListener("click",()=>{
menuPaisesCiudades(arrSections);

})




//funciones para ocultar las secciones 

var menuContactos       = (arraySecciones) => {

    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }
    contactosSection.classList.remove("d-none");
}


var menuLogin           = (arraySecciones) => {
    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }

    loginSection.classList.remove("d-none");

}

var menuRegistrar       = (arraySecciones) => {

    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }
    registerSection.classList.remove("d-none");

}

var menuPaisesCiudades  = (arraySecciones) => {
    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }
    PaisCiudadSection.classList.remove("d-none");


}


var menuUsuarios        = (arraySecciones) => {
    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }
    registerSection.classList.remove("d-none");


}

var menuCompanias       = (arraySecciones) => {
    for (let index = 0; index < arraySecciones.length; index++) {
        arraySecciones[index].classList.add("d-none");
    }
    companiasSection.classList.remove("d-none");


}