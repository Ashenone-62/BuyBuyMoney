<template>
  <div>
    <bbm-header></bbm-header>
    <bbm-swiper :swiper="swiper_arr"></bbm-swiper>
    <bbm-top></bbm-top>
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
