<template>
<!-- 小类别商品列表页 -->
    <div>
        <!-- 返回按钮，因为太简单所以没有单独作为一个组件。但应该单独作为组件，因为多处用到了，维护一处变成了维护多处 -->
        <div class="back" @click="goback">
            <van-icon name="arrow-left" />
        </div>
        <!-- 排序过滤器组件 -->
        <list-filter :goodsList="goodsList"></list-filter>
        <!-- 商品列表组件 -->
        <current-list :goodsList="goodsList"></current-list>
    </div>
</template>

<script>
import listFilter from '@/components/ListFilter.vue'
import currentList from '@/components/CurrentList.vue'
import axios from 'axios'
import {GetGoods,GetTopGoods} from '@/assets/api/index.js'

    export default {
        data() {
            return {
                category: "",
                hotType:"",
                goodsList:[]
            }
        },
        components:{
            listFilter,currentList
        },
        async mounted() {
            // 根据当前小类别请求具体商品列表
            if (this.$route.params.category) {
                this.category = this.$route.params.category
                let goods_res = await axios.get(GetGoods+this.category)
                this.goodsList = goods_res.data
            }
            if (this.$route.params.type) {
                this.hotType = this.$route.params.type
                let hotType_res = await axios.get(GetTopGoods+this.hotType)
                this.goodsList = hotType_res.data
            }
            
        },
        methods: {
            // 返回
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