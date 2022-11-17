const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const connectEnsureLogin = require('connect-ensure-login')
const UploadProductModel = require("../models/Upload");
const UserModel = require("../models/User");

//.................................image upload....................................
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/image");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

//........................... instantiate variable upload to store multer functionality to upload image

var upload = multer({ storage: storage });

router.get("/UB", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
	const urbanfarmer = req.user;
	// console.log(urbanfarmer);

	const ufProduce = await UploadProductModel.find({owner_name: req.session.user.Name1})

	console.log('this is the farmer produce', ufProduce)

	// console.log('this is the farmer produce', urbanFarmerList)
	res.render("Urban", {ufproduces: ufProduce});
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

module.exports = router;
