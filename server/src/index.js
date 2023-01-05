const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const path = require('path')
const colors = require('colors')
const cors = require('cors')
const isLoggedIn = require('./middlewares/newUser').isLoggedIn
require('dotenv').config()

//DB
const { mongoose } = require('./db')

const app = express()

//Settings
app.set('port', process.env.PORT || 5000)
//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(session({
    secret: process.env.sessionKey,
    resave: false,
    saveUninitialized: true
}))

//Routes
app.use('/api/v1/properties', require('./routes/property'))
app.use('/api/v1/users', require('./routes/user'))
app.use('/api/v1/', require('./routes/index'))

//Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`.green)
})