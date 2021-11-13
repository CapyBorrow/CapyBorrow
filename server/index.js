import express from "express";
// import bodyParser from "body-parser";
import authRoutes from './routes/auth.js';
import petFinderRoutes from "./routes/animals.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from 'passport';
import './passport-setup.js';
// Init App so we can use Express. (Now we can use different methods on the app instance.)
const app = express();

app.use(express.json());

app.use(
	cookieSession({
		maxAge: 1000 * 60 * 60 * 24 * 7,
		keys: [process.env.COOKIE_KEY],
	})
);
app.use(passport.initialize());
app.use(passport.session());
// // BodyParser
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// Enable cross origin requests.

app.use(cors());

app.get('/home', (req, res) => {
	res.send("You have logged in with google.")
})
// Connecting with application using express middleware
//app.use("/routename", function);

// Connection to the DB
const CONNECTION_URI = "mongodb+srv://Mark:3qEsCy06JOKX4hDYzLesNPoCa4T6R1uw@cluster0.tih4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Port is hardcoded for now. Once we connect to heroku, they will make the ENV variable 'PORT'.
const PORT = process.env.PORT || 6868;

// https://www.mongodb.com/cloud/atlas


mongoose
	.connect(CONNECTION_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((x) => {
		console.log("connected to mongo!");
	})
	.catch((err) => {
		console.log("An error occurred connecting to mongo.", err);
	});

//ROUTES:
app.use("/auth", authRoutes);
app,use("/pets",petFinderRoutes)
app.listen(PORT, () => console.log("Listening on PORT:", PORT));

