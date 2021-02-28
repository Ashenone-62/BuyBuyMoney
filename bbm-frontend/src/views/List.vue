<template>
    <div>
        <div class="back" @click="goback">
            <van-icon name="arrow-left" />
        </div>
        <list-filter :goodsList="goodsList"></list-filter>
        <current-list :goodsList="goodsList"></current-list>
    </div>
</template>

<script>
import listFilter from '@/components/ListFilter.vue'
import currentList from '@/components/CurrentList.vue'
import axios from 'axios'
import {GetGoods} from '@/assets/api/index.js'

    export default {
        data() {
            return {
                category: "",
                goodsList:[]
            }
        },
        components:{
            listFilter,currentList
        },
        async mounted() {
            this.category = this.$route.params.category
            let goods_res = await axios.get(GetGoods+this.category)
            this.goodsList = goods_res.data
        },
        methods: {
            goback: function () {
                this.$router.go(-1)
            }
        }
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