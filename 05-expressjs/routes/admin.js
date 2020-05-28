const express = require('express')

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  	console.log("In the middleware again!");
        res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product page</button></input></form>');
});

router.post("/add-product", (req, res, next) => {
        console.log(req.body)
        res.redirect('/')
});

module.exports = router;
