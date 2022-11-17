const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Registration = require("../models/User");

router.get("/OA", async (req, res) => {
	let farmerones = await Registration.find({ role: "Farmer one" });
	console.log(farmerones);
	res.render("AgricO", { farmerones: farmerones });
});

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
				res.redirect("/OA");
			});
		}
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});

router.get("/list", async (req, res) => {
	try {
		res.render("FOlist");
	} catch (error) {
		res.status(400).send("Not found");
		console.log(error);
	}
});

module.exports = router;
