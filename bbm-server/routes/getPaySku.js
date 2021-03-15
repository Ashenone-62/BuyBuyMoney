var express = require('express');
var router = express.Router();
const sqlQuery = require('../public/javascripts/SQL');

/* GET home page. */
router.post('/',async function(req, res, next) {
  // let combineID = req.body.combineID
  let gid = req.body.gid

  let getPaySku_str = "select * from goods where gid = ?"
  let getPaySku_res = await sqlQuery(getPaySku_str,[gid])
  console.log(getPaySku_res)
});

module.exports = router;
