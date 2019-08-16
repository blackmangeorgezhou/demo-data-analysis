<template>
  <div id="login-page" class="w-h-100 display-column-between">
    <the-header :hasBottomLine="hasBottomLine" :sysTitle="sysTitle" class="color-f font-size-32"></the-header>
    <div id="login-form" class="bg-f padding-20 text-align-c border-radius-8">
      <h1 class="color-7e8ca3">登  录</h1>
      <el-form :rules="loginRules" :model="loginInfo" ref="loginForm" @keyup.enter.native="login('loginForm')">
        <el-form-item prop="userName">
          <el-input v-model="loginInfo.userName" type="text" placeholder="邮箱" autofocus clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.password" type="password" placeholder="密码" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')" round :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <the-footer class="color-f font-size-smaller" :copyright="copyrightMsg"></the-footer>
  </div>
</template>

<script>
import { Constants, ResultCode } from '@/common'
import { URL, API } from '@/services'
import { mapState, mapActions } from 'vuex'
import TheHeader from '@/components/Header'
import TheFooter from '@/components/Footer'

export default {
  name: 'LoginPage',
  components: {
    TheHeader,
    TheFooter
  },

  created () {
    this.refreshValidateCode()
  },

  data () {
    // 校验规则
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }

    let validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      sysTitle: Constants.sysTitle,
      copyrightMsg: Constants.defaultCopyRight,
      loading: false,
      hasBottomLine: true,
      loginInfo: {
        userName: 'chengxiang@xdf.cn',
        password: 'xdf_1234'
      },
      imgUrl: URL.getValidateCode,
      loginRules: {
        userName: { validator: validateName, trigger: 'blur', required: true },
        password: { validator: validatePassword, trigger: 'blur', required: true }
      }
    }
  },

  computed: {
    ...mapState(['user'])
  },

  methods: {
    ...mapActions(['setUser']),
    async validate (formName) {
      let isRight = false

      this.$refs[formName].validate(valid => {
        isRight = valid
      })

      return isRight
    },

    async login (loginForm) {
      const valid = await this.validate(loginForm)
      if (valid) {
        this.loading = true
        const response = await API.login(this.loginInfo)
        console.log(response)
        this.loading = false
        if (response && response.resultCode === ResultCode.OK && response.data && response.data.IsSuccess) {
          this.setUser(response.data)
          this.$router.push('/demo-data-analysis/home')
        } else {
          this.showError(response.data.Msg)
        }
      }
    },

    refreshValidateCode () {
      this.imgUrl += `?${Math.random()}`
    }
  }
}
</script>

<style scoped>
.el-form {
    width: 70%;
    margin: 3.75rem /* 60/16 */ auto;
    margin-bottom: 0;
}
.el-form-item {
  margin-top: 1.5625rem;
}

.el-inpu {
  width: 45%;
}

#login-page {
  /* background-image: url("../assets/images/bg-logo.png"); */
  background-color: rgb();
  background-size: 15% 15%;
  overflow-y: hidden;
  background-color: rgb(58,164,167, .5);
}

#login-page #header {
  height: 10%;
}

#login-form {
  height: auto;
  width: 30rem;
}

#login-form .el-form .el-button {
  width: 50%;
  margin-top: 3.125rem /* 50/16 */
}
</style>
