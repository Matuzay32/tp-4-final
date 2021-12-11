const router      = require("express").Router();
const middlewares = require("../middlewares");
const jwt         = require("jwt-simple");
const ROL_ADMIN   = 1;


const {Canales} = require("../../db")


router.get("/", async(req,res)=>{
    const canales =  await Canales.findAll();
    res.json(canales);

});

router.post("/",middlewares.rol,async (req,res)=>{

    var cabecera = req.headers["user-token"];
    var usuario =  jwt.decode(cabecera,"frase secreta");

    /* if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para agregar pais.`);
        return false;
    } */

    const canales = await Canales.create(req.body);
    res.json(canales);

});

router.put("/:canalesId",middlewares.rol,async (req,res)=>{

    var cabecera = req.headers["user-token"];
    var usuario =  jwt.decode(cabecera,"frase secreta");

    if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para actualizar pais.`);
        return false;
    }

    await Canales.update(req.body,{
        where:{id: req.params.canalesId}
    });
    res.json({succcess: "update correcto"});
    
    
});


router.delete("/:canalesId",middlewares.rol,async (req,res)=>{


    var cabecera = req.headers["user-token"];
    var usuario =  jwt.decode(cabecera,"frase secreta");

    if(!esUsuarioValidoParaGestionarProducto(usuario)) {

        res.status(400).send(`Usuario invalido para eliminar un pais.`);
        return false;
    }

      await Canales.destroy({
          where:{id: req.params.canalesId}
      });
      res.json({succcess: "producto borrado"});
      
      
});
   
function esUsuarioValidoParaGestionarProducto(usuario) {

    if(!usuario || usuario.rolUsuario != ROL_ADMIN) {
        return false;
    }

    return true;
}
    

module.exports = router;