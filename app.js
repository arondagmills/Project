const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
//.................express- Session..............//
const expressSession = require("express-session")({
	secret: "arondag",
	resave: false,
	saveUninitialized: false,
});

//...............import the user model...............
const Registration = require("./models/User");
const Uploading = require("./models/Upload");

//................... setup database connections..................//

mongoose
	.connect(`${config.database}`, { useNewUrlParser: true })
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err));

//.......................check connection.......................//

// db.once("open", function () {
// 	console.log("connected to database(M)");
// });

//.......................check for db errors...................//

// db.on("error", function (err) {
// 	console.error(err);
// });

// importing a route files//
const SignupRoutes = require("./routers/SignupRoutes");
const agricRouter = require("./routers/agricRouter");
const authRoutes = require("./routers/authRoutes");
const farmeroneRouters = require("./routers/farmeroneRouters");
const urbanRoutes = require("./routers/urbanRoutes");
const produceRouter = require("./routers/produceRouter");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//............midware...........
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use("/public/image", express.static(__dirname + "/public/image"));
app.use(expressSession);
app.use(express.json());

//...........installing passports.......configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());
// passport.use(FarmeroneRegistration.createStrategy());
// passport.serializeUser(FarmeroneRegistration.serializeUser());
// passport.deserializeUser(FarmeroneRegistration.deserializeUser());

// app.use(passport.authenticate("session"));
//........sending files............

app.use("/", SignupRoutes);
app.use("/", agricRouter);
app.use("/", authRoutes);
app.use("/", farmeroneRouters);
app.use("/", urbanRoutes);
app.use("/", produceRouter);

//...................routes........................//
app.get("/", (req, res) => {
	res.render("home");
});

// app.get("/FO", (req, res) => {
// 	res.render("farmerone");
// });

// app.get("/login", (req, res) => {
// 	res.render("Login");
// });

// app.get("/register", (req, res) => {
// 	res.render("Signup");
// });

// app.get("/OA", (req, res) => {
// 	res.render("AgricO");
// });
// app.get("/product", (req, res) => {
// 	res.render("productList");
// });
app.get("/about", (req, res) => {
	res.render("About_us");
});

app.get("/order", (req, res) => {
	res.render("bookingandorder");
});


// app.get("/UB", (req, res) => {
// 	res.render("Urban");
// });
app.get("/list", (req, res) => {
	res.render("FOlist");
});

app.get("/val", (req, res) => {
	res.render("form");
});
//...................how  to send files....................//

// app.get("/Signup", (req, res) => {
// 	res.sendFile(__dirname + "/views/Signup");
// });
// app.post("/Signup", (req, res) => {
// 	console.log(req.body);
// 	res.redirect("/");
// });

app.listen(1000, () => console.log("connected"));
