const express = require('express')
const moment = require('moment')
const { body, check, sanitizeBody, sanitizeQuery, validationResult } = require('express-validator');
const ValidUser = require('../middlewares/newUser').ValidUser
const ValidId = require('../middlewares/newUser').ValidId
const {encryptPassword} = require('../middlewares/password_hashing')
const router = express.Router()

const User = require('../models/users')

//All list
router.get('/', async (req, resp) => {
	const Users = await User.find()
	if(Users){
		resp.json(Users)
	}
	resp.json({})
})

//One list
router.get('/:id', async (req, resp) => {
	const fieldUser = await User.findById(req.params.id)
	if(fieldUser){
		return resp.json(fieldUser)
	}
	return resp.json({
	"errors": [
			{
			    "value": req.params.id,
			    "msg": "User does not exist",
			    "param": "id",
			    "location": "body"
			}
		]
	})

})

// Create
router.post('/',ValidUser)
router.post('/', 
	[
		body('email').isEmail().normalizeEmail(), 
		body('password').isLength({ min: 6 }),
		body('r_password').isLength({ min: 6 }),
		sanitizeQuery('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	
	//resp.set('Access-Control-Allow-Origin', '*')
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			error: errors.array() 
		});
	}

	if(req.body.password !== req.body.r_password){

		return resp.status(406).json({
			response: '',
			error: "Passwords don't Match"
		})

	}

	const password = await encryptPassword(req.body.password)

	let date = new Date()
	const fecha = moment(date).format('L')
	const hora = moment(date).format('LT')
	
	const {email} = req.body
	const newUser = new User({email, password, fecha, hora})
	const request = await newUser.save()
	if(request){
		return resp.status(200).json({
			response: 'Usuario Creado',
			error:false
		})
	}
	return resp.status(400).json({
		"error":"Intente de nuevo",
		"response":""
	})
})

// Update
router.put('/:id',ValidUser)
router.put('/:id',ValidId)
router.put('/:id', 
	[
	  body('email')
	    .isEmail()
	    .normalizeEmail(),
	  sanitizeBody('notifyOnReply').toBoolean()
	], 
	async (req, resp) => {

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			errors: errors.array() 
		});
	}

	let date = new Date()
	const fecha = moment(date).format('L')
	const hora = moment(date).format('LT')
	const {email, password} = req.query
	const updateUser = {email, password, fecha, hora}
	const request = await User.findByIdAndUpdate(req.params.id, updateUser)
	if(request){
		return resp.json({
			status: '200',
			message: 'User Updated'
		})
	}
	return resp.status(400).json({
		"errors": [
			{
			    "msg": "Error en DB",
			    "param": "id",
			    "location": "body"
			}
		]
	})

})


module.exports = router