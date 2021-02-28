<template>
<!-- 个人页面 -->
  <div class="me">
    <!-- 用户信息组件 -->
    <user-info :userInfo="userInfo"></user-info>
    <!-- 用户按钮群 -->
    <user-btn></user-btn>
  </div>
</template>

<script>
import userInfo from '@/components/UserInfo.vue'
import userBtn from '@/components/UserBtn.vue'
import axios from 'axios'
import {GetUserInfo} from '@/assets/api/index.js'

export default {
  name: 'Me',
  data(){
    return{
      userInfo:""
    }
  },
  components:{
    userInfo,userBtn
  },
  async mounted(){
    // 页面挂载时，判断是否登录，登录就修改信息并请求当前对应用户的信息
      if(localStorage.isLogin == "true"){
        this.$store.state.isLogin = true;
        let username = JSON.parse(localStorage.userToken);
        
        let getUserInfo_res = await axios.post(GetUserInfo,{username:username})
      // 如果存在登录信息但是没有找到该用户，就重新置为未登录状态，反之更新信息
        if(getUserInfo_res.data.state == 0){
          this.$store.state.isLogin = false;
          localStorage.isLogin = JSON.stringify(false);
        }else{
          this.userInfo = getUserInfo_res.data
        }
      }
  }
}
</script>

<style lang="scss" scoped>
  .me{
    display: flex;
    flex-direction: column;
  }
</style>
