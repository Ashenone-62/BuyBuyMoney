<template>
    <div>
        <!--
    商品选取
    提交定单
     -->
        <div class="back" @click="goback">
            <van-icon name="arrow-left" />
        </div>
        <div class="location">
            <div class="currentLocation" v-if="!showLocation">
                <div v-if="showLocationDetail">
                    <span>当前买家：</span>
                    <span>{{location.name}}</span>
                </div>
                <div>
                    <span>当前地址：</span>
                    <span>{{location.address}}</span>
                </div>
                <div v-if="showLocationDetail">
                    <span>当前电话：</span>
                    <span>{{location.tel}}</span>
                </div>
            </div>
            <van-address-list v-if="showLocation" v-model="chosenAddressId" :list="list" default-tag-text="默认"
                @add="onAdd" @edit="onEdit" @click-item="LocationChecked" />
        </div>
        <div class="payInfo">
            <buy-car></buy-car>
        </div>
        <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                <span @click="onClickEditAddress">选择地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
import buyCar from '@/components/BuyCar.vue'
    import axios from 'axios'
    import {
        GetPaySku
    } from '@/assets/api/index.js'
    import {
        Toast
    } from 'vant';
    export default {
        data() {
            return {
                skuArr:[],
                checked: false,
                price: 0,
                showLocation: false,
                showLocationDetail: false,
                location: {
                    buyerName: "",
                    address: "还没选择地址哦",
                    phone: ""
                },
                chosenAddressId: '1',
                list: [{
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        isDefault: true,
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号',
                    },
                ]
            }
        },
        components:{
            buyCar
        },
        mounted() {
            if (this.$route.name == "Pay") {
                this.$store.state.isDetail = true
            };
            if (typeof this.$route.params.skuData == 'undefined') {
                Toast.fail('购物车信息已过期');
                this.$router.push({
                    path: "/Home",
                    name: "Home"
                })
                this.$store.state.isDetail = false
            } else {
                this.price = this.$route.params.skuData.selectedNum * this.$route.params.skuData.selectedSkuComb.price;
                                this.skuArr = this.$route.params.skuData_skuArr
                let gid = this.$route.params.skuData.goodsId
                // let combineID = this.$route.params.skuData.selectedSkuComb.id;
                axios.post(GetPaySku,{
                    // combineID,
                    gid
                })

            }
        },
        methods: {
            goback: function () {
                this.$router.push({
                    path: "/Home",
                    name: "Home"
                })
                this.$store.state.isDetail = false;
            },
            onSubmit: function (buyInfos) {
                console.log(buyInfos)
            },
            onClickEditAddress: function (params) {
                this.showLocation = true
            },
            onAdd: function () {
                Toast('新增地址');
            },
            onEdit: function (item, index) {
                Toast('编辑地址:' + index);
            },
            LocationChecked: function (item, index) {
                this.location = item
                this.showLocation = false
                this.showLocationDetail = true
                console.log(item, index)
            }
        }
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

    .currentLocation {
        display: flex;
        padding: 1vw;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0vh 2vw 2vh 2vw;
        width: 94vw;
        height: 120px;
        background-color: rgba(138, 138, 138, 0.178);
        box-shadow: 2px 3px 2px #663f3fb6;
    }

    .payInfo {
        display: flex;
        padding: 1vw;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0vh 2vw 18vh 2vw;
        width: 94vw;
        min-height: 150px;
        background-color: rgba(138, 138, 138, 0.178);
        border-radius: 2vw;
        box-shadow: 2px 3px 2px #663f3fb6;
    }
</style>