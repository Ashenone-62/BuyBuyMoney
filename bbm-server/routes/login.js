var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var sqlQuery = require('../public/javascripts/SQL.js');

/* GET home page. */
// 登录
router.post('/',async function(req, res, next) {
    let userLogin = req.body;
    userLogin.password = md5Sait(userLogin.password);
    let userLogin_str = "select * from users where username = ? and password = ?"
    let userLogin_res = await sqlQuery(userLogin_str,[userLogin.username,userLogin.password])
    if(userLogin_res.length!=0){
        res.json({
            state:1
        })
    }else{
        res.json({
            state:0
        })
    }
});
// 加密
function md5Sait(str){
    let salt = "盗号死个妈"
    let md5Obj = crypto.createHash('md5')
    str = str + salt
    md5Obj.update(str);
    return md5Obj.digest('hex')
}

module.exports = router;
