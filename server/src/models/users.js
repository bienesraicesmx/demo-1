const mongoose = require('mongoose')

const { Schema } = mongoose

const UsersSchema = new Schema({
	email: { type: String, required: true }, 
	password: { type: String, required: true }, 
	fecha: { type: String, required: true }, 
	hora: { type: String, required: true }, 
})


module.exports = mongoose.model('Users', UsersSchema)