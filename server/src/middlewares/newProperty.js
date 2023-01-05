const Property = require('../models/Properties')
const middlewares = {
  
    ValidId : async function (req, res, next) {
		const validIdProperty = await Property.findOne({"_id":req.query.id})
		if(!validIdProperty){
			return res.status(400).json({ 
			    "errors": [
			        {
			            "value": req.query.id,
			            "msg": "Property does not exist",
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