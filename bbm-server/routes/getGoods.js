var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
router.get('/:goodsType',async function(req, res, next) {
    let type = req.params.goodsType;
    let getGoods_str = "select * from goods where gtype = ?"
    let getGoods_res = await sqlQuery(getGoods_str,[type])
    res.json(getGoods_res)
});

module.exports = router;
