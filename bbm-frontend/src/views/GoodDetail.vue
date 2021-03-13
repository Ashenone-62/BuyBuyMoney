<template>
    <div>
        <div class="back" @click="goback">
            <van-icon name="arrow-left" />
        </div>
        <bbm-swiper :swiper="swiper_arr"></bbm-swiper>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star-o" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" @click="shiftSku" />
        </van-goods-action>

        <div class="infos">
            这是{{gid}}信息
        </div>

        <div class="content">
            <img src="" alt="">
            这是{{gid}}详情
        </div>

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
        GetGoodDetail,
        GetSkuInfos
    } from '@/assets/api/index.js'

    export default {
        components: {
            bbmSwiper
        },
        data() {
            return {
                gid: "",
                swiper_arr: [],
                sku_psku: [],
                sku_csku: [],
                sku_infos: [],
                sku: {
                    tree: [],
                    list: [],
                    //----------------------------------------待完成-------------------------------------------
                    price: '5.00', //？？
                    stock_num: 227, // 商品总库存？？
                    none_sku: false, // 是否无规格商品 false正常显示那些可供选择的标准，此处是颜色和尺寸
                    hide_stock: false, // 是否隐藏剩余库存 false正常显示剩余多少件的那个库存
                },
                goods_id: '946755',
                quota: 3, //限购数量 库存旁边显示限购数
                quota_used: 0, //已经购买过的数量 和下方的数字选择框显示不一样 与限购数量是相对应的 0数字选择框显示3   1 -- 2   2 -- 1  3 -- 0
                goods_info: {
                    picture: '' //图片这个我有点混乱
                },
                showBase: false, //sku的框的显示
                closeOnClickOverlay: true, //点击空白处关闭购物框
                initialSku: {
                    s1: '30349',
                    s2: '1193',
                    selectedNum: 1 //下面的数字选择框的数字即买了多少件
                },
                customSkuValidator: () => '请选择具体规格!' //？？
            }
        },
        async mounted() {
            this.gid = this.$route.params.goodNum;
            let getGoodDetailSwiper_res = await axios.get(GetGoodDetail + this.gid)
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
            shiftSku: async function () {
                this.showBase = !this.showBase
                if (this.showBase == true) {
                    let count = 1;
                    let GetSkuInfos_res = await axios.post(GetSkuInfos, {
                        gid: this.gid
                    })
                    this.sku_csku = GetSkuInfos_res.data.getSkuInfos_csku_res
                    this.sku_psku = GetSkuInfos_res.data.getSkuInfos_psku_res
                    this.sku_infos = GetSkuInfos_res.data.getSkuInfos_infos_res

                    for (let item_p of this.sku_psku) {
                        let pskuObj = {
                            k: item_p.psku,
                            v: [],
                            k_s: "s" + count,
                        }

                        count++

                        for (let item_c of this.sku_csku) {
                            let cskuObj = {
                                id: item_c.cskuid,
                                name: item_c.csku,
                                imgUrl: item_c.imgurl
                            }
                            if (item_p.psku == item_c.psku) {
                                pskuObj.v.push(cskuObj)
                            }
                        }
                        this.sku.tree.push(pskuObj)
                        this.goods_info.picture = this.sku_csku[0].imgurl
                        console.log(pskuObj)
                    }

                    for (let item_infos of this.sku_infos) {
                        let count = 1;
                        let combineArr = JSON.parse(item_infos.combine)
                        // console.log(item_infos)
                        let infosObj = {
                            id: item_infos.combineid,
                            price: item_infos.price,
                            stock_num: item_infos.sotcknum, //库存 
                            goods_id: this.gid,
                        }

                        for(let item_infos_aim of combineArr){
                            let infosIndex = 's'+ count;
                            count++
                            infosObj[infosIndex] = item_infos_aim
                        }

                        this.sku.list.push(infosObj)
                    }
                }
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

    .infos {
        margin: 0vh 3vw 2vh 3vw;
        width: 94vw;
        height: 150px;
        background-color: rgba(128, 128, 128, 0.418);
        border-radius: 4vw;
        box-shadow: 2px 3px 2px #663f3fb6;
    }

    .content {
        margin: 0vh 3vw 10vh 3vw;
        width: 94vw;
        height: 700px;
        background-color: rgba(128, 128, 128, 0.418);
        border-radius: 4vw;
        box-shadow: 2px 3px 2px #663f3fb6;

        img {
            border-radius: 4vw;
        }
    }
</style>