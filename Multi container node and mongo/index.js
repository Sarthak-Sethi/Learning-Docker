// importing mongoose required for mongodb connectivity
const mongoose = require("mongoose")
// string for DATABASE which is passed to connect function of mongoose
const DATABASE = "mongodb+srv://dbUser:Mongodocker@cluster0.yuaru.mongodb.net/sample_restaurants?retryWrites=true&w=majority"
// to connect to mongdb inbuilt function connect is used
// There can be two possibilty
//  1 we are succesfully able to connect , what to do in this case is written in then
//  2 we encounter an error . what to do in this case is written in catch
mongoose.connect(DATABASE)
	.then(() => {
	console.log("DB CONNECTED !!");
	}).catch(() => {
	console.log("unsble to connect ");
	})
