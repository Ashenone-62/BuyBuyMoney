<template>
<!-- 
    顶部组件
        -   搜索框
        -   购物车
 -->
    <div class="bbmHeader">
        <div class="left" :class="{active:isSearch}">
            <van-icon name="search" size="25" @click="searchBtn" :class="{iconActive:isSearch}" />
            <transition enter-active-class = "animate__animated animate__bounceInLeft" leave-active-class = "animate__animated animate__bounceOutLeft">
                <input type="text" v-model="searchValue" placeholder="输入您要找的宝贝" v-show="isSearch" ref="search" @keydown.enter="search">
            </transition>
        </div>

        <div class="right" :class="{active:isShoppingCar}">
            <van-icon name="cart-o" size="25" @click="shiftCar" :class="{iconActive:isShoppingCar}" />
        </div>

        <transition enter-active-class = "animate__animated animate__flipInX" leave-active-class = "animate__animated animate__flipOutX">
            <div class="shoppingCar" v-if="isShoppingCar&&$store.state.isLogin">
                <div class="payBtn">
                    <div>
                        全选
                        <input type="checkbox" name="" id="">
                    </div>
                    <button class="pay">支付</button>
                </div>

                <div class="goods">
                    <div class="shop">
                        <div class="head">
                            <input type="checkbox" name="" id="">
                            <div class="shopName"><van-icon name="shop-o" />店铺1</div>
                        </div>
                        <van-overlay :show="isDel">
                            <div class="delEventBtn">
                                <button class="delBtn" @click.stop>删除</button>
                                <button class="cancelBtn"  @click.stop="cancelDel">取消</button>
                            </div>
                        </van-overlay>
                        <div class="content" @touchstart.stop="touchDel($event)">
                            <input type="checkbox" name="" id="">
                            <div class="lItem">
                                <img src="@/assets/img/good.jpg" alt="">
                            </div>
                            <div class="rItem">
                                <div class="title">62的无敌键盘</div>
                                <div class="type">顶配版本</div>
                                <div class="numData">
                                    <div class="price">￥666</div>
                                    <div class="num">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <input type="checkbox" name="" id="">
                            <div class="lItem">
                                <img src="@/assets/img/good.jpg" alt="">
                            </div>
                            <div class="rItem">
                                <div class="title">62的无敌键盘</div>
                                <div class="type">顶配版本</div>
                                <div class="numData">
                                    <div class="price">￥666</div>
                                    <div class="num">x3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop">
                        <div class="head">
                            <input type="checkbox" name="" id="">
                            <div><van-icon name="shop-o" />店铺2</div>
                        </div>
                        <div class="content">
                            <input type="checkbox" name="" id="">
                            <div class="lItem">
                                <img src="@/assets/img/good.jpg" alt="">
                            </div>
                            <div class="rItem">
                                <div class="title">62的无敌键盘</div>
                                <div class="type">顶配版本</div>
                                <div class="numData">
                                    <div class="price">￥666</div>
                                    <div class="num">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <input type="checkbox" name="" id="">
                            <div class="lItem">
                                <img src="@/assets/img/good.jpg" alt="">
                            </div>
                            <div class="rItem">
                                <div class="title">62的无敌键盘</div>
                                <div class="type">顶配版本</div>
                                <div class="numData">
                                    <div class="price">￥666</div>
                                    <div class="num">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <input type="checkbox" name="" id="">
                            <div class="lItem">
                                <img src="@/assets/img/good.jpg" alt="">
                            </div>
                            <div class="rItem">
                                <div class="title">62的无敌键盘</div>
                                <div class="type">顶配版本</div>
                                <div class="numData">
                                    <div class="price">￥666</div>
                                    <div class="num">x3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// searchValue: 获取搜索内容
// isSearch: 是否打开搜索框
// isShoppingCar: 是否打开购物车
// isDel: 是否长按删除
    export default {
        data(){
            return {
                searchValue:"",
                isSearch:false,
                isShoppingCar:false,
                isDel:false
            }
        },
        compoents:{
            
        },
        methods:{
            // 打开关闭搜索框
            searchBtn:function(){
                this.isSearch = !this.isSearch
            },
            // 获取搜索框内容
            search:function(){
                console.log(this.searchValue)
            },
            //打开关闭购物车
            //会判断是否登录，没有登录会直接跳到登录页
            shiftCar:function(){
                if(this.$store.state.isLogin == true){
                    this.isShoppingCar = !this.isShoppingCar;
                }else{
                    this.$router.push({ name: 'Login'})
                }
            },
            //长按购物车商品选择删除
            touchDel:function(e){
                let timeOutEvent = 0;
                let _this = this;
                timeOutEvent = 0
                clearTimeout(timeOutEvent);
                timeOutEvent = setTimeout(()=>{
                    this.isDel = true
                    },1000);
            },
            //取消删除
            cancelDel:function(){
                this.isDel = false
            }
        },
        updated(){
            // 自动聚焦到搜索框
            if(this.isSearch == true){
                this.$refs.search.focus()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .active{
        transition: 0.5s;
        background-color: #ec4646;

        .iconActive{
          color: white !important;
        }
    }

    .bbmHeader{
        display: flex;
        width: 100vw;
        height: 10vh;
        justify-content: space-between;
        position: fixed;
        background-color: white;
        z-index: 9999;
    }

    .left{
        display: flex;
        position: relative;
        top: 2vh;
        left: 2vh;
        align-items: center;
        justify-content: center;
        width: 12vw;
        height: 12vw;
        border-radius: 50%;
        box-shadow: 1px 2px 5px #663f3fde;

        input{
            position: absolute;
            left: 8vh;
            height: 12vw;
            border-radius: 15vw;
            border: none;
            box-shadow: 1px 2px 5px #663f3fde;
        }

        ::-webkit-input-placeholder{
            padding: 5px;
        }
    }

    .right{
        display: flex;
        position: relative;
        top: 2vh;
        left: -3vh;
        align-items: center;
        justify-content: center;
        width: 16vw;
        height: 12vw;
        border-radius: 12vw;
        box-shadow: 1px 2px 5px #663f3fde;  
    }

    .shoppingCar{
        display: flex;
        flex-direction: column;
        position: fixed;
        padding: 2vh;
        top: 12vh;
        left: 6vw;
        width: 80vw;
        max-height: 65vh;
        border-radius: 2vw;
        box-shadow: 1px 2px 5px #663f3fde;  
        overflow: scroll;
        z-index: 99999;
        background-color: #fff;
    }

    .shop{
        display: flex;
        flex-direction: column;
        margin-bottom: 2vh;
        border-radius: 2vw;
        box-shadow: 1px 2px 5px #663f3fde;
        .head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 30px;
            padding: 0 10px 0 10px;
            border-radius: 2vw 2vw 0 0;
            color: rgb(122, 122, 122);
            font-size: 3vh;
            background-color: #f3f3f3da;
            .shopName{
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
        }
        .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px;
            padding: 10px;
            border-radius: 2vw;
            box-shadow: 1px 2px 5px #663f3fde;
            .del{
                display: flex;
                width: 100%;
                height: 100%;
                background-color: rgba(65, 65, 65, 0.404);
                z-index: 9999;
            }
            .lItem{
                margin: 0 10px 0 10px;
                width: 25vw;
                height: 25vw;
                border-radius: 2vw;
                box-shadow: 1px 2px 5px #663f3fde;
                img{
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                    border-radius: 2vw;
                }
            }
            .rItem{
                flex: 1;
                flex-direction: column;
                .title{
                    text-align: left;
                    line-height: 5vh;
                }
                .type{
                    width: 10vw;
                    text-align: center;
                    padding: 5px;
                    border-radius: 2vw;
                    color: rgb(99, 99, 99);
                    background-color: rgba(219, 219, 219, 0.836);
                }
                .numData{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    line-height: 5vh;
                    .price{
                        color: #ec4646;
                        font-size: 3vh;
                    }
                    .num{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 4vh;
                        height: 4vh;
                        border-radius: 2vw;
                        box-shadow: 1px 2px 5px #663f3fde;
                    }
                }
            }
        }
    }

    .payBtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4vh;

        button{
            width: 20vw;
            height: 10vw;
            border: none;
            border-radius: 2vw;
            background-color: #ec4646;
            color: white;
            box-shadow: 1px 2px 5px #663f3fde;
        }
    }

    .delEventBtn{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        button{
            margin: 5vh;
            width: 60vw;
            height: 10vh;
            border:none;
            border-radius: 10vh;
            font-size: 4vh;
            color: white;
        }
        .delBtn{
            background-color: #ec4646;
        }
        .cancelBtn{
            background-color: #51c2d5;
        }
    }
</style>