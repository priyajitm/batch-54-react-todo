const express = require('express')
const connectDatabase = require('./config/db')
const passportAuth = require('./config/passportConfig')
const session = require('express-session')
const passport = require('passport')

const port = 5000
const app = express()
connectDatabase()
passportAuth()

app.use(express.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/gettasks', require('./routes/getTasks'))
app.use('/addtask', require('./routes/addTask'))
app.use('/updatetask', require('./routes/updateTask'))
app.use('/deletetask', require('./routes/deleteTask'))
app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))
app.use('/dashboard', require('./routes/dashboard'))


app.listen(port, () => {
    console.log('server started successfully')
})
