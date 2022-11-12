const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find()
      res.status(200).json({tasks})
    } catch (error) {
      console.log(error)
    }
})


module.exports = router