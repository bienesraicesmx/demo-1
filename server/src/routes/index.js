const express = require('express')
const { body, check, sanitizeBody, sanitizeQuery, validationResult } = require('express-validator');
const veryFyToken = require('../middlewares/newUser').veryFyToken
const jwt = require('jsonwebtoken')
const config = require('../configs/config')
const router = express.Router()

const User = require('../models/users')

// Login

router.post('/login', 
	[
		check('email').isEmail().normalizeEmail(), 
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

	const validUser = await User.findOne({"email":req.query.email})
	if(validUser){
		if(req.query.password === validUser.password){
			req.session.email = req.query.email
			req.session.admin = true;
			const payload = {
				check:  true
			};
			const token = jwt.sign(payload, config.llave, {
			expiresIn: 180
			// 	//expiresIn: 1440
			});
			resp.json({
				mensaje: 'Autenticación correcta',
				data: req.session,
				jwt: token
			});
		}else{
			return resp.status(401).json({
				status: '401',
				message: 'Password Invalido!'
			})			
		}
	}else{
		return resp.status(401).json({
			status: '401',
			message: 'Email Invalido!'
		})
	}

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