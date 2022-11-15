const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Registration = require("../models/User");

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
		const user = new Registration(req.body);
		console.log(user);
		let uniqueExist = await Registration.findOne({ UserID: req.body.UserID });
		if (uniqueExist) {
			return res.status(400).send("sorry this number is already taken");
		} else {
			await Registration.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/FO");
			});
		}
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});

router.get("/list", (req, res) => {
	res.render("FOlist");
});
router.post("/list", async (req, res) => {
	console.log(req.body);
	try {
		let farmerone = await Registration.find({ role: "Farmer one" });
		res.render("FOlist", { farmerone: farmerone });
	} catch (error) {
		res.status(400).send("Not found");
		console.log(error);
	}
});

module.exports = router;
// module.exports = mongoose.model("registration", userSchema);
