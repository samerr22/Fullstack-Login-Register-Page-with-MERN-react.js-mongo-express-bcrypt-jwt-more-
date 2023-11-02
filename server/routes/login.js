const router = require("express").Router();
const bcrypt = require('bcrypt');
const Employee = require("../models/Employee")

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      
      const user = await Employee.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
     
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });
  





module.exports = router;