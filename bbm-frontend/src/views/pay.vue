<template>
    <div>
        付款页面

        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false
            }
        },
        mounted() {
            if (this.$route.name == "Pay") {
                this.$store.state.isDetail = true
            };
            console.log(this.$route.params)
        },
        methods: {
            onSubmit: function (buyInfos) {
                console.log(buyInfos)
            },
            onClickEditAddress: function (params) {

            }
        }
    }
</script>

<style>

</style>