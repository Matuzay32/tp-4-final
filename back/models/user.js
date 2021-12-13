module.exports =(sequelize,type) =>{
    const Users = sequelize.define("users",{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:type.STRING,
        apellido:type.STRING,
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,

       

    })


    return Users;
}
