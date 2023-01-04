const express = require('express')
const moment = require('moment')
const { body, check, sanitizeBody, sanitizeQuery, validationResult } = require('express-validator');
const ValidUser = require('../middlewares/newUser').ValidUser
const ValidId = require('../middlewares/newUser').ValidId
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
		resp.json(fieldUser)
	}
	resp.json({
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
		check('email').isEmail().normalizeEmail(), 
		check('password').isLength({ min: 6 }),
		sanitizeQuery('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	//resp.set('Access-Control-Allow-Origin', '*')
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
	const newUser = new User({email, password, fecha, hora})
	const request = await newUser.save()
	if(request){
		return resp.status(200).json({
			message: 'User Created'
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
		resp.json({
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

// Delete
router.delete('/:id', async (req, resp) => {
	const delUser = await User.findByIdAndRemove(req.params.id)
	if(delUser){
		resp.json({
			status: '201',
			message: 'User Deleted'
		})
	}
	return resp.status(400).json({
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


module.exports = router