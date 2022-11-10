const express = require("express");
const router = express.Router();
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
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "UserID",
});

router.get("/OA", (req, res) => {
	res.render("AgricO");
});

// router.post("/OA", async (req, res) => {
// 	const AgricO = await UsersModel(req.body);
// 	res.send("register is done");
// });
router.post("/OA", async (req, res) => {
	// console.log(req.body);
	try {
		const user = new Registration (req.body);
		console.log(user);
		await Registration.register(user, req.body.password, (error) => {
			if (error) {
				throw error;
			}
			res.redirect("/FO");
		});
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});

module.exports = router;
// module.exports = mongoose.model("registration", userSchema);