const router=require('express').Router();
const User=require("../models/userModel")
const bcrypt= require('bcrypt')


router.get("/user", async(req,res)=>{
  try{
        req.user.username=""
        req.user.password=""
        res.status(200).json(req.user);
  }catch(e){
    res.status(400).json({ message: BAD_REQUEST });
  }
})

router.post('/login', async(req,res)=>{
    try{
        const user = await User.findOne({ username: req.body.username });
    
        if (!user) {
            return res.status(400).json({ message: "Did Not Find User" });
        }
        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordMatch) {
            return res.status(400)  
            .json({ message: "User's Password Error" });
        }
    
        
        res.status(200).json({ user });
    }catch(e){
        console.log(e)
    }
})

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10); 
    //    const User = new User({...req.body, profilePicture: `uploads/${req.file.filename}`});
    //   await user.save();
      const userDataToSave = {
        fName: req.body.fName,
        lName: req.body.lName,
        username: req.body.username, 
        password: hashedPassword,
        Role:req.body.Role,
      };
      const user = new User(userDataToSave);
      await user.save();
      res.status(200).json({ message:"CREATED SUCCESS" });
      console.log(req.body)
    } catch (e) {
        console.log(e)
      res.status(400).json({ message: "Failure" });
    }
  });
module.exports = router;
