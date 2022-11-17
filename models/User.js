const { text } = require("express");
const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
	role: {
		type: String,
		// required: true,
		trim: true,
	},
	Name1: {
		type: String,
		// required: true,
		trim: true,
	},
	Gender1: {
		type: String,
		// required: true,
	},
	Date1: {
		type: Date,
		// required: true,
	},
	Date2: {
		type: Date,
		// required: true,
	},
	Activities: {
		type: String,
		// required: true,
		trim: true,
	},
	phonenumber: {
		type: String,
		// required: true,
		trim: true,
	},
	Nin1: {
		type: String,
		// required: true,
		trim: true,
	},
	Ward1: {
		type: String,
		// required: true,
		trim: true,
	},
	Role1: {
		type: String,
		// required: true,
		trim: true,
	},
	UserID: {
		type: String,
		// required: true,
		trim: true,
	},
	password: {
		type: String,
		// required: true,
		trim: true,
	},
	// username: {
	// 	type: String,
	// 	// required: true,
	// 	trim: true,
	// },
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "UserID",
});

module.exports = mongoose.model("Registration", userSchema);
