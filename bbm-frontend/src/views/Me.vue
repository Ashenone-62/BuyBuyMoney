<template>
  <div class="me">
    <user-info></user-info>
    <user-btn></user-btn>
  </div>
</template>

<script>
import userInfo from '@/components/UserInfo.vue'
import userBtn from '@/components/UserBtn.vue'
export default {
  name: 'Me',
  data(){
    return{

    }
  },
  components:{
    userInfo,userBtn
  }
}
</script>

<style lang="scss" scoped>
  .me{
    display: flex;
    flex-direction: column;
  }
</style>
