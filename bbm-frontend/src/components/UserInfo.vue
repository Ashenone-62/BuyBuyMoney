<template>
    <div class="userInfo">
        <div class="avatar">
            <img src="@/assets/img/avatar.jpg" alt="">
        </div>
        
        <div class="username">
            张三李四王麻子
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .userInfo{
        display: flex;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 25vh;
        background-color: #111636c9;
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
            font-weight: bold;
            color: white;
        }
    }
</style>