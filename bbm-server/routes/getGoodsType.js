var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
// 获取具体小类别
router.get('/:type',async function(req, res, next) {
    let type = req.params.type;
    let getGoodsType_str = "select * from goods" + type;
    let getGoodsType_res = await sqlQuery(getGoodsType_str)
    res.json(getGoodsType_res)
});

module.exports = router;