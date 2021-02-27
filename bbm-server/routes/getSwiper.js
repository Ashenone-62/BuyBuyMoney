var express = require('express');
var router = express.Router();
var sqlQuery = require('../public/javascripts/SQL.js');

/* GET home page. */
router.get('/',async function(req, res, next) {
  let getSwiper_str = "select * from swiper"
  let getSwiper_res = await sqlQuery(getSwiper_str)
  res.json(getSwiper_res)
});

module.exports = router;