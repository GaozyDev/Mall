<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.baidu.com/" target="_blank">LqGitHub主页</a><span>|</span>
      <a href="https://www.baidu.com/" target="_blank">LqGitHub主页</a><span>|</span>
      <a href="https://www.baidu.com/" target="_blank">LqGitHub主页</a><span>|</span>
      <a href="https://www.baidu.com/" target="_blank">LqGitHub主页</a>
    </div>
    <div class="copyright">版权 <span class="domain">https://www.baidu.com/</span></div>
  </div>
</template>
<script>
export default {
  name:'nav-footer'
}
</script>
<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright{
      .domain{
        color: #FF6600;
      }
    }
  }
</style>