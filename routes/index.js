const express = require('express');
const router  = express.Router();
const mailer = require("../helpers/mailer");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('form');
});
router.post("/", (req, res) => {
  const options = req.body;
  options.filename = "verify",
  mailer.send(options)
  .then(() => {
    res.status(200).send("el corre se ha enviadow")
  })
  .catch(err =>{
    console.log("algo salio mal", err);
    res.status(500).json({err, "msg": "algo"})
    })
})

module.exports = router;