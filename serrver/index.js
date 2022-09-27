const express = require('express');
const app = express();
const cors = require('cors')
const User = require('./models/user')
const jwt = require('jsonwebtoken')


app.use(express.json());
app.use(cors())
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mern-stack')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/register', async (req, res) => {
    try {
        console.log(req.body)

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log('User', user)
        return res.json({
            status: 'ok',
            data: req.body
        })
    } catch (err) {
        return res.json({
            status: "error",
            error: "duplicate email"
        })
    }
})

app.post('/login', async (req, res) => {
    try {
        console.log(req.body)

        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        console.log('User', user)
        if (user) {

            const token = jwt.sign({
                name: user.name,
                email:user.email

            }, 'secret123')
            return res.json({
                status: 'ok',
                user: token
            })
        } else {
            return res.json({
                status: 'error',
                user: false
            })
        }
    } catch (err) {
        res.json({
            status: "error",
            error: "User Not Found"
        })
    }
})
app.listen(5000, () => {
    console.log("Server Started at 5000")
})