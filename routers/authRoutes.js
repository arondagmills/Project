const express = require("express");
const router = express.Router();
const passport = require("passport");

const UsersModel = require("../models/User");

router.get("/Sign", async(req, res) => {
	// const user = await UsersModel(req.render(req.body));
	req.render("register");
});
router.post(
	"/Sign",
	passport.authenticate("local", { failureRedirect: "/Sign", failureMessage: true }),
	(req, res) => {
		req.session.user = req.user;
		if (req.user.role === "Urban farmer") {
			res.redirect("/UB");
		} else if (req.user.role === "Farmer one") {
			res.redirect("/FO");
		} else if (req.user.role === "Agriculture Office") {
			req.redirect("/OA");
		} else if (req.user.role === "user") {
			req.redirect("/");
		}
	}
);
module.exports = router;
