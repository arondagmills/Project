const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UploadProductModel = require("../models/Upload");
const UserModel = require("../models/User");

router.get("/uploads", (req, res) => {
	res.console.log(req.body);
});
router.post("/uploads", connectEnsureLogin.ensureLoggedIn(), upload.single("image"), async(req, res) => {
	req.session.user = req.user
	console.log(req.session.user)

	// res.send('This works');
	try {
		const uploadProduct = UploadProductModel(req.body);

		uploadProduct.image = req.file.path;
		// console.log('This is the uploaded', uploadProduct)

		uploadProduct.owner = req.session.user._id,

		uploadProduct.owner_name = req.session.user.Name1

		console.log(uploadProduct)


		await uploadProduct.save();
	
		res.redirect("/UB");
	} catch (error) {
		res.status(400).send("you registration has failed");
		console.log(error);
	}
});