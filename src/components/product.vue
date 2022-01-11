<template>
  <div>

    <div class="rno-4-hero-group1"  >
      <div class="rno-4-hero">
        <div class="rno-4-hero-inner">
          <figure class="rno-4-hero-ct">
            <div class="rno-4-hero-search-hd">
              <h2 class="rno-4-hero-tit">产品数据管理</h2>
              <img class="rno-4-hero-logo" src="https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/platform/documents/css/img/rno-4-hero-logo.png" alt="文档中心">
            </div><div class="rno-4-hero-search-wrap"><input type="text" class="rno-4-hero-search-input" placeholder="请输入关键词搜索" value="">
            <button class="rno-4-hero-search-btn" hotrep="document.home.banner.search">查询</button>
            <div class="rno-4-hero-search-list-wrap">
              <ul class="rno-4-hero-search-list rno-scrollbar" ></ul>
            </div>
          </div>
            <div class="rno-4-hero-search-tip">
              <span>从基础设施到行业应用领域，提供完善的产品体系，助力您的业务腾飞</span>
            </div>
          </figure>

        </div>
      </div>

    </div>


    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <el-card body-style="padding:0px">
            <div>
              <div class="row clearfix">
                <div class="col-md-4 column">
                  <el-card>
                    <h2><i class="el-icon-s-flag"></i>热门产品</h2><br><br>
                    <div class="text item">
                      <h4>guet课程表</h4><br>
                      <h6>安全稳定，高弹性的服务</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>智慧学工</h4><br>
                      <h6>稳定，简单的服务平台</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>学分制管理系统</h4><br>
                      <h6>方便，快捷的服务</h6><br>
                    </div>
                  </el-card>
                </div>
                <div class="col-md-4 column">
                  <el-card>
                    <h2><i class="el-icon-s-opportunity"></i>最新产品</h2><br><br>
                    <div class="text item">
                      <h4>guet课程表</h4><br>
                      <h6>安全稳定，高弹性的服务</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>智慧学工</h4><br>
                      <h6>稳定，简单的服务平台</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>学分制管理系统</h4><br>
                      <h6>方便，快捷的服务</h6><br>
                    </div>
                  </el-card>
                </div>
                <div class="col-md-4 column">
                  <el-card>
                    <h2><i class="el-icon-s-marketing"></i>产品动态</h2><br><br>
                    <div class="text item">
                      <h4>guet课程表</h4><br>
                      <h6>安全稳定，高弹性的服务</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>智慧学工</h4><br>
                      <h6>稳定，简单的服务平台</h6><br>
                    </div>
                    <div  class="text item">
                      <h4>学分制管理系统</h4><br>
                      <h6>方便，快捷的服务</h6><br>
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>


    <br><br><br>
    <div class="container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="4" >产品管理</el-menu-item>
        <el-menu-item index="5" >产品监控</el-menu-item>
        <el-menu-item index="6" >产品运维</el-menu-item>
        <el-menu-item index="7" >管理面板</el-menu-item>
      </el-menu>
    </div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-8 column">
          <el-card>
            <h3 >最近访问</h3><br>
            <el-button type="primary" plain>guet课程表</el-button>
            <el-button type="primary" plain>学分制管理系统</el-button>
            <el-button type="primary" plain>智慧学工</el-button>
            <el-button type="primary" plain>智慧校园</el-button>
          </el-card>

          <br><br>
          <el-card>
            <h3>管理工具</h3><br>
            <el-button type="primary" plain>API Explorer</el-button>
            <el-button type="primary" plain>开发者实验室</el-button>
            <el-button type="primary" plain>命令行工具</el-button>
            <el-button type="primary" plain>云+社区</el-button>
          </el-card>

          <br><br>
          <el-card>
            <h3>帮助文档</h3><br>
            <div v-for="i in help"  class="text item">
              {{i}}
            </div>
          </el-card>

        </div>
        <div class="col-md-4 column">
          <el-card>
            <div class="container">
              <div class="row clearfix">
                <div class="col-md-4 column">
                  <div class="demo-type">
                    <div>
                      <el-avatar icon="el-icon-user-solid">  </el-avatar>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 column">
                  <h4>Remains</h4>
                  账号ID ：csp1005@qq.com
                  实名认证：<el-button type="primary" plain size="small">已认证</el-button>
                </div>
              </div>
            </div>

          </el-card>
          <br><br>
          <el-card>
            <h3>最新公告</h3><br>
            <div v-for="i in news"  class="text item">
              {{i}}
            </div>

          </el-card>
        </div>
      </div>
    </div>
    <br><br>

  </div>

</template>

<script>

import pic from '../api/pic'
export default {
  name: 'product',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      news:[
        '关于校园内各运营商宽带网络业务有关事宜的公告',
        '关于加强WebVPN系统登录口令强度的通知',
        '关于面向师生员工提供WebVPN服务的通知',
        '关于对校内有线网络用户访问互联网进行认证的公告',
        '2021年国家网络安全宣传周宣传视频系列二',
        '关于参加第二十届广西高校教育教学信息化大赛的通知'
      ],
      help:[
        '师生员工如何找回智慧校园密码',
        '个人或团体如何申请报告厅',
        '个人或团体如何申请pos机',
        '校园邮箱和虚拟机的申请流程',
      ]
    }
  },
  created() {
    this.getPic()
  },
  methods: {
    getPic(){
      pic.getById()
      .then(response=>{
        console.log(response)
        this.meg1=response.data.data.pic;
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>
<style>
.rno-4-hero-group1{
  min-width: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECF0F1;
  -webkit-font-smoothing: antialiased;
  background-image: url('../assets/img/banner-pc.png');
  background-size: auto 420px;
}
.rno-4-hero{
  margin-top: -56px;
}
.rno-4-hero-inner{
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1200px;
  height: 420px;
  color: #fff;
  line-height: 1.5;
  font-size: 0;
  position: relative;
}
.rno-4-hero-ct{
  display: inline-block;
  vertical-align: middle;
  width: 480px;
  padding-top: 134px;
}
.rno-4-hero-search-hd {
  overflow: hidden;
  position: relative;
}
.rno-4-hero-tit {
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  color: #16181A;
}
.rno-4-hero-logo {
  position: absolute;
  right: -99999px;
}
.rno-4-hero-search-wrap {
  position: relative;
  margin-top: 32px;
  z-index: 10;
  border: 2px solid #FFF;
  box-shadow: 8px 8px 20px 0 rgba(55,99,170,.2);
}
.rno-4-hero-search-btn {
  width: 38px;
  border-radius: 0;
  font-size: 0;
  height: 38px;
  border: none;
  vertical-align: top;
  position: absolute;
  right: 1px;
  top: 1px;
  background-color: transparent;
  outline: 0;
}
.rno-4-hero-search-list-wrap {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: #eee 2px 2px 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.08),0 4px 6px 0 rgba(0,0,0,.1);
  z-index: 1;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
}
.rno-4-hero-search-tip {
  font-size: 14px;
  padding: 15px 0;
  text-align: left;
}
.rno-4-hero-search-input {
  display: block;
  height: 40px;
  width: 100%;
  padding: 4px 40px 4px 16px;
  font-size: 16px;
  border: none;
  appearance: none;
  box-sizing: border-box;
  background-image: linear-gradient(0deg,#FFF 0,#F3F5F8 100%);
  outline: 0;
  caret-color: #00a4ff;
}
.rno-4-hero-search-tip {
  font-size: 14px;
  padding: 15px 0;
  text-align: left;
}
.rno-4-hero-search-tip>a {
  color: #97A9BC;
  margin-right: 10px;
}
.rno-4-hero-search-tip>span {
  color: #97A9BC;
}
</style>



