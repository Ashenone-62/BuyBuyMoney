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
            <div class="price">
                ￥{{min_price}}起
            </div>
            <div class="title">{{title}}</div>
            <div class="area">{{area}}</div>
            <div class="offPaper">
                <!-- 优惠券单元格 -->
                <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
                <!-- 优惠券列表 -->
                <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
                    <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange" />
                </van-popup>
            </div>
        </div>

        <div class="content">
            <img src="" alt="">
            这是{{gid}}详情为94vw宽，700px的一张长图
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

    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
    };

    export default {
        components: {
            bbmSwiper
        },
        data() {
            return {
                chosenCoupon: -1,
                coupons: [coupon],
                showList:false,
                disabledCoupons: [coupon],

                gid: "",
                title: "",
                area: "",
                
                min_price: "",
                swiper_arr: [],
                sku_psku: [],
                sku_csku: [],
                sku_infos: [],
                sku: {
                    tree: [],
                    list: [],
                    price: '',
                    stock_num: 0,
                    none_sku: false,
                    hide_stock: false,
                },
                goods_id: '',
                quota: 10,
                quota_used: 0,
                goods_info: {
                    picture: ''
                },
                showBase: false,
                closeOnClickOverlay: true,
                initialSku: {},
                customSkuValidator: () => '请选择具体规格!'
            }
        },
        async mounted() {
            this.gid = this.$route.params.goodNum;
            this.title = this.$route.params.title;
            this.area = this.$route.params.area;
            console.log(this.$route.params)
            this.goods_id = this.gid
            let getGoodDetailSwiper_res = await axios.get(GetGoodDetail + this.gid)
            this.swiper_arr = getGoodDetailSwiper_res.data
            if (this.$route.name == "GoodDetail") {
                this.$store.state.isDetail = true
            };
            let GetSkuInfos_res = await axios.post(GetSkuInfos, {
                gid: this.gid
            })
            this.sku_csku = GetSkuInfos_res.data.getSkuInfos_csku_res
            this.sku_psku = GetSkuInfos_res.data.getSkuInfos_psku_res
            this.sku_infos = GetSkuInfos_res.data.getSkuInfos_infos_res
            this.min_price = this.sku_infos[0].price / 100
        },
        methods: {
            // 返回
            goback: function () {
                this.$router.go(-1)
                this.$store.state.isDetail = false;
            },
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            onBuyClicked: function (params) {

            },
            onAddCartClicked: function (params) {

            },
            shiftSku: async function () {
                this.showBase = !this.showBase
                if (this.showBase == true) {
                    let timeCount = 0;
                    let count = 1;


                    let initDefaultChoose = {
                        selectedNum: 1,
                    };
                    this.sku.price = this.sku_infos[0].price / 100

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
                    }

                    for (let item_infos of this.sku_infos) {
                        this.sku.stock_num += item_infos.sotcknum;
                        count = 1;

                        let combineArr = JSON.parse(item_infos.combine)
                        let infosObj = {
                            id: item_infos.combineid,
                            price: item_infos.price,
                            stock_num: item_infos.sotcknum,
                            goods_id: this.gid,
                        }

                        for (let item_infos_aim of combineArr) {
                            let infosIndex = 's' + count;
                            count++
                            if (timeCount == 0) {
                                initDefaultChoose[infosIndex] = "" + item_infos_aim
                            }
                            infosObj[infosIndex] = item_infos_aim
                        }
                        this.sku.list.push(infosObj)
                        timeCount++
                    }
                    this.initialSku = initDefaultChoose
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