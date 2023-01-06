const mongoose = require('mongoose')

const { Schema } = mongoose

const PropertiesSchema = new Schema({
	title: { type: String, required: true }, 
    categorie: {
        type: Schema.Types.Mixed,
        ref: 'Category',
        required: true
    },
    gallery: {
        type: Schema.Types.Mixed,
        ref: 'Gallery',
        required: true
    },
    price : {
        type: Number,
        default:0
    },
    bano : {
        type: Number,
        default:0
    },
    rooms : {
        type: Number,
        default:0
    },
    estacionamiento : {
        type: Number,
        default:0
    },
	description: { type: String, required: true }, 
    owner: { type: String, required: false }, 
    location: { type: String, required: true }, 
    img: { type: String, required: true }, 
	_date: { type: String, required: true }, 
	hour: { type: String, required: true }, 
})

module.exports = mongoose.models.Properties || mongoose.model('Properties', PropertiesSchema);