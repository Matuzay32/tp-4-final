//Obteniendo datos para enviar a los Select


//Fetch que traen todos los datos de la base 
//Metodos GET
let fetchCompaniasSelect  = ()=>{
    fetch('http://localhost:3000/api/companias')
    .then(response => response.json())
     .then((data) => {
        trayendoCompaniasMetodoGetSelect(data);
  
     });
     
    
}
let fetchCiudadesSelect   = ()=>{
    fetch('http://localhost:3000/api/ciudades')
    .then(response => response.json())
     .then((data) => {
        trayendoCiudadesMetodoGetSelect(data);
  
     });
     
    
}
let fetchPaisesSelect     = ()=>{
    fetch('http://localhost:3000/api/paises')
    .then(response => response.json())
     .then((data) => {
        trayendoPaisesMetodoGetSelect(data);

     });
     
    
}
var fetchCanalesSelect  = ()=>{
    fetch('http://localhost:3000/api/canales')
    .then(response => response.json())
     .then((data) => {
        trayendoCanalesMetodoGetSelect(data);
            

     });
     
    
}

//Creadores de opciones en los select de busqueda // obtienen como dato el data que viene del fetch 
//En el back es un findAll
var trayendoCompaniasMetodoGetSelect= (data)=>{
    for (let index = 0; index < data.length; index++) {
  
      let  companiaMenu=  document.getElementById("companiaBusqueda");
      
  
      let optionElement =document.createElement("option");
      companiaMenu.appendChild(optionElement);
      optionElement.text =data[index].compania;
      optionElement.value = data[index].id
  
        
    }
  
} 
var trayendoCiudadesMetodoGetSelect = (data)=>{
    for (let index = 0; index < data.length; index++) {

      let  ciudadMenu=  document.getElementById("ciudadBusqueda");
      

      let optionElement =document.createElement("option");
      ciudadMenu.appendChild(optionElement);
                  
      optionElement.text =data[index].ciudad;
      optionElement.value = data[index].id
    }

}
var trayendoPaisesMetodoGetSelect   = (data)=>{
    for (let index = 0; index < data.length; index++) {

      let  paisMenu=  document.getElementById("paisBusqueda");
      

      let optionElement =document.createElement("option");
      paisMenu.appendChild(optionElement);
      optionElement.text =data[index].pais;
      optionElement.value = data[index].id

        
    }

}
var trayendoCanalesMetodoGetSelect  = (data)=>{
    for (let index = 0; index < data.length; index++) {

      let  canalMenu=  document.getElementById("canalBusqueda");
      

      let optionElement =document.createElement("option");
      // canalMenu.appendChild(optionElement);

      optionElement.text =data[index].nombre;
      optionElement.value =data[index].id;
        
    }

}







//Ejecutando, ejecutando fetchs

fetchCiudadesSelect     ();
fetchCompaniasSelect    ();
fetchPaisesSelect       ();
fetchCanalesSelect      ();