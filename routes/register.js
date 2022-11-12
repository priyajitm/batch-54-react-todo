const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { username, password, name } = req.body;
    const user = await User.findOne({ email: username });

    if (!user) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const userData = new User({
        email: username,
        password: encryptedPassword,
        name: name,
      });

      await userData.save();
      res.status(201).json({ msg: "User added successfully" });
    } else {
      res.status(409).json({ msg: "user already exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
