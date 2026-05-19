const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// SIGNUP

router.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email: email
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const newUser = new User({

      name,
      email,
      password: hashedPassword

    });

    await newUser.save();

    res.status(201).json({
      message: "Signup Successful"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup Failed"
    });

  }

});


// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email: email
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found"
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(

      {
        id: user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1d"
      }

    );

    res.status(200).json({

      message: "Login Successful",

      token: token

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login Failed"
    });

  }

});

module.exports = router;