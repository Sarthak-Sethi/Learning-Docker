const express = require("express");
const app = express();

app.get("/",(req,res) => {
	res.json( {
		messge:"Json value"
	});
});

app.listen(8000,() => {
	console.log("App is running ...... ")
});
