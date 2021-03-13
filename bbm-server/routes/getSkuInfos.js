var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
router.post('/',async function(req, res, next) {
  let gid = req.body.gid
  let getSkuInfos_psku_str = "select psku from parent_sku where gid = ?"
  let getSkuInfos_psku_res = await sqlQuery(getSkuInfos_psku_str,[gid])

  let getSkuInfos_csku_str = "select psku,csku,cskuid,imgurl from child_sku where gid = ?"
  let getSkuInfos_csku_res = await sqlQuery(getSkuInfos_csku_str,[gid])

  let getSkuInfos_infos_str = "select combine,combineid,price,sotcknum from sku_info where gid = ?"
  let getSkuInfos_infos_res = await sqlQuery(getSkuInfos_infos_str,[gid])
  
  res.json({getSkuInfos_psku_res,getSkuInfos_csku_res,getSkuInfos_infos_res})
});

module.exports = router;
