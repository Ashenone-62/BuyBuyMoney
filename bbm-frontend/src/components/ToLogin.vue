<template>
<!-- 登录注册入口组件 -->
    <div class="login">
      <button class="lBtn" @click="toLogin">登录</button>
      <button class="rBtn" @click="toRegister">注册</button>
    </div>
</template>

<script>
export default {
    methods:{
        //去登录页面
        toLogin:function(){
            this.$router.push({name:"Login"})
        },
        //去注册页面
        toRegister:function(){
            this.$router.push({name:"Register"})
        },
    }
}
</script>

<style lang="scss" scoped>
    button{
        margin:3vw;
        width: 30%;
        height: 50px;
        border-radius: 4vw;
        border: none;
        color: white;
    }
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .lBtn{
            background-color: #ec4646;
        }
        .rBtn{
            background-color: #51c2d5;
        }
    }
</style>