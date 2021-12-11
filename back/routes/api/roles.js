const router = require("express").Router();
const middlewares = require("../middlewares");
const jwt      = require("jwt-simple");
const ROL_ADMIN = 1;


const {Roles} = require("../../db")


router.get("/", async(req,res)=>{
    const roles =  await Roles.findAll();
    res.json(roles);

});



    

module.exports = router;