<template>
    <div class="formData">
        <van-form validate-first @failed="onFailed" @submit="submit">
            <van-field
                v-model="username"
                name="username"
                placeholder="用户名"
                :rules="pUsername"
            />
            <van-field
                v-model="password"
                name="password"
                placeholder="密码"
                :rules="pPassword"
            />
            <van-field
                v-model="email"
                name="email"
                placeholder="邮箱"
                :rules="pEmail"
            />
            <van-field
                v-model="phone"
                name="phone"
                placeholder="电话"
                :rules="pPhone"
            />
            
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" >注册</van-button>
            </div>
            </van-form>
    </div>
</template>

<script>
import axios from 'axios'
import {Register} from '@/assets/api/index.js'
export default {
    data() {
    return {
        username: '',
        password: '',
        email: '',
        phone: '',
        pUsername: [{
                    required: true,
                    message: '请输入5到15位用户名（字母，数字，下划线，减号）',
                    pattern:/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,15}$/
                }],
        pPassword: [{
                    required: true,
                    message: '请输入密码，最少8位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
                    pattern:/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
                }],
        pEmail: [{
                    required: true,
                    message: '请输入正确邮箱',
                    pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                }],
        pPhone: [{
                    required: true,
                    message: '请输入正确电话号码',
                    pattern:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
                }],
    };
  },
  methods: {
    onFailed:function(errorInfo) {
      console.log('failed', errorInfo);
    },
    submit:async function(successRes){
        console.log(Register)
        let register_res = await axios.post(Register,successRes);

        if(register_res.state == 1){
            console.log("注册成功")
        }else{
            console.log("已有该用户")
        }
    }
  },
}
</script>

<style>
    .formData{
        padding:10px;
    }
</style>