<template>
  <div class="me">
    <user-info :userInfo="userInfo"></user-info>
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
      if(localStorage.isLogin == "true"){
        this.$store.state.isLogin = true;
        let username = JSON.parse(localStorage.userToken);
        
        let getUserInfo_res = await axios.post(GetUserInfo,{username:username})

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
