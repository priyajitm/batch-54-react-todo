const mongoose = require('mongoose')

const User = new mongoose.Schema({
    "email": String,
    "password": String,
    "name": String
})


module.exports = mongoose.model('users', User)