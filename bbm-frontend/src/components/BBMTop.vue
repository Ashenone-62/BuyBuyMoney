<template>
<!-- 首页快捷导航按钮群 -->
    <div class="TopGrid">
        <div class="topSale specialBtn" @click="enterType($event)" id="hotSaling">
            <van-icon name="fire" />
            热卖榜
        </div>
        <div class="topCommit specialBtn" @click="enterType($event)" id="hotCommit">
            <van-icon name="comment" />
            热评榜
        </div>
        <div class="new basicBtn" @click="enterType($event)" id="new">
            <van-icon name="gem" />
            新奇
        </div>
        <div class="off basicBtn" @click="enterType($event)" id="off">
            <van-icon name="gold-coin" />
            骨折
        </div>
        <div class="random basicBtn" @click="enterType($event)" id="random">
            <van-icon name="cluster" />
            随机
        </div>
        <div class="male basicBtn" @click="enterType($event)" id="male">
            <van-icon name="manager" />
            男装
        </div>
        <div class="female basicBtn" @click="enterType($event)" id="female">
            <van-icon name="bag" />
            女装
        </div>
        <div class="outer basicBtn" @click="enterType($event)" id="prime">
            <van-icon name="cart" />
            进口
        </div>
        <div class="fresh basicBtn" @click="enterType($event)" id="fresh">
            <van-icon name="thumb-circle" />
            生鲜
        </div>
        <div class="kid basicBtn" @click="enterType($event)" id="child">
            <van-icon name="smile" />
            儿童
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            enterType:function(event) {
                this.$router.push("/hotBtn/"+event.target.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .TopGrid {
        display: flex;
        flex-wrap: wrap;
        margin: 4vh 5vw 2vh 5vw;
        width: 90vw;
        justify-content: space-between;

        div {
            margin: 0.5vh;
            border-radius: 4vw;
            box-shadow: 1px 2px 4px #663f3fde;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .specialBtn {
            width: 48%;
            height: 15vh;
            color:#ec4646;
        }

        .basicBtn {
            width: 23%;
            height: 8vh;    
            color: rgb(105, 105, 105);
        }
    }
</style>