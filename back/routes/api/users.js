const router                    = require("express").Router();
const bcrypt                    = require("bcryptjs");
const {User}                    = require("../../db");
const {check, validationResult} =require ("express-validator");
const moment                    = require("moment");
const jwt                       = require("jwt-simple");
const { rol }                   = require("../middlewares");
const middlewares               = require("../middlewares");


router.get("/", async(req,res)=>{

    const users =  await User.findAll();
    
   res.json(users); 
 

   
});

router.post("/registrer",middlewares.rol,async (req,res)=>{

   
    const user =  await User.findOne({where:{
        email:req.body.email }});
    

    if (user) {
      res.json({error: " El usuario  ya se encuentra registrado en la base de datos"});
        
   }else{
    const user =  await User.create(req.body);
    res.json(user);
       
   }
  
   

 
 })
 

 router.post("/login",async (req,res)=>{

     const user =  await User.findOne({where:{ email:req.body.email,roleId:req.body.roleId }});
     const elRol = await User.findOne({where:{roleId:req.body.roleId}})
     
     const password =  await User.findOne({where:{password:req.body.password}});
     const username =  await User.findOne({where:{username:req.body.username}});

     if (user) {
         
    }else{
       res.json({error: " el rol no concuerda con el de la base de datos"});

        
    }
     if (username) {
         
    }else{
    res.json({error: " La contraseña o el usuario son incorrectos"});
        
    }
    if (password) {
         res.json(
             {
                rol:elRol,
                Token:createToken(user),
                Usuario:"ha ingresado el Usuario Correctamente",
                
                
                })
    }else{
    res.json({error: " La contraseña o el usuario son incorrectos"});
        
    }


    
 
 })

const createToken = (user,rol) =>{
    const playLoad ={
        usuarioId:user.id,
        rolUsuario:user.roleId,
        createAt:moment().unix(),
        expiredAt:moment().add(60,"minutes").unix()
    }
    return jwt.encode(playLoad,"frase secreta");

}

router.delete("/",middlewares.rol,async (req,res)=>{



    const borrarDato = req.body.id;
    await User.destroy({ where:{id:borrarDato }});
    res.json({succcess: "Contacto Borrado con exito"});

      
})

module.exports = router;