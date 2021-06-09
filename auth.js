const router=require('express').Router();
const user=require("../model/user");

//validation
// const Joi=require("@hapi/joi");

// const schema={
//     name:Joi.string().min(6).required(),
//     email:Joi.string().min(6).required().email(),
//     password:Joi.string().min(6).required()
// }


router.post("/register",async(req,res,next)=>{
    res.send("registered")

    // //lets validate
    // const validation=Joi.valid(req.body,schema)
    // res.send(validation)
    // console.log(validation)


    const User=new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    
    try{
        const savedUser=await User.save();
        res.send(savedUser)
    }
    catch(err){
      //res.status(400).send(err);
      console.log(err)
      return;
    }

});

// router.post("/login",(req,res)=>{
//     res.send("login")
// })

module.exports=router;