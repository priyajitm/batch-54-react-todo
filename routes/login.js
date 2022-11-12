const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/', (req, res, next) => {
   passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) {
        res.status('401').send('Username/Password is incorrect')
    }
    if (user) {
        req.logIn(user, (err) => {
            if (err) throw err
            res.status(200).json({
                name: user.name,
                email: user.email
            })
        })
    }
   })(req, res, next)
})


module.exports = router