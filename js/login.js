var userLogin        =document.getElementById("userLogin");
var passwordLogin    =document.getElementById("passwordLogin");
var emailLogin       =document.getElementById("emailLogin");
var rolLogin         =document.getElementById("rolLogin");
var btnLogin         =document.getElementById("btnLogin");



function vaciarInputLogin() {
 userLogin.value ="" 
passwordLogin.value =""
emailLogin.value =""   
rolLogin.value =0     
    
}

//esta funcion es asyncrona para espera la respuesta del token
btnLogin.addEventListener("click",async (ev)  =>{
//La respuesta del token 
var respuesta= await  loginPostContacto(loginContacto());
//Luego paso como parametro la funcion para enviarla al SecionStorage
guardarTokenLocalStorage(respuesta.Token,respuesta.rol);
ev.preventDefault();


})



var loginContacto = () => {
    return datos = {
        username: `${userLogin.value}`,
        password: `${passwordLogin.value}`,
        email: `${emailLogin.value}`,
        roleId: `${rolLogin.value}`,



    }


}
//metodo Post para hacer login que devuelve el token
var loginPostContacto = async (data) => {
    const response = await fetch("http://localhost:3000/api/users/login", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
     
         }, 
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return  response.json();


}


//guarda el token en secionStorage
var guardarTokenLocalStorage=(Token,rol)=>{

    if(rol.roleId ===1){
        setTimeout(async() => {
        document.getElementById("usuariosLink").classList.remove("d-none");
        modalSucces("Ha ingresado como administrador  ✔️",30000000);
        const allUsers = await traerAllUsers();
        actulizarTablaUsers(allUsers);
        menuUsuarios(arrSections);
        vaciarInputLogin();
            
        }, 1000);
    }else{
        document.getElementById("usuariosLink").classList.add("d-none");
        modalSucces("Ha ingresado los datos correctamente  ✔️");


    }
        console.log("este es mi rol:", rol.roleId);
    if(Token){
    sessionStorage.setItem('TOKEN', Token);
    
    }else{
    sessionStorage.removeItem("TOKEN");
        modalError("El usuario o contraseña son incorrectos  ✖️");
        return;
    }
    
}



var modalSucces = (mensaje, impedirRecargar)=>{
    let modalHeader             =document.getElementById("modalHeader");
    let modalBody               =document.getElementById("modalBody");
    let contenedorH5Modal       =document.getElementById("contenedorH5Modal");
    let h5Modal                 =document.getElementById("h5Modal");
    h5Modal.textContent = mensaje;
   let arrayModalSucces=[];
   arrayModalSucces.push(modalHeader,modalBody,contenedorH5Modal);
   for (let index = 0; index < arrayModalSucces.length; index++) {
    if(arrayModalSucces[index].classList.contains("alert-danger") ==true){
        arrayModalSucces[index].classList.remove("alert-danger");
        arrayModalSucces[index].classList.add("alert-success");
    }       
   }
   modalMostrar(impedirRecargar);
}


var modalError = (mensaje, impedirRecargar)=>{
    let modalHeader             =document.getElementById("modalHeader");
    let modalBody               =document.getElementById("modalBody");
    let contenedorH5Modal       =document.getElementById("contenedorH5Modal");
    let h5Modal                 =document.getElementById("h5Modal");
    h5Modal.textContent = mensaje;
   let arrayModalSucces=[];
   arrayModalSucces.push(modalHeader,modalBody,contenedorH5Modal);
   for (let index = 0; index < arrayModalSucces.length; index++) {
    if(arrayModalSucces[index].classList.contains("alert-success") ==true){
        arrayModalSucces[index].classList.remove("alert-success");
        arrayModalSucces[index].classList.add("alert-danger");
    }       
   }
   modalMostrar(impedirRecargar);
}



var modalMostrar =(impedirRecargar)=>{
    let modal=document.getElementById("miModal");


    modal.classList.toggle("show");
    modal.style.display ="block";
    modal.setAttribute("role","dialog");
    modal.setAttribute("aria-modal","true");


    setTimeout(() => {
        modal.style.display ="none"

    }, 3000);

    if(!impedirRecargar) {

        setTimeout(() => {
            cargarPagina();
    
        }, 3000);
    }
}

var cargarPagina =()=>{

    location.reload();

}

var trayendoRolesMetodoGetLogin  = (data)=>{
    for (let index = 0; index < data.length; index++) {

      let  registerRol=  document.getElementById("rolLogin");
      

      let optionElement =document.createElement("option");
      registerRol.appendChild(optionElement);

      optionElement.text =data[index].nombre;
      optionElement.value =data[index].id;
        
    }

}


let  getRolesLogin = ()=>{
    fetch("http://localhost:3000/api/roles")
    .then((res)=>res.json())
    .then((data)=>{
        trayendoRolesMetodoGetLogin(data);
        
    })
}






getRolesLogin();