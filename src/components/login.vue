<template>
  <el-container>
    <div class="logo">
      <img :src="logo" alt="logo" id="logo" />
    </div>
    <div class="interface">
      <!-- 登录 或者 注册 的选择盒子 -->
      <div class="choiceBox">
        <div class="loginBox">
          <p @click="isLogin = true" :class="{ active: isLogin }">登陆</p>
        </div>
        <div class="registerBox">
          <p @click="isLogin = false" :class="{ active: !isLogin }">注册</p>
        </div>
      </div>
      <!-- 登录界面 -->
      <div class="loginPage">
        <form action="/login.do" v-if="isLogin">
          <div class="usernameBox">
            <img :src="account" alt="" />
            <input
              type="text"
              name="username"
              id="login-username"
              placeholder="用户ID"
              maxlength="5"
              v-model="userName"
            />
            <p class="tips">{{ userNameTips }}</p>
          </div>
          <div class="passwordBox">
            <img :src="password" alt="" />
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="密码"
              maxlength="12"
              v-model="passWord"
            />
            <p class="tips">{{ passwordTips }}</p>
          </div>
          <button id="login">进入</button>
        </form>
        <form action="/register.do" v-else>
          <div class="usernameBox">
            <img :src="account" alt="" />
            <input
              type="text"
              name="username"
              id="login-username"
              placeholder="用户ID"
            />
          </div>
          <div class="passwordBox">
            <img :src="password" alt="" />
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="密码"
            />
          </div>
          <button id="login">进入</button>
        </form>
      </div>
    </div>
  </el-container>
</template>

<script>
import { ref, reactive, toRefs, nextTick, onMounted, watch } from "vue";
import getAssetsImages from "../hook/getAssetsImages";

export default {
  setup() {
    let imgUrl = reactive({
      logo: getAssetsImages("login", "斜眼看.png"),
      account: getAssetsImages("login", "用户登录icon.png"),
      password: getAssetsImages("login", "密码icon.png"),
    });
    let isLogin = ref(true);
    let userName = ref("");
    let passWord = ref("");
    let userNameTips = ref("");
    let passwordTips = ref("");
    watch(userName, (newValue) => {
      if (newValue.length === 5) {
        userNameTips.value = "id不能超过五个字";
      }else{
        userNameTips.value = "";
      }
    });
    watch(passWord, (newValue) => {
      if (newValue.length === 12) {
        passwordTips.value = "密码不能超过12位";
      }else{
        passwordTips.value = ''
      }
    });
    return {
      isLogin,
      userNameTips,
      passwordTips,
      userName,
      passWord,
      ...toRefs(imgUrl),
    };
  },
};
</script>

<style lang='less' scoped>
/* logo动画 */
@keyframes logomove {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 21%;
    opacity: 1;
  }
}
@keyframes interfacemove {
  from {
    top: 50%;
    opacity: 0;
  }
  to {
    top: 30%;
    opacity: 1;
  }
}
.el-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #e0e0e0;
  .logo {
    position: absolute;
    top: -100px;
    width: 275px;
    height: 75px;
    margin: 0px 62.5px 0px;
    z-index: 10;
    animation-name: logomove;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    img {
      width: 100%;
    }
  }
  .interface {
    position: absolute;
    top: 25%;
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    box-shadow: 40px 40px 80px #bebebe, -40px -40px 80px #ffffff;
    animation-name: interfacemove;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    .choiceBox {
      margin: 15px 0px 60px;
      .loginBox,
      .registerBox {
        display: inline-block;
        width: 90px;
        height: 45px;
        margin: 35px 0px 0px;
        margin-left: 70px;
        line-height: 45px;
        text-align: center;
        p {
          font-size: 32px;
          cursor: pointer;
        }
        p:hover {
          color: black;
        }
      }
      .active {
        color: black;
      }
    }
    .loginPage {
      display: block;
      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        vertical-align: bottom;
      }
      .usernameBox,
      .passwordBox {
        width: 230px;
        margin: 20px 85px;
        .tips {
          position: relative;
          left: 25%;
          font-size: 12px;
          color: red;
        }
      }
      #login-username,
      #login-password {
        width: 175px;
        height: 35px;
        border: 1.5px solid white;
        text-indent: 1em;
      }
      #login {
        width: 160px;
        height: 40px;
        margin: 20px 120px;
        font-size: 30px;
        border-radius: 20px;
        border: 1px solid rgba(69, 69, 69, 0.3);
        background-color: rgba(255, 255, 255, 0.7);
      }
      #login:hover {
        font-size: 31px;
      }
    }
  }
}
</style>