<template>
<!-- 首页 -->
  <div>
    <!-- 头部组件，搜索框与购物车 -->
    <bbm-header></bbm-header>
    <!-- 轮播图组件 -->
    <bbm-swiper :swiper="swiper_arr"></bbm-swiper>
    <!-- 快捷导航组件 -->
    <bbm-top></bbm-top>
    <!-- 随机商品评测组件 -->
    <bbm-commit></bbm-commit>
  </div>
</template>

<script>
import bbmHeader from '@/components/BBMHeader.vue'
import bbmSwiper from '@/components/BBMSwiper.vue'
import bbmTop from '@/components/BBMTop.vue'
import bbmCommit from '@/components/BBMCommit.vue'
import axios from 'axios'
import {GetSwiper} from '@/assets/api/index.js'

export default {
  name: 'Home',
  components: {
    bbmHeader,bbmSwiper,bbmTop,bbmCommit
  },
  data(){
    return{
      swiper_arr:[],
    }
  },
  async mounted(){
    // 请求轮播图图片
    let getSwiper_res = await axios.get(GetSwiper);
    this.swiper_arr = getSwiper_res.data
  }
}
</script>

<style lang="scss" scoped>
  div{
    overflow: scroll;
  }
</style>
