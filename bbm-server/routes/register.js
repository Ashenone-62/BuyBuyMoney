var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var sqlQuery = require('../public/javascripts/SQL.js');

/* GET home page. */
// 注册
router.post('/',async function(req, res, next) {
    let registerObj = req.body;
    registerObj.password = md5Sait(registerObj.password);
    let avatar = "https://s3.ax1x.com/2021/02/06/yYBsje.png"
    let uid = "";
    for(var i = 1;i <= 8;i++){
        const num = Math.floor(Math.random()*10);
        uid += num;
    }
    uid = parseInt(uid)
    let hasUser_str = "select uid from users where username = ?"
    let hasUser_res = await sqlQuery(hasUser_str,[registerObj.username])
    if(hasUser_res.length != 0){
        res.json({
            state: 0
        })
    }else{
        let insertUser_str = "insert into users (uid,username,password,email,phone,avatar) values (?,?,?,?,?,?)"
        await sqlQuery(insertUser_str,[uid,registerObj.username,registerObj.password,registerObj.email,registerObj.phone,avatar]),
        req.session.username = registerObj.username;
        res.json({
            state: 1
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