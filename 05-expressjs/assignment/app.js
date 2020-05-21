const express = require("express")

const app = express();

app.use((req, res, next) => {
	console.log('This is middleware for my assignment');
	next();
});

app.use((req, res, next) => {
	console.log('This is middleware for my assignment');
});




app.listen(3000);

