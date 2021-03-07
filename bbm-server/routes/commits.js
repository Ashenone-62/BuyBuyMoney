var express = require('express');
const sqlQuery = require('../public/javascripts/SQL');
var router = express.Router();

/* GET home page. */
// 随机获取评论
router.get('/',async function(req, res, next) {
    let GetCommits_str = "select `commit`,avatar,gimg from (commit INNER JOIN users on commit.uid = users.uid) INNER JOIN goods ON commit.gid = goods.gid ORDER By rand() limit 3"
    let GetCommits_res = await sqlQuery(GetCommits_str)
    res.json(GetCommits_res)
});

module.exports = router;