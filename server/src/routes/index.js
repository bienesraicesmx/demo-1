const express = require('express')
const { body, check, sanitizeBody, sanitizeQuery, validationResult } = require('express-validator');
const veryFyToken = require('../middlewares/newUser').veryFyToken
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/users')
const {comparePassword} = require('../middlewares/password_hashing')

// Login

router.post('/login', 
	[
		body('email').isEmail().normalizeEmail(), 
		sanitizeBody('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	//resp.set('Access-Control-Allow-Origin', '*')
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			response: "",
			error: "Parametro email invalido"
		});
	}

	const validUser = await User.findOne({"email":req.body.email})
	if(validUser){
		
		if(await comparePassword(req.body.password, validUser.password)){
			//req.session.email = req.body.email
			//req.session.admin = true;
			req.session.userID = validUser._id.toString();
			const payload = {
				check:  true,
				userID: validUser._id.toString()
			};
			const token = jwt.sign(payload, process.env.JWTKey, {
			
				expiresIn: process.env.JWTKeyExpire
			
			});
			resp.json({
				response: 'Autenticación correcta',
				error: false,
				jwt: token
			});

		}else{

			return resp.status(401).json({
				response: '',
				error: 'Password Invalido!'
			})	

		}
	}else{

		return resp.status(401).json({
			response: '',
			error: 'Email Invalido!'
		})

	}

})

//check JWT

router.post('/checkjwt', 
	[
		body('jwt').isLength({ min: 6 }),
		sanitizeBody('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	//resp.set('Access-Control-Allow-Origin', '*')
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			response: "",
			error: "Parametro jwt Invalido"
		});
	}

	jwt.verify(req.body.jwt, process.env.JWTKey, (err, decoded) => { 

		if (err) {
			return resp.json({ 
				"error": "Invalid Session",
				"response": ""
			}); 
		} 

		return resp.json({ 
			"error": false,
			"response": "Valid Session"
		}); 

	});

})

// Logout endpoint
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

router.get('/*', async (req, resp) => {
	resp.redirect('/');
})



module.exports = router