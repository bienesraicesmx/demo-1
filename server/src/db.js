const mongoose = require('mongoose')

const URI = process.env.mongoDBuri

mongoose.connect(URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	})
	.then(db => console.log('DB is connect'.green))
	.catch(err => console.log('Error en conectar con la DB'.red))

module.exports = mongoose
