const User = require('../models/users')
const config = require('../configs/config')
const jwt = require('jsonwebtoken')
const middlewares = {

    isLoggedIn : function (req, res, next) {
		if (req.session && req.session.email && req.session.admin){
			return next();
		}else{
			return res.sendStatus(401);
		}
    },

    veryFyToken : function (req, res, next){
	    const token = req.headers['access-token'];
	 
	    if (token) {
	      jwt.verify(token, config.llave, (err, decoded) => {      
	        if (err) {
	          return res.json({ mensaje: 'Token inválida' });    
	        } else {
	          req.decoded = decoded;    
	          next();
	        }
	      });
	    } else {
	      res.send({ 
	          mensaje: 'Token no proveída.' 
	      });
	    }
    },

    isSuperUser : function (req, res, next) {
        if (req.user.is_superuser) return next();
        res.redirect('/');
    },

    ValidUser : async function (req, res, next) {
		const validUser = await User.findOne({"email":req.query.email})
		if(validUser){
			return res.status(400).json({ 
			    "errors": [
			        {
			            "value": req.query.email,
			            "msg": "The value already exists",
			            "param": "email",
			            "location": "query"
			        }
			    ] 
			});
		}
		next()
    },    
    ValidId : async function (req, res, next) {
		const validIdUser = await User.findOne({"_id":req.query.id})
		if(!validIdUser){
			return res.status(400).json({ 
			    "errors": [
			        {
			            "value": req.query.email,
			            "msg": "User does not exist",
			            "param": "email",
			            "location": "query"
			        }
			    ] 
			});
		}
		next()
    },
};
module.exports = middlewares;