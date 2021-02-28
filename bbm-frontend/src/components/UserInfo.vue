<template>
<!-- 用户信息组件
    - 判断有无登录，无登录显示登录注册入口
 -->
    <div class="infos">
        <div class="logout" @click="logout">
            <van-icon name="cross" />
        </div>

        <to-login v-if="$store.state.isLogin == false"></to-login>

        <div class="userInfo" v-if="$store.state.isLogin == true">
            <div class="avatar" >
                <img :src="userInfo.avatar" alt="">
            </div>
            
            <div class="username">
                {{userInfo.username}}
                <div class="uid">
                    uid:{{userInfo.uid}}
                </div>
            </div>
        </div >

    </div>
</template>

<script>
import toLogin from "@/components/ToLogin.vue"
export default {
    // 有父组件Me，判断是否登录，已登录去请求相应的用户信息传过来
    props:["userInfo"],
    components:{
        toLogin
    },
    mounted(){
        console.log(this.userInfo)
    },
    methods:{
        //注销当前登录状态
        logout:function(){
            this.$store.state.isLogin = false;
            this.$store.state.userToken = "";
            localStorage.isLogin = JSON.stringify(false);
            localStorage.removeItem('userToken');
        }
    }
}
</script>

<style lang="scss" scoped>
    .infos{
        background-color: #111636c9;
        width: 100vw;
        height: 25vh;
        display: flex;
        flex-direction: column;
    }
    .logout{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        color: #bbf1fa;
        box-shadow: 1px 1px 2px #bbf1fa;
    }
    .userInfo{
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 5vh;
        .avatar{
            width: 25%;
            height: 100px;
            position: absolute;
            left: 50px;
            border-radius: 4vw;
            box-shadow: 1px 1px 3px #bbf1fa;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4vw;
            }
        }
        .username{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            position: absolute;
            left: 180px;
            height: 10vh;
            font-size: 30px;
            font-weight: bold;
            color: white;
        }

        .uid{
            position: absolute;
            top: 63px;
            height: 10vh;
            color: white;
            font-size: 10px;
            font-weight: bold;
        }
    }
</style>