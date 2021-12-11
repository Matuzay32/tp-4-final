module.exports =(sequelize,type) =>{
    const Roles = sequelize.define("roles",{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        codigo: type.STRING,
        nombre: type.STRING,
      
    })


    return Roles;
}
