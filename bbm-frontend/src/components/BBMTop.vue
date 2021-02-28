<template>
<!-- 首页快捷导航按钮群 -->
    <div class="TopGrid">
        <div class="topSale specialBtn">
            <van-icon name="fire" />
            热卖榜
        </div>
        <div class="topCommit specialBtn">
            <van-icon name="comment" />
            热评榜
        </div>
        <div class="new basicBtn">
            <van-icon name="gem" />
            新奇
        </div>
        <div class="off basicBtn">
            <van-icon name="gold-coin" />
            骨折
        </div>
        <div class="random basicBtn">
            <van-icon name="cluster" />
            随机
        </div>
        <div class="male basicBtn">
            <van-icon name="manager" />
            男装
        </div>
        <div class="female basicBtn">
            <van-icon name="bag" />
            女装
        </div>
        <div class="outer basicBtn">
            <van-icon name="cart" />
            进口
        </div>
        <div class="fresh basicBtn">
            <van-icon name="thumb-circle" />
            生鲜
        </div>
        <div class="kid basicBtn">
            <van-icon name="smile" />
            儿童
        </div>
    </div>
</template>

<script>
    export default {

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