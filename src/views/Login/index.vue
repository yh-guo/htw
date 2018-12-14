<template>
  <div class="login">
    <div class="login-main">
      <h1 class="login-title">海豚网FMS系统</h1>
      <div class="login-input-item">
        <el-input placeholder="请输入登录名" v-model="userName">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="login-input-item">
        <el-input placeholder="请输入密码" type="password" v-model="password" @keyup.enter.native="login">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="login-button-item">
        <el-button type="primary" @click.native.prevent="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/request/index'
import { setUser } from '@/utils/user'
export default {
  name: 'login',
  data () {
    return { userName: '', password: '' }
  },
  methods: {
    login: function () {
      http({
        data: {userName: this.userName, password: this.password},
        // url: 'common/getAllCurrency',
        action: 'fmsUserService.login'
      }).then((result) => {
        setUser(result.data)
        this.$router.push({path: '/main'})
        this.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    background-color: #eee;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .login-main{
    position: absolute;
    top: 45%;
    left: 50%;
    width: 500px;
    height: 300px;
    background-color: #fff;
    margin: -150px 0 0 -250px;
    padding: 20px 40px;
  }
  .login-title{
    color: $main-color;
    line-height: 1em;
    padding-bottom: 20px;
  }
  .login-input-item{
    width: 100%;
    height: 32px;
    margin-bottom: 15px;
  }
  .login-button-item{
    width: 100%;
    height: 32px;
  }
    .login-button-item button{
      width: 100%;
    }
</style>
