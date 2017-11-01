var express = require('express');
var router = express.Router();
var mysql =require("mysql");
var con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"666666",
    database:"item"
})

/* GET home page. */
router.post('/list', function(req, res, next) {
    var abc=req.body.id;
    res.header("Access-Control-Allow-Origin","*");
    con.query("SELECT * FROM class WHERE name LIKE '%"+abc+"%' OR sex LIKE '%"+abc+"%'",function (err,rows) {
        res.send(rows)
    })
});

module.exports = router;
