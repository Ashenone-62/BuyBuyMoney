<template>
<!-- 分类组件，呈现形式如：
    -男装
     -男衣
     -男裤
     -男鞋
 -->
    <div>
        <van-tabs v-model="activeKey" class="listBtn">
            <van-tab title="男装" to="/category/0">
                <div v-if="activeKey==0" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="女装" to="/category/1">
                <div v-if="activeKey==1" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="科技" to="/category/2">
                <div v-if="activeKey==2" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="生活" to="/category/3">
                <div v-if="activeKey==3" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="数码" to="/category/4">
                <div v-if="activeKey==4" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="食品" to="/category/5">
                <div v-if="activeKey==5" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="二手" to="/category/6">
                <div v-if="activeKey==6" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="新奇" to="/category/7">
                <div v-if="activeKey==7" class="typeContent">
                    <div class="typeItem" v-for="(item,index) in goodsType" :key="index"
                        @click="goGoodsList(item.g0_url)">
                        <div class="themeImg">
                            <img :src="item.g0_img" alt="">
                        </div>
                        <div class="typeName">
                            {{item.g0_name}}
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import axios from 'axios'
    import {
        GetGoodsType
    } from '@/assets/api/index.js'

    export default {
        //  activeKey: 当前选中的大类别，如男装
        //  goodsType: 根据大类别请求到具体小类别，如男衣，男裤
        data() {
            return {
                activeKey: 0,
                goodsType: []
            }
        },
        //在挂载时请求小类别
        async mounted() {
            let getGoodsType_res = await axios.get(GetGoodsType + "/" + this.activeKey);
            this.goodsType = getGoodsType_res.data
        },
        //监听activeKey变化，有变化时就请求对应的内容
        watch: {
            async activeKey() {
                let getGoodsType_res = await axios.get(GetGoodsType + "/" + this.activeKey);
                this.goodsType = getGoodsType_res.data
            }
        },
        methods:{
            //当小类别被点击时，跳转到对应内容的具体商品列表
            goGoodsList:function(type){
                this.$router.push("/goodsList/"+type)
            }
        }
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