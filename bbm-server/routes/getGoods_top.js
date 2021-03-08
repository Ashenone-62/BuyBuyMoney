var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
// 获取具体小类别的商品列表
router.get('/:goodsType',async function(req, res, next) {
    let type = req.params.goodsType;
    let getTopGoods_str = "";
    let getTopGoods_res = {};
    if(type == "hotSaling"){
        getTopGoods_str = "select * from goods ORDER BY salenum DESC"
    }
    if(type == "hotCommit"){
        getTopGoods_str = "select * from goods ORDER BY goodcommit DESC"
    }
    if(type == "new"){
        getTopGoods_str = "select * from goods ORDER BY saledate DESC"
    }
    if(type == "off"){
        getTopGoods_str = "select * from goods WHERE off NOT IN (1)"
    }
    if(type == "random"){
        getTopGoods_str = "select * from goods ORDER BY rand()"
    }
    if(type == "male"){
        getTopGoods_str = "select * from goods where gtype = 'maleColthes'"
    }
    if(type == "female"){
        getTopGoods_str = "select * from goods where gtype = 'femaleColthes'"
    }
    // 此处因改为判断tag
    if(type == "prime"){
        getTopGoods_str = "select * from goods where gtype = 'prime'"
    }
    if(type == "fresh"){
        getTopGoods_str = "select * from goods where gtype = 'fresh'"
    }
    if(type == "child"){
        getTopGoods_str = "select * from goods where gtype = 'child'"
    }
    getTopGoods_res = await sqlQuery(getTopGoods_str)
    res.json(getTopGoods_res)
});

module.exports = router;