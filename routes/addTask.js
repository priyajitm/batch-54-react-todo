const express = require('express')
const Task = require('../models/Task')
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        const {taskid, title, completed} = req.body

        console.log(taskid, title, completed)

        const taskData = new Task ({
            "taskid": taskid,
            "title": title,
            "completed": completed
        })

        await taskData.save()
        res.status(201).send({msg: 'Task Added Successfully'})

    } catch (error) {
        console.log(error)
    }
})

module.exports = router