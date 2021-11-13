import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Init App so we can use Express. (Now we can use different methods on the app instance.)
const app = express();

// BodyParser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// Enable cross origin requests.
app.use(cors());

// Connecting with application using express middleware
//app.use("/routename", function);

// Connection to the DB
const CONNECTION_URL = "mongodb+srv://Mark:3qEsCy06JOKX4hDYzLesNPoCa4T6R1uw@cluster0.tih4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Port is hardcoded for now. Once we connect to heroku, they will make the ENV variable 'PORT'.
const PORT = process.env.PORT || 5000;

// https://www.mongodb.com/cloud/atlas

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	// Return a promise if successful.
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	// Failed Connection, throw an error.
	.catch((error) => console.log(error.message));

mongoose.connect(CONNECTION_URL).then(() => {
	console.log("...");
});