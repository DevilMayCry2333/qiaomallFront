<template>
    <div>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>

        <el-button type="primary" @click="login">主要按钮</el-button>

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

const config = require('../config/conf.js');

export default Vue.extend({
   name: 'Login',
   created(){

   },
   methods:{
     login(){
       console.log(this.username);
       console.log(this.password);
      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "login",
                        params:{
                            username: this.username,
                            password: this.password
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                          Cookies.set('token',resp.data.Token);
                          Cookies.set('username',this.username);
                          
                           that.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        that.$router.push("/");

                        console.log(resp.data);
                        })
                })
     }
   },
   data() {
    return {
      username: '',
      password: ''
    }
  }
})
</script>

<style>

</style>