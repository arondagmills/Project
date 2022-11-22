const { text } = require("express");
const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const uploadSchema = new mongoose.Schema({
	productName: {
		type: String,
		// required: true,
		trim: true
	},
	// Name1: {
	// 	type: String,
	// 	// required: true,
	// 	trim: true,
	// },
	date: {
		type: Date
		// required: true,
	},
	Produce: {
		type: String,
		trim: true
		// required: true,
	},
	modeOfPayment: {
		type: String,
		// required: true,
		trim: true
	},
	delivery: {
		type: String,
		// required: true,
		trim: true
	},
	quantity: {
		type: Number,
		// required: true,
		trim: true
	},
	ward: {
		type: String,
		// required: true,
		trim: true
	},
	image: {
		type: String,
		// required: true,
		// trim: true,
	},
	direction: {
		type: String,
		// required: true,
		trim: true
	},
	price: {
		type: Number,
		// required: true,
		trim: true
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'Registration'
	},
	owner_name: {
		type: String
	}, 
	status: {
		type: String,
		default: "pending"
	},
	// availability: {
	// 	type: 
	// }
});

module.exports = mongoose.model("farmer_produce", uploadSchema);
