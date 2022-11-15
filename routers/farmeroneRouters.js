const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Registration = require("../models/User");

router.get("/FO", (req, res) => {
	res.render("farmerone");
});

// router.post("/OA", async (req, res) => {
// 	const AgricO = await UsersModel(req.body);
// 	res.send("register is done");
// });
router.post("/FO", async (req, res) => {
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
				res.redirect("/UB");
			});
		}
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});

module.exports = router;
