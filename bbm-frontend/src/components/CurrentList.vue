<template>
<!-- 当前正在浏览类别的商品列表组件 -->
    <div class="currentList">
        <div class="goodItem" v-for="(item,index) in goodsList" :key="index" @click="goDetail(item.gid,item.gname,item.garea)">
            <div class="cover">
                <img :src="item.gimg" alt="">
            </div>
            <div class="infos">
                <div class="title"><h2>{{item.gname}}</h2></div>
                <div class="price">￥{{item.gprice}}</div>
                <div class="area">{{item.garea}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // props
    // goodsList -由父组件List上请求传入的当前正在浏览类别的商品列表
    props:['goodsList'],
    data(){
        return{

        }
    },
    methods:{
        goDetail:function (gid,title,area) {
            this.$router.push({
                path:"/goodDetail/"+gid,
                name:"GoodDetail",
                params:{
                    goodNum: gid,
                    title: title,
                    area: area
                }})
            this.$store.state.isDetail = true
        }
    },
}
</script>

<style lang="scss" scoped>
    .currentList{
        display: flex;
        flex-direction: column;
        width: 98vw;
        margin: 1vw 1vw 20vh 1vw;
        overflow: scroll;
    }

    .goodItem{
        display: flex;
        width: 100%;
        height: 20vh;
        margin-bottom: 2vh;
        .cover{
            width: 35%;
            height: 100%;
            margin-right: 4px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .infos{
            display: flex;
            flex: 1;
            position: relative;
            .title{
                overflow: hidden;
                height: 10vh;
                position: absolute;
            }
            .price{
                bottom: 0;
                left: 0;
                font-size: 4vh;
                position: absolute;
                color: #ec4646;
            }
            .area{
                bottom: 0;
                right: 10px;
                font-weight: bold;
                position: absolute;
            }
        }
    }
</style>