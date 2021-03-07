<template>
<!-- 首页评测组件 -->
    <div class="goodInfos">
        <h1>发现评测</h1>
        <div class="randomCommit" v-for="(item,index) in commit" :key="index"> 
            <div class="good">
                <img :src="item.gimg" alt="">
            </div>
            <div class="infos">
                <div class="content">
                    {{item.commit}}
                </div>
                <div class="userInfo">
                    <div class="avatar">
                        <img :src="item.avatar" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {GetCommits} from '@/assets/api/index.js'

    export default {
        data(){
            return{
                commit:[]
            }
        },
        async mounted(){
            let commit_res = await axios.get(GetCommits)
            this.commit = commit_res.data
        }
    }
</script>

<style lang="scss" scoped>
    .goodInfos {
        margin-bottom: 20vh;
        h1{
            margin: 0vh 3vh 2vh 3vh;
        }
    }

    .randomCommit {
        display: flex;
        flex-wrap: wrap;
        margin: 2vh 5vw 2vh 5vw;
        width: 90vw;
        height: 25vh;
        border-radius: 4vw;
        box-shadow: 1px 2px 5px #663f3fb6;
    }

    .good {
        width: 61%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 4vw 0 0 4vw;
        }
    }

    .infos {
        display: flex;
        flex-direction: column;
        width: 35%;
        height: 100%;

        .userInfo {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 30%;

            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }

        .content {
            border-bottom: 2px solid rgba(128, 128, 128, 0.329);
            padding: 5%;
            width: 100%;
            height: 70%;
            overflow: hidden;
        }
    }
</style>