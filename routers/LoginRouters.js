const express = require("express");
const router = express.Router();

router.get("/Sign", (req, res) => {
	res.render("register");
});

router.post("/Sign", (req, res) => {
	console.log(req.body);
	res.send("login");
});

module.exports = router;
