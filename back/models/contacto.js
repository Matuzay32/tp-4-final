
module.exports =(sequelize,type) =>{
    const Contactos=  sequelize.define("contactos",{
        //Creo un foegenKey Auto increment
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
       
        nombre: type.STRING,
        apellido:type.STRING,
        cargo:type.STRING,
        email:type.STRING,
        direccion:type.STRING,
        interes:type.STRING,

        
       
    })

    return Contactos
}