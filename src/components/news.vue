<template>
  <div>

    <div class="rno-4-hero-group">
      <div class="rno-4-hero">
        <div class="rno-4-hero-inner">
        <figure class="rno-4-hero-ct">
          <div class="rno-4-hero-search-hd">
            <h2 class="rno-4-hero-tit">新闻资讯</h2>
            <img class="rno-4-hero-logo" src="https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/platform/documents/css/img/rno-4-hero-logo.png" alt="文档中心">
          </div><div class="rno-4-hero-search-wrap"><input type="text" class="rno-4-hero-search-input" placeholder="请输入关键词搜索新闻" value="">
          <button class="rno-4-hero-search-btn" hotrep="document.home.banner.search">查询</button>
          <div class="rno-4-hero-search-list-wrap">
            <ul class="rno-4-hero-search-list rno-scrollbar" ></ul>
          </div>
        </div>
          <div class="rno-4-hero-search-tip">
            <span>搜索热词：</span>
            <a hotrep="document.home.hotwords.cvm" target="_blank" href="/search/%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8/15_1">卫星导航</a>
            <a hotrep="document.home.hotwords.tencent-db" target="_blank" href="/search/%E4%BA%91%E6%95%B0%E6%8D%AE%E5%BA%93/15_1">集成电路</a>
            <a hotrep="document.home.hotwords.ba" target="_blank" href="/search/%E7%BD%91%E7%AB%99%E5%A4%87%E6%A1%88/15_1">党史教育</a>
            <a hotrep="document.home.hotwords.cos" target="_blank" href="/search/%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8/15_1">军工企业</a>
            <a hotrep="document.home.hotwords.mlvb" target="_blank" href="/search/%E7%A7%BB%E5%8A%A8%E7%9B%B4%E6%92%AD/15_1">现代化产业</a>
          </div>
        </figure>
       </div>
      </div>

    </div>

    <div class="container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="4" >通知公告</el-menu-item>
        <el-menu-item index="5" >招标公示</el-menu-item>
        <el-menu-item index="6" >企业活动</el-menu-item>
        <el-menu-item index="7" >科技交流</el-menu-item>
        <el-menu-item index="8" >行业动态</el-menu-item>
      </el-menu>
    </div>

    <div class="container" style="margin-top:30px">
      <div class="row">
        <div class="col-sm-4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h2>热点新闻动态</h2>
            </div>
            <div v-for="(i,index) in list"  class="text item">
              <a>{{index+1+'、'+i}}<br></a>
            </div>
          </el-card>
          <br><br><br>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h2>关注</h2>
            </div>
            <div v-for="(i,index) in focus"  class="text item">
              {{index+1+'、'+i}}
            </div>
          </el-card>
          <hr class="d-sm-none">
        </div>
        <div class="col-sm-8">
          <h2>推荐</h2>
          <br>
          <el-card>
            <div>
              <div class="row clearfix">
                <div class="col-md-12 column">
                  <div class="row">
                    <div class="col-md-6">
                        <img src="../assets/img/new3.jpg" class="fakeimg" >
                    </div>
                    <div class="col-md-4">
                      {{ megs[0]}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
          <br><br><br>
          <el-card>
            <div>
              <div class="row clearfix">
                <div class="col-md-12 column">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="../assets/img/new4.jpg" class="fakeimg" >
                    </div>
                    <div class="col-md-4">
                      {{megs[1]}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
          <br><br><br>
          <el-card>
            <div>
              <div class="row clearfix">
                <div class="col-md-12 column">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="../assets/img/new5.jpg" class="fakeimg" >
                    </div>
                    <div class="col-md-4">
                      {{ megs[2] }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

        </div>
      </div>
    </div>

  </div>

</template>

<script>

import pic from '../api/pic'
export default {
  name: 'news',
  data () {
    return {
      num: 1,
      megs:[
        '10月31日，我校第五届学术委员会第六次全体会议在金鸡岭校区10教召开。会议主要审议了发展规划处提交的《申报新一轮广西一流学科建设项目议题》，经讨论、审核、表决，决定我校拟申报新一轮广西一流学科A类7个、B类3个。会议由副主任委员、副校长张文涛主持。',
        '10月30日上午，由我校与上海大饱球信息科技有限公司联合主办的第三届5G、AI、IoT芯片生态发展论坛暨机器人开发大赛颁奖大会在我校花江校区会议中心大礼堂举行。',
        '10月30日，由广西本科高校材料类教学指导委员会主办，我校材料科学与工程学院承办的2021年广西本科高校材料类教学指导委员会全体会议暨专家论坛在桂林召开。'
      ],
      activeIndex: '1',
      activeIndex2: '1',
      list:[
        '《广西日报》聚焦我校课程改革创新纪实',
        '教学实践部直属党支部开展乡村振兴活动',
        '卫星导航定位与位置服务国家地方联合工程研究中心顺利通过验收',
        '学校举办集成电路学院高端论坛',
        '2021年广西本科高校材料类教学指导委员会全体会议暨专家论坛在桂林召开',
        '我校微电子科学与工程专业接受中国工程教育专业认证考查',
        '校领导带队到北海市开展政产学研合作交流',
        '我校召开2022年度国家自然科学基金申报工作部署会暨广西科技重大专项申报推进会',
        '我校仪器科学与技术专业硕士研究生田阳阳获CSC国家公派留学资格',
        '2022届广西高校毕业生军工类企业双选会在我校举行'
      ],
      focus:[
        '计算机与信息安全学院组织教师观看“时代楷模”张桂梅先进事迹教育片',
        '计算机与信息安全学院召开意识形态与安全稳定工作推进会\n',

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
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>
<style>
.fakeimg {
  height: 200px;
  background: #aaa;
  width: 300px;
}
</style>
<style>
.rno-4-hero-group{
  min-width: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECF0F1;
  -webkit-font-smoothing: antialiased;
  background-image: url('../assets/img/img.png');
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



