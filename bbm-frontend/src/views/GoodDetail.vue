<template>
    <div>
        <div class="back" @click="goback">
            <van-icon name="arrow-left" />
        </div>
        <bbm-swiper :swiper="swiper_arr"></bbm-swiper>
        这是{{gid}}详情页
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star-o" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" @click="shiftSku" />
        </van-goods-action>

        <van-sku v-model="showBase" :sku="sku" :goods="goods_info" :goods-id="goods_id" :hide-stock="sku.hide_stock"
            :quota="quota" :quota-used="quota_used" :initial-sku="initialSku" reset-stepper-on-hide
            reset-selected-sku-on-hide disable-stepper-input :close-on-click-overlay="closeOnClickOverlay"
            :custom-sku-validator="customSkuValidator" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />

    </div>
</template>

<script>
    import bbmSwiper from '@/components/BBMSwiper.vue'
    import axios from 'axios'
    import {
        GetGoodDetail
    } from '@/assets/api/index.js'

    export default {
        components: {
            bbmSwiper
        },
        data() {
            return {
                gid: "",
                swiper_arr: [],
                sku: {
                    tree: [{
                            k: '颜色',
                            k_id: '1',
                            v: [{
                                    id: '30349',
                                    name: '天蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'
                                },
                                {
                                    id: '1215',
                                    name: '白色',
                                    imgUrl: 'https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                }
                            ],
                            k_s: 's1',
                            count: 2
                        },
                        {
                            k: '尺寸',
                            k_id: '2',
                            v: [{
                                    id: '1193',
                                    name: '1'
                                },
                                {
                                    id: '1194',
                                    name: '2'
                                }
                            ],
                            k_s: 's2',
                            count: 2
                        }
                    ],
                    list: [{
                            id: 2259,
                            price: 120, //价格
                            discount: 122,
                            s1: '1215',
                            s2: '1193',
                            stock_num: 20, //库存 
                            goods_id: 946755
                        },
                        {
                            id: 2260,
                            price: 110,
                            discount: 112,
                            s1: '1215',
                            s2: '1194',
                            stock_num: 2, //库存 
                            goods_id: 946755
                        },
                        {
                            id: 2257,
                            price: 130,
                            discount: 132,
                            s1: '30349',
                            s2: '1193',
                            stock_num: 40, //库存 
                            goods_id: 946755
                        },
                        {
                            id: 2258,
                            price: 100,
                            discount: 100,
                            s1: '30349',
                            s2: '1194',
                            stock_num: 50, //库存 
                            goods_id: 946755
                        }
                    ],
                    price: '5.00', //？？
                    stock_num: 227, // 商品总库存？？
                    none_sku: false, // 是否无规格商品 false正常显示那些可供选择的标准，此处是颜色和尺寸
                    hide_stock: false, // 是否隐藏剩余库存 false正常显示剩余多少件的那个库存
                },
                goods_id: '946755',
                quota: 3, //限购数量 库存旁边显示限购数
                quota_used: 0, //已经购买过的数量 和下方的数字选择框显示不一样 与限购数量是相对应的 0数字选择框显示3   1 -- 2   2 -- 1  3 -- 0
                goods_info: {
                    picture: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg' //图片这个我有点混乱
                },
                showBase: false, //sku的框的显示
                closeOnClickOverlay: true, //点击空白处关闭购物框
                initialSku: {
                    s1: '30349',
                    s2: '1193',
                    selectedNum: 1 //下面的数字选择框的数字即买了多少件
                },
                customSkuValidator: () => '请选择xxx!' //？？
            }
        },
        async mounted() {
            this.gid = this.$route.params.goodNum;
            let getGoodDetailSwiper_res = await axios.post(GetGoodDetail + this.gid, this.gid)
            this.swiper_arr = getGoodDetailSwiper_res.data
            if (this.$route.name == "GoodDetail") {
                this.$store.state.isDetail = true
            }
        },
        methods: {
            // 返回
            goback: function () {
                this.$router.go(-1)
                this.$store.state.isDetail = false;
            },
            onBuyClicked: function (params) {

            },
            onAddCartClicked: function (params) {

            },
            shiftSku: function () {
                this.showBase = !this.showBase
            }

        },
    }
</script>

<style lang="scss" scoped>
    .back {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        box-shadow: 2px 3px 3px #8b8b8b;
        margin-bottom: 4vh;
    }
</style>