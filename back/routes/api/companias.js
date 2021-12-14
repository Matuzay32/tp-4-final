const router      = require("express").Router();
const middlewares = require("../middlewares");
const jwt         = require("jwt-simple");
const ROL_ADMIN   = 1;


const {Companias} = require("../../db")


router.get("/", async(req,res)=>{
    const companias =  await Companias.findAll();
    res.json(companias);

});

router.post("/"/* ,middlewares.rol */,async (req,res)=>{

    /*  var cabecera = req.headers["user-token"];
     var usuario =  jwt.decode(cabecera,"frase secreta"); */

        const arrCompanias = req.body.companias;

      
        arrCompanias.forEach(async(element) => {
            let obj ={
                compania:element.compania,
                numero: element.numero,
                paiseId:element.paiseId

                
            }
            var tablaCompanias =  await Companias.create(obj); 
            
        });
           
        res.json("Compañias cargadas satisfactoriamente");
        

     /* const [compania, created] = await Companias.findOrCreate({
        where: { compania: req.body.compania },
       
      }); */
       
    
 
 });



 router.delete("/"/* ,middlewares.rol */,async (req,res)=>{

    /* 
        var cabecera = req.headers["user-token"];
        var usuario =  jwt.decode(cabecera,"frase secreta") */;
    /* 
        if(!esUsuarioValidoParaGestionarProducto(usuario)) {
    
            res.status(400).send(`Usuario invalido para eliminar un pais.`);
            return false;
        } */
                const borrarDato = req.body.id;
         const comp= await Companias.destroy({ where:{id:borrarDato }});
          res.json({succcess: "compania borrada con exito"});
          
          
    });


function esUsuarioValidoParaGestionarProducto(usuario) {

    if(!usuario || usuario.rolUsuario != ROL_ADMIN) {
        return false;
    }

    return true;
}
    

module.exports = router;