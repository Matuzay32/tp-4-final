var cuerpoTablaContactoPantallaUsuarios = document.getElementById(
	"cuerpoTablaContactoPantallaUsuarios"
);

async function traerAllUsers(params) {
	const res = await fetch(`http://localhost:3000/api/users`);
	return await res.json();
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
            class="btn btn-warning btnBorrarContacto"> <i class="fas fa-trash-alt"></i></button></td>
    <td>
 </tr>`;

	//  botonBorrarContacto();
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