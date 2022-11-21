const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UpdatingList = require("../models/Upload");
const UserModel = require("../models/User");
const connectEnsureLogin = require('connect-ensure-login')

router.get("/product", async (req, res) => {
	const urbanfarmer = req.user;
	// console.log(urbanfarmer);

	const listProduct = await UpdatingList.find();
	console.log('this is the farmer produce', listProduct)
	res.render("productList", { listProducts: listProduct });
});

router.post(
	"/uploadsList",
	connectEnsureLogin.ensureLoggedIn(),
	async (req, res) => {
		req.session.user = req.user;
		console.log(req.session.user);

		// res.send('This works');
		try {
			const customerList = UpdatingList(req.body);

			customerList.image = req.file.path;
			// console.log('This is the uploaded', uploadProduct)

			(customerList.owner = req.session.user._id),
				(customerList.owner_name = req.session.user.Name1);

			console.log(customerList);

			await customerList.save();

			res.redirect("/product");
		} catch (error) {
			res.status(400).send("you registration has failed");
			console.log(error);
		}
	}
);


// router.post('/update_urbanfarmer', async (req,res) => {
// 	const produceById = await UpdatingList.findById({_id: req.body.urbanfarmerID})

// 	produceById.status = 'approved'

// 	produceById.save();

// 	res.redirect('/product')
// })


module.exports = router;
