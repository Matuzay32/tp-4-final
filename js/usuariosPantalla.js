var cuerpoTablaContactoPantallaUsuarios = document.getElementById(
	"cuerpoTablaContactoPantallaUsuarios"
);

async function traerAllUsers(params) {
	const res = await fetch(`http://localhost:3000/api/users`);
	return await res.json();
}

var botonBorrarUsuario = async () => {
    let btnBorrarUsuario = document.getElementsByClassName("btnBorrarUsuario");
    for (let index = 0; index < btnBorrarUsuario.length; index++) {
        btnBorrarUsuario[index].addEventListener("click", async (ev) => {

            let datoABorrar = {
                id: btnBorrarUsuario[index].value
                
            }
           console.log( "esto es lo que devulve el metodo de borrado",await metodoPostborrarUser(datoABorrar));
           metodoPostborrarUser(datoABorrar);
            const allUsers = await traerAllUsers();
            actulizarTablaUsers(allUsers);
            
         
        })
     

    }


}
    
var metodoPostborrarUser   = async (data, token) => {
    const response = await fetch("http://localhost:3000/api/users", {
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

usuariosLink.addEventListener("click", async () => {
	const allUsers = await traerAllUsers();
	console.log("todos usuarios traidos", allUsers);
    actulizarTablaUsers(allUsers);
	
});

let crearContactosPantallaUsuarios = (obj) => {
	cuerpoTablaContactoPantallaUsuarios.innerHTML += `             
    <tr id=table${obj.id}>
    <td>
        <ul>
            <li ${obj.nombre} class="mb-5">${obj.nombre}  </li>
            
        </ul>
 
    </td>
    <td>
        <ul>
            <li ${obj.apellido} class="mb-5">${obj.apellido}  </li>
            
        </ul>
 
    </td>
    <td>
        <ul>
            <li ${obj.username} class="mb-5">${obj.username}  </li>
            
        </ul>
 
    </td>
    <td>
    <li>
                <address>
                    <a  class="link-warning"
                        href="mailto:${obj.email}">
                        ${obj.email}
                    </a>
                </address>
            </li>
    
    </td>
    <td>
    <button id="btnBorrarUsuario"value=${obj.id} type="button"
            class="btn btn-warning btnBorrarUsuario"> <i class="fas fa-trash-alt"></i></button></td>
    <td>
 </tr>`;

 botonBorrarUsuario();
};


function actulizarTablaUsers(allUsers) {
    let cuerpoTablaContactoPantallaUsuarios = document.getElementById(
        "cuerpoTablaContactoPantallaUsuarios")

    cuerpoTablaContactoPantallaUsuarios.innerHTML ="";

    setTimeout(() => {
        allUsers.forEach((e) => {
            crearContactosPantallaUsuarios(e);
        });
    }, 300);
   
}