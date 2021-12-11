
module.exports =(sequelize,type) =>{
    const DetallesPedido=  sequelize.define("detallesPedido",{
        //Creo un foegenKey Auto increment
        detallePedidoId:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cantidad:type.INTEGER, 
        estado: {
            // creo un estado en Proceso como estado de defecto // puede cambiarse luego con los endPoints
            type:type.STRING,
            defaultValue:"En proceso"
        },
        tipoPago: {
            // creo un estado en Proceso como estado de defecto // puede cambiarse luego con los endPoints
            type:type.STRING,
            
        },
        direccionEnvio:{
            type:type.STRING,
            
        }
    })

    return DetallesPedido
}