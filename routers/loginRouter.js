const express = require("express");
const router = express.Router();

//.....................importing mode.................
const Registration = require("../models/User");

router.get("/login", (req, res) => {
	res.render("Login");
});

router.post("/login", async (req, res) => {
	console.log(req.body);
	try {
		const user = new Registration(req.body);
		console.log(user);
		await Registration.register(user, req.body.password, (error) => {
			if (error) {
				throw error;
			}
			res.redirect("/home");
		});
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});

module.exports = router;
