<template>
    <div>
        <van-tabs v-model="activeKey" class="listBtn">
            <van-tab title="男装" to="/category/0">
                <div v-if="activeKey==0" class="typeContent">
                        <div class="typeItem">
                            <div class="themeImg">
                                <img src="@/assets/img/good.jpg"
                                    alt="">
                            </div>
                            <div class="typeName">
                                衣服
                            </div>
                        </div>
                        <div class="typeItem">
                            <div class="themeImg">
                                <img src="@/assets/img/good.jpg"
                                    alt="">
                            </div>
                            <div class="typeName">
                                鞋子
                            </div>
                        </div>
                        <div class="typeItem">
                            <div class="themeImg">
                                <img src="@/assets/img/good.jpg"
                                    alt="">
                            </div>
                            <div class="typeName">
                                裤子
                            </div>
                        </div>
                        <div class="typeItem">
                            <div class="themeImg">
                                <img src="@/assets/img/good.jpg"
                                    alt="">
                            </div>
                            <div class="typeName">
                                帽子
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="女装" to="/category/1">
                <div v-if="activeKey==1" class="typeContent">
                    <div class="typeItem">
                        <div class="themeImg">
                            <img src="@/assets/img/good.jpg"
                                alt="">
                        </div>
                        <div class="typeName">
                            精品2
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="科技" to="/category/2">科技</van-tab>
            <van-tab title="生活" to="/category/3">生活</van-tab>
            <van-tab title="数码" to="/category/4">科技</van-tab>
            <van-tab title="食品" to="/category/5">食品</van-tab>
            <van-tab title="二手" to="/category/6">二手</van-tab>
            <van-tab title="新奇" to="/category/7">新奇</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeKey: 0
            }
        },
    }
</script>

<style lang="scss" scoped>
    .listBtn {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 80vh;
    }

    .typeContent {
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
        justify-content: space-between;
        padding: 10px;

        .typeItem {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 4vw;
            box-shadow: 1px 2px 4px #663f3fde;
            .themeImg {
                width: 100px;
                height: 90px;
                border-radius: 4vw 4vw 0 0;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 4vw 4vw 0 0;
                }
            }

            .typeName {
                color: rgb(73, 73, 73);
            }
        }
    }
</style>