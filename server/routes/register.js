const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); 
const Employee = require("../models/Employee"); 


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const existingUser = await Employee.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);



   
    const newUser = new Employee({
      name,
      email,
      password: hashedPassword,
    });

    
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});








module.exports = router;
