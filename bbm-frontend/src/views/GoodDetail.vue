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
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
import bbmSwiper from '@/components/BBMSwiper.vue'
import axios from 'axios'
import {GetGoodDetail} from '@/assets/api/index.js'

    export default {
        components:{
            bbmSwiper
        },
        data() {
            return {
                gid: "",
                swiper_arr: [],
            }
        },
        async mounted() {
            this.gid = this.$route.params.goodNum;
            let getGoodDetailSwiper_res = await axios.post(GetGoodDetail+this.gid,this.gid)
            this.swiper_arr = getGoodDetailSwiper_res.data
        },
        methods: {
            // 返回
            goback: function () {
                this.$router.go(-1)
                this.$store.state.isDetail = false;
            }
        },
        //未解决刷新导航栏复现
    }
</script>

<style lang="scss" scoped>
    .back{
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