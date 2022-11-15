const express = require("express");
const router = express.Router();
const passport = require("passport");

const UsersModel = require("../models/User");

router.get("/login", async (req, res) => {
	// const user = await UsersModel(res.render(req.body));
	res.render("Login");
});
router.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login", failureMessage: true }),
	(req, res) => {
		req.session.user = req.user;
		if (req.user.role == "Urban farmer") {
			res.redirect("/UB");
		} else if (req.user.role == "Farmer one") {
			res.redirect("/FO");
		} else if (req.user.role == "Agriculture Officer") {
			res.redirect("/OA");
		} else if (req.user.role == "user") {
			req.redirect("/");
		} else {
			res.send("you not registered");
		}
	}
);
module.exports = router;
