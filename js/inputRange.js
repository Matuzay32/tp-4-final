const input = document.getElementById('rangeMenuNuevoContacto');
const valor = document.getElementById('valor');

input.addEventListener('input', function(e)
{   
    valor.style.height ="40px";
    valor.textContent = `${e.target.value}%`;
    if(e.target.value ==0){
        valor.style.display = "none";
    }else{
        valor.style.display = "block";
        
    }
});



const inputBusqueda = document.getElementById('rangeMenuBusqueda');
const valorBusqueda = document.getElementById('valorBusqueda');

inputBusqueda.addEventListener('input', function(e)
{   
    valorBusqueda.style.height ="40px";
    valorBusqueda.textContent = `${e.target.value}%`;
    if(e.target.value ==0){
        valor.style.display = "none";
    }else{
        valor.style.display = "block";
        
    }
});



