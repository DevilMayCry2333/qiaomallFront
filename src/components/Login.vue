<template>
    <div>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>

        <el-button type="primary">主要按钮</el-button>

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   name: 'Login',
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