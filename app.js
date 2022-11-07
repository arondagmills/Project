const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// importing a route files//
const SignupRoutes = require("./routers/SignupRoutes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//............midware...........
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
// app.use("/public/uploads, express.static(__dirname + "/public/uploads"));
// app.use(express.json());
//........sending files............

app.use("/user", SignupRoutes);

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/FO", (req, res) => {
	res.render("farmerone");
});

app.get("/login", (req, res) => {
	res.render("register");
});

app.get("/register", (req, res) => {
	res.render("Signup");
});

app.get("/OA", (req, res) => {
	res.render("AgricO");
});

app.get("/UB", (req, res) => {
	res.render("Urban");
});
app.listen(1000, () => console.log("connected"));
