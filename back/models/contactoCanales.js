module.exports =(sequelize,type) =>{
    const ContactoCanales = sequelize.define("contactoCanales",{
        Id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        datosCanales: type.STRING,
    })

    return ContactoCanales;
}
