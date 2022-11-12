const mongoose = require('mongoose')

const Task = new mongoose.Schema({
    "taskid": String,
    "title": String,
    "completed": Boolean
})


module.exports = mongoose.model('tasks', Task)