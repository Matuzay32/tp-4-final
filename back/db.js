const  Sequelize  = require("sequelize");

const path        = 'mysql://root@localhost:3306/dataWareHouse';


const CanalesModel         = require("./models/canales");
const CiudadModel          = require("./models/ciudad");
const ContactoModel        = require("./models/contacto");
const ContactoCanalesModel = require("./models/contactoCanales");
const PaisesModel          = require("./models/paises");
const RolesModel           = require("./models/roles");
const UserModel            = require("./models/user");
const CompaniasModel       = require("./models/companias");

const ProvinciasModel          = require("./models/provincia");




const sequelize_ruta = new Sequelize(path,{
    host:"localhost",
    dialect: "mssql"

})
       const Canales                  = CanalesModel(sequelize_ruta,Sequelize);        
       const Ciudades                 = CiudadModel(sequelize_ruta,Sequelize);         
       const Contactos                = ContactoModel(sequelize_ruta,Sequelize);       
       const ContactoCanales          = ContactoCanalesModel(sequelize_ruta,Sequelize);
       const Paises                   = PaisesModel(sequelize_ruta,Sequelize);         
       const Roles                    = RolesModel(sequelize_ruta,Sequelize);           
       const User                     = UserModel(sequelize_ruta,Sequelize);          
       const Companias                = CompaniasModel(sequelize_ruta,Sequelize);      
       const Provincias               = ProvinciasModel(sequelize_ruta,Sequelize); 

            

//Asociaciones 
// el pedido tiene un usuario 
//añadir una claver foraea del tipo user id
 
/* Pedido.belongsTo(User);
Pedido.belongsTo(Producto);
DetallesPedido.belongsTo(User);
DetallesPedido.belongsTo(Pedido);
DetallesPedido.belongsTo(Producto);
  */
/* Producto.belongsToMany(productoPedido, { through: productoPedido });
productoPedido.belongsToMany(Producto, { through: productoPedido }); */
//ContactoCanales.belongsToMany(Contactos, {through: Prueba});
//Contactos.belongsToMany(ContactoCanales, {through: Prueba}); 
Contactos.belongsToMany(Canales, {
  through: ContactoCanales,
});

User.belongsTo(Roles);
Contactos.belongsTo(Paises);
Contactos.belongsTo(Provincias);
Contactos.belongsTo(Ciudades);
ContactoCanales.belongsTo(Canales);
ContactoCanales.belongsTo(Contactos);
Contactos.belongsTo(Companias,{  foreignKey: 'companias' });

Provincias.belongsTo(Paises);
Ciudades.belongsTo(Provincias);

//Simplemente sincronizo las tablas
sequelize_ruta.sync({ alter: true })
.then(()=>{
    console.log("tablas sincronizadas");
})
module.exports ={
       Canales,               
       Ciudades,                 
       Contactos,               
       ContactoCanales,        
       Paises,                 
       Roles,                  
       User,
       Companias,
       Provincias
   
}