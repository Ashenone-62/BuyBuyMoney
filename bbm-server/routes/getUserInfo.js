var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
router.post('/',async function(req, res, next) {
    let username = req.body.username;
    let getUserInfo_str = "select * from users where username = ?"
    let getUserInfo_res = await sqlQuery(getUserInfo_str,[username])
    if(getUserInfo_res.length != 0){
        getUserInfo_res = Array.from(getUserInfo_res);
        res.json(getUserInfo_res[0])
    }else{
        res.json({
            state:0
        })
    }

});

module.exports = router;