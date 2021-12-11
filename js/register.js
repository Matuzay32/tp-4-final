


const  registerUser           = document.getElementById("registerUser");
const  registerPassWord       = document.getElementById("registerPassWord");
const  registerEmail          = document.getElementById("registerEmail");
const  registerRol            = document.getElementById("registerRol");
const  registerBtn            = document.getElementById("registerRegistrar");


registerBtn.addEventListener("click",async(ev)=>{
    ev.preventDefault();

   const registroDatos= await registrerPostContacto(registerContacto());
    chequeoDatos(registroDatos,registerUser,registerPassWord,registerEmail,registerRol);

})



// cehckeo si el usuario esta bien 
// ejecuto el modal 
var chequeoDatos = (registroDatos,registerUser,registerPassWord,registerEmail,registerRol)=>{
    if(registroDatos.error){
        modalError("El usuario ya se encuentra registrado");
    }else{
        modalSucces("El usuario a sido registrado satisfacctoriamente");

    }

   
}


//creo el contacto obj
var registerContacto = () => {
    return datos = {
        username: `${registerUser.value}`,
        password: `${registerPassWord.value}`,
        email:    `${registerEmail.value}`,
        roleId:   `${registerRol.value}`,



    }


}

//Fetch contacto recibe por parametro el contacto
var registrerPostContacto = async (data) => {
    const response = await fetch("http://localhost:3000/api/users/registrer", {
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

var trayendoRolesMetodoGet  = (data)=>{
    for (let index = 0; index < data.length; index++) {

      let  registerRol=  document.getElementById("registerRol");
      

      let optionElement =document.createElement("option");
      registerRol.appendChild(optionElement);

      optionElement.text =data[index].nombre;
      optionElement.value =data[index].id;
        
    }

}


let  getRoles = ()=>{
    fetch("http://localhost:3000/api/roles")
    .then((res)=>res.json())
    .then((data)=>{
        trayendoRolesMetodoGet(data);
        
    })
}






getRoles();