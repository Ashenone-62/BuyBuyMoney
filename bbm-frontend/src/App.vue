<template>
  <!-- 导航组件 -->
  <div id="app">
    <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown">
    <div class="nav" v-if="$store.state.isDetail == false">
        <div class="tabber" >
          <div :class="{active:tabActive==0}">
            <router-link to="/">
              <van-icon :class="{iconActive:tabActive==0}" name="wap-home-o" size="25" color="#a7a7a7"
                @click="tabRoute(0)" />
            </router-link>
          </div>
          <div :class="{active:tabActive==1}">
            <router-link to="/category/0">
              <van-icon :class="{iconActive:tabActive==1}" name="coupon-o" size="25" color="#a7a7a7"
                @click="tabRoute(1)" />
            </router-link>
          </div>
          <div :class="{active:tabActive==2}">
            <router-link to="/me">
              <van-icon :class="{iconActive:tabActive==2}" name="user-o" size="25" color="#a7a7a7"
                @click="tabRoute(2)" />
            </router-link>
          </div>
        </div>
    </div>
    </transition>
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabActive: 0,
      };
    },
    methods: {
      tabRoute: function (num) {
        this.tabActive = num;
      }
    },
    async beforeMount() {
      // 在整个页面挂载钱就先判断登录的状态并给予初始值
      localStorage.isLogin = localStorage.isLogin ? localStorage.isLogin : JSON.stringify(false);
      this.$store.state.isLogin = JSON.parse(localStorage.isLogin)
      this.$store.state.userToken = localStorage.userToken ? JSON.parse(localStorage.userToken) : ""
    },
  }
</script>

<style lang="scss">
  $mainColor_red: #ec4646;
  $mainColor2_black: #663f3f;
  $mainColor3_hBlue: #51c2d5;
  $mainColor4_lBlue: #bbf1fa;

  * {
    margin: 0;
    padding: 0;
  }

  .nav {
    position: fixed;
    justify-content: space-around;
    width: 100vw;
    height: 13vh;
    bottom: 0;
    background-color: #111636;
    border-radius: 15% 15% 0 0;
    z-index: 9999;

    .tabber {
      display: flex;
      justify-content: space-around;
      height: 100%;
      align-items: center;

      div {
        padding: 8px 10px;
      }

      .active {
        border-radius: 25%;
        box-shadow: 0.2px 0.2px 4px $mainColor4_lBlue;

        .iconActive {
          transition: 0.5s;
          color: $mainColor4_lBlue !important;
        }
      }
    }
  }
</style>