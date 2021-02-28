// 接口文件
const apiRootUrl = 'http://localhost:3000/api/';

module.exports = {
    Register: apiRootUrl + 'register',  //注册接口
    GetUserInfo: apiRootUrl + 'getUserInfo', //注册获取登录用户信息接口
    Login: apiRootUrl + 'login',    //登录接口
    GetSwiper: apiRootUrl + 'getSwiper', //获取轮播图接口
    GetGoodsType: apiRootUrl + 'goodsType', //获取商品小类别接口
    GetGoods: apiRootUrl + 'goods/',    //获取小类别的商品接口
}