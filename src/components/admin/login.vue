<template>
  <div class="login">
    <div class="headertop">
      <h1>Web ide</h1>
    </div>
    <div class="am-g">
      <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
        <h3>登录</h3>
        <hr>
        <form method="post" class="am-form">
          <label for="email">邮箱:</label>
          <input type="email" name="" id="email" value="">
          <br>
          <label for="password">密码:</label>
          <input type="password" name="" id="password" value="">
          <br>
          <div class="am-cf">
            <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',

}
</script>

<style>
  @import '../../../static/amaze/css/amazeui.css';
  .login{
    height:100%;
  }
  .headertop{
    text-align: center;
  }
  .headertop h1 {
    font-size: 200%;
    color: #333;
    margin-top: 30px;
}
hr {
    height: 0;
    border-top: 1px solid #eee;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}
</style>
