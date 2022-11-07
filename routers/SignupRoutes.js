const express = require("express");
const router = express.Router();

router.get("/Register", (req, res) => {
	res.render("Signup");
});

router.post("/Register", (req, res) => {
	console.log(req.body);
	res.send("signed in");
});

module.exports = router;