<template>
  <div>
    <bbm-header></bbm-header>
    <bbm-swiper></bbm-swiper>
    <bbm-top></bbm-top>
    <bbm-commit></bbm-commit>
  </div>
</template>

<script>
import bbmHeader from '@/components/BBMHeader.vue'
import bbmSwiper from '@/components/BBMSwiper.vue'
import bbmTop from '@/components/BBMTop.vue'
import bbmCommit from '@/components/BBMCommit.vue'

export default {
  name: 'Home',
  components: {
    bbmHeader,bbmSwiper,bbmTop,bbmCommit
  }
}
</script>

<style lang="scss" scoped>
  div{
    overflow: scroll;
  }
</style>
