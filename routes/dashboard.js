const express = require('express')
const router = express.Router()

const User = require('../models/User')
const isAuthenticated = require('../config/checkAuth')

router.get('/', isAuthenticated, (req, res) => {
    try {
        res.json({name: req.user.name, email: req.user.email})
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router