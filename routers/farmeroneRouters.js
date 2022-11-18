const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const connectEnsureLogin = require('connect-ensure-login')

const Registration = require("../models/User");
const UploadProductModel = require("../models/Upload");

// router.get("/FO", (req, res) => {
	router.get("/FO", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
		const urbanfarmer = req.user;
		// console.log(urbanfarmer);
	
		const ufProduce = await UploadProductModel.find({})

	
		console.log('this is the farmer produce', ufProduce)
	
		// console.log('this is the farmer produce', urbanFarmerList)
		res.render("farmerone", {ufproduces: ufProduce});
	});
		// res.render("farmerone");
// });

router.post("/uploads", connectEnsureLogin.ensureLoggedIn(),  async(req, res) => {
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

router.post('/update_urbanfarmer', async (req,res) => {
	const produceById = await UploadProductModel.findById({_id: req.body.urbanfarmerID})

	produceById.status = 'approved'

	produceById.save();

	res.redirect('/FO')
})


// router.post("/FO", async (req, res) => {
// 	// console.log(req.body);
// 	try {
// 		const user = new Registration(req.body);
// 		console.log(user);
// 		let uniqueExist = await Registration.findOne({ UserID: req.body.UserID });
// 		if (uniqueExist) {
// 			return res.status(400).send("sorry this number is already taken");
// 		} else {
// 			await Registration.register(user, req.body.password, (error) => {
// 				if (error) {
// 					throw error;
// 				}
// 				res.redirect("/FO");
// 			});
// 		}
// 	} catch (error) {
// 		res.status(400).send("you registration has failed");
// 		console.log(error);
// 	}
// });

module.exports = router;
