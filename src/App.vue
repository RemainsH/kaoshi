<template>
  <div>

<!-- 导航栏 -->
    <div >
      <div class="row clearfix">
        <div class="col-md-10 column">
          <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="0"><router-link to="/"><img src="./assets/img/logo.png" width="90" height="50"></router-link></el-menu-item>
              <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/news">新闻资讯</router-link></el-menu-item>
              <el-menu-item index="4" ><router-link to="/product">产品展示</router-link></el-menu-item>
              <el-menu-item index="5" >客户服务</el-menu-item>
              <el-menu-item index="6" >人才招聘</el-menu-item>
              <el-menu-item index="7" >联系我们</el-menu-item>
              <el-menu-item index="8" >网站地图</el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="col-md-2 column">
          <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">登录</el-menu-item>
              <el-menu-item index="2">注册</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>


  </div>

</template>
<script>
export default {
  name: 'App',
  data () {
    return{
      activeIndex: '1',
      activeIndex2: '1',
      banH:300,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    setbanH() {

      this.banH = 500

    }
  },
  mounted() {

    this.setbanH()

    window.addEventListener('resize', () => {

      this.setbanH()

    }, false)

  },
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 800px;
  margin: 0;
}

</style>
<style>
p {text-indent:2em;}
</style>
<style>
  body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, hr, input, li, ol, p, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }
  div {
    display: block;
  }
  :root {
    --swiper-navigation-size: 44px;
  }
  :root {
    --swiper-theme-color: #007aff;
  }
  html {
    font-family: 'pingfang SC','helvetica neue',arial,'hiragino sans gb','microsoft yahei ui','microsoft yahei',simsun,sans-serif;
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
  }
</style>
