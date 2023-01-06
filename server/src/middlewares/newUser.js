const User = require('../models/users')
const jwt = require('jsonwebtoken')
const middlewares = {

    isLoggedIn : function (req, res, next) {

		const token = req.headers['bearer'];

		if (!token) {

			return res.json({ 
			    "error": "Invalid Session",
				"response": ""
			});

		}

		jwt.verify(token, process.env.JWTKey, (err, decoded) => {      
			if (err) {
				return res.json({ 
					"error": "Invalid Session",
					"response": ""
				}); 
			} else {
				return next();   
			}
		});

    },

	getUserID : async function (token) {

		let userID = ""

		await jwt.verify(token, process.env.JWTKey, (err, decoded) => {      
			userID = decoded.userID
		});

		return userID

    },

    veryFyToken : function (req, res){

	    const token = req.headers['bearer'];
	 
	    if (token) {
	      jwt.verify(token, process.env.JWTKey, (err, decoded) => {      
	        if (err) {
	          return { isOK: false };    
	        } else {
				return { isOK: false, info: decoded};    
	        }
	      });
	    } else {
			return { isOK: false }; 
	    }

    },

    isSuperUser : function (req, res, next) {
        if (req.user.is_superuser) return next();
        res.redirect('/');
    },

    ValidUser : async function (req, res, next) {
		const validUser = await User.findOne({"email":req.body.email})
		if(validUser){
			return res.status(400).json({ 
			    "errors": [
			        {
			            "value": req.body.email,
			            "msg": "The value already exists",
			            "param": "email",
			            "location": "body"
			        }
			    ] 
			});
		}
		next()
    },    
    ValidId : async function (req, res, next) {
		const validIdUser = await User.findOne({"_id":req.body.id})
		if(!validIdUser){
			return res.status(400).json({ 
			    "errors": [
			        {
			            "value": req.body.email,
			            "msg": "User does not exist",
			            "param": "email",
			            "location": "body"
			        }
			    ] 
			});
		}
		next()
    },
};
module.exports = middlewares;