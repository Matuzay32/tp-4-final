class ContactoAGuardar {

    constructor(nombre, apellido, cargo, email
        , compania, pais, provincia, ciudad, direccion, canal1, datosCanal1, canal2, datosCanal2, interes) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.email = email;
        this.direccion = direccion;
        this.companias = compania;
        this.paiseId = pais;
        this.provinciaId = provincia;
        this.ciudadeId = ciudad;
        this.canal1 = canal1;
        this.canales = [
            {

                id: canal1
            },
            {
                id: canal2
            },

        ];
        this.datosCanales = [
            {
                dato: datosCanal1
            },
            {
                dato: datosCanal2
            }

        ];
        this.interes = interes;
    }
}


let inputExcel = document.getElementById('exampleInputFile')
inputExcel.addEventListener('change', function () {
    readXlsxFile(inputExcel.files[0]).then(function (rows) {

        console.log(rows);

        const dataAGuardar = [];

        // Si el header tiene
        if (rows[0].length < 13) {
            console.log("Formato invalido!")
        } else {

            const nuevosContactos = [];
            rows.forEach((itemFila, indiceRows) => {

                // Ignoramos la fila de los headers
                if (indiceRows > 0) {

                    const nuevoContacto = new ContactoAGuardar(itemFila[0], itemFila[1], itemFila[2], itemFila[3], itemFila[4], itemFila[5],
                        itemFila[6], itemFila[7], itemFila[8], itemFila[9], itemFila[10], itemFila[11], itemFila[12], itemFila[13], itemFila[14]);
                    //dataAGuardar.push(nuevoContacto);
                    console.log(nuevoContacto);
                    nuevosContactos.push(nuevoContacto);
                }

            });

            metodoPostContactoPorImportacion(nuevosContactos).then(respuesta => {

                console.log(respuesta);
                if (respuesta.length > 0) {
                    
                    modalSucces(`Contactos registrados con exito`, true);
                    actualizarTablaContactos();
                } else {
                    modalError(`Hubo un errores al registrar los contactos`, true)
                }
            });

        }
    })
});