const express = require('express')
const moment = require('moment')
const { body, check, sanitizeBody, sanitizeQuery, validationResult } = require('express-validator');
const ValidId = require('../middlewares/newProperty').ValidId
const router = express.Router()

const Property = require('../models/properties')

//All list properties
router.get('/', async (req, resp) => {
	const Properties = await Property.find().select('title categorie price bano rooms estacionamiento description location img');
	if(Properties){
	return resp.json({
		"response":Properties,
		"error": false
	})
	}
	return resp.json({
		"response": "No hay Propiedades Disponibles",
		"error": false
	})
})

//One list
router.get('/:id', async (req, resp) => {
	const fieldProperty = await Property.findById(req.params.id)
	if(fieldProperty){
		return resp.json(fieldProperty)
	}
	return resp.json({
		"response":"",
		"error": "Propiedad no existe"
	})

})

// Update
router.post('/:id',ValidId)
router.post('/:id', 
	[
		body('title').isLength({ min: 1 }),
		body('categorie').isLength({ min: 1 }),
		body('price').isLength({ min: 1 }),
		body('bano').isLength({ min: 1 }),
		body('rooms').isLength({ min: 1 }),
		body('estacionamiento').isLength({ min: 1 }),
		body('description').isLength({ min: 1 }),
		body('location').isLength({ min: 1 }),
		body('img').isLength({ min: 1 }),
		sanitizeBody('notifyOnReply').toBoolean()
	], 
	async (req, resp) => {

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			response: "",
			error: errors.array() 
		});
	}

	let date = new Date()
	const _date = moment(date).format('L')
	const hour = moment(date).format('LT')
    const owner = 'testowner'
	const {title, categorie, price, bano, rooms, estacionamiento, description, location, img} = req.query
	const updateProperty = {title, categorie, price, bano, rooms, estacionamiento, description, owner, location, img, _date, hour}
	const request = await Property.findByIdAndUpdate(req.params.id, updateProperty)
	if(request){
		return resp.status(200).json({
			error: false,
			response: 'Propiedad actualizada'
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

// Create
router.post('/', 
	[
		body('title').isLength({ min: 1 }),
		body('categorie').isLength({ min: 1 }),
		body('price').isLength({ min: 1 }),
		body('bano').isLength({ min: 1 }),
		body('rooms').isLength({ min: 1 }),
		body('estacionamiento').isLength({ min: 1 }),
		body('description').isLength({ min: 1 }),
		body('location').isLength({ min: 1 }),
		body('img').isLength({ min: 1 }),
		sanitizeQuery('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	//resp.set('Access-Control-Allow-Origin', '*')
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			response: "",
			error: errors.array() 
		});
	}

	let date = new Date()
	const _date = moment(date).format('L')
	const hour = moment(date).format('LT')
    const owner = 'testowner'
	const {title, categorie, price, bano, rooms, estacionamiento, description, location, img} = req.body
	const newProperty = new Property({title, categorie, price, bano, rooms, estacionamiento, description, owner, location, img, _date, hour})
	const request = await newProperty.save()
	if(request){
		return resp.status(200).json({
			error: false,
			response: 'Propiedad creada'
		})
	}
	return resp.status(400).json({
		response: "",
		"error": "Error en DB"
	})
})

// Delete
router.delete('/:id', async (req, resp) => {
	const delProperty = await Property.findByIdAndRemove(req.params.id)
	if(delProperty){
		return resp.status(201).json({
			error: false,
			response: 'Propiedad Eliminada'
		})
	}
	return resp.status(400).json({
		"errors": [
			{
			    "value": req.params.id,
			    "msg": "Property does not exist",
			    "param": "id",
			    "location": "body"
			}
		]
	})

})


module.exports = router