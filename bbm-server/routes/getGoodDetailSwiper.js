var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
router.post('/:gid',async function(req, res, next) {
  let gid = req.params.gid;
  let getGoodDetailSwiper_str = "select swiper_img from good_detail_img where gid = ?"
  let getGoodDetailSwiper_res = await sqlQuery(getGoodDetailSwiper_str,[gid])
  res.json(getGoodDetailSwiper_res)
});

module.exports = router;
