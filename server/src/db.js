const mongoose = require('mongoose')

const URI = 'mongodb+srv://casinodb:ltkGos5ftdeBPAAL@cluster0.izujtoi.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	})
	.then(db => console.log('DB is connect'.green))
	.catch(err => console.log('Error en conectar con la DB'.red))

module.exports = mongoose
