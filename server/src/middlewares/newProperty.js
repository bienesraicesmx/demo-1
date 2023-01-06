const Property = require('../models/Properties')
const jwt = require('jsonwebtoken')
const middlewares = {
  
    ValidId : async function (req, res, next) {
		const validIdProperty = await Property.findById(req.body.id)
		if(!validIdProperty){
			return res.status(400).json({ 
                "response":"",
			    "error": "Propiedad no existe"
			});
		}
		next()
    },

    isOwner : function (req, res, next) {

		const token = req.headers['bearer'];

		if (!token) {

			return res.json({ 
			    "error": "Invalid Session",
				"response": ""
			});

		}

		jwt.verify(token, process.env.JWTKey, async (err, decoded) => {      
			if (err) {
				return res.json({ 
					"error": "Invalid Session",
					"response": ""
				}); 
			} else {
				const validIdProperty = await Property.findById(req.body.id)
                if(!validIdProperty){
                    return res.json({ 
                        "response":"",
                        "error": "Propiedad no existe"
                    });
                }  
                if(validIdProperty.owner !== decoded.userID){
                    return res.json({ 
                        "response":"",
                        "error": "No eres el propietario"
                    });
                }
                
                next()

			}
		});

    },
};
module.exports = middlewares;