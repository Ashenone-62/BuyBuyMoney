<template>
<!-- 轮播图组件 -->
    <van-swipe class="my-swipe" :class="{notHome:isHome == false}" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiper" :key="index">
            <img :src="item.swiper_img" alt="">
            <div class="goodInfos" v-if="isHome==true">
                <h4>{{item.swiper_name}}</h4>
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        // props
        // swiper -由父组件Home请求的轮播图片
        data(){
            return {
                isHome:true
            }
        },  
        props:["swiper"],
        mounted(){
            if (this.$route.params.goodNum) {
                this.isHome = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notHome{
        margin: 5vh 5vw 2vh 5vw !important; 
    }

    .my-swipe {
        margin: 12vh 5vw 2vh 5vw;
        width: 90vw;
        height: 30vh;
        border-radius: 4vw;
        box-shadow: 2px 3px 2px #663f3fb6;

        .van-swipe-item {
            position: relative;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }

            .goodInfos {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                position: absolute;
                width: 100%;
                height: 20%;
                bottom: 0;
                color: rgb(61, 57, 57);
                background-color: #ffffff98;

                h4 {
                    display: block;
                    margin-left: 1vh;
                }
            }
            .goodInfos:hover{
                transition: 1s;
            }
        }
    }
</style>