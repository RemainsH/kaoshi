<template>
  <div>

    <!--幻灯片-->
    <div >
      <el-carousel :interval="5000" arrow="always" :height="banH +'px'">
        <el-carousel-item v-for="img in banImgList" :key="img.id">
          <img :src="img.image" class="picImg" width="100%" height="100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <br><br><br>


    <div  style="padding-left: 200px;padding-right: 200px">
        <div class="row clearfix">
          <div class="col-md-6 column">
            <h2>关于我们</h2>
            <br>
            <el-card>
              <div>
                <img src="../assets/img/index1.png" width="720" height="450">
              </div>
            </el-card>
          </div>
          <div class="col-md-6 column">
            <br><br><br><br><br>
            <el-card>
              <div>
                <h3>
                桂林电子科技大学坐落于世界著名的风景游览城市和中国历史文化名城桂林市，是国家工业和信息化部、国家国防科技工业局与广西共建高校、国家“中西部高校基础能力建设工程”入选高校、广西重点建设高校。
                学校始建于1960年，1980年经国务院批准成立桂林电子工业学院，2006年更名为桂林电子科技大学。学校先后隶属于第四机械工业部、电子工业部、机械电子工业部、中国电子工业总公司、信息产业部。2000年管理体制转为中央与地方共建、以地方管理为主。1990年，时任中共中央总书记江泽民同志亲临学校视察，并为学校亲笔题词“为发展电子工业培养更多的合格人才”。学校蝉联“全国文明校园”荣誉称号。
                </h3>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    <br><br><br>

    <div style="background:#EAF1FD">
      <div style="padding-left: 200px;padding-right: 200px">
        <div class="row clearfix">
          <div class="col-md-6 column" >
            <el-card body-style='padding:0px'>
              <img src="../assets/img/index4.jpg" height="500" width="800">
              <br>
              <h1 style="text-align: center">合作生态</h1>
              <br><br>
            </el-card>
          </div>
          <div class="col-md-6 column" >
            <el-card body-style='padding:0px'>
              <img src="../assets/img/index6.jpg" height="500" width="800">
              <br>
              <h1 style="text-align: center">专业介绍</h1>
              <br><br>
            </el-card>
            <br><br>
          </div>



          <div class="col-md-6 column" >
            <el-card body-style='padding:0px'>
              <img src="../assets/img/index5.jpg" height="500" width="800">
              <br>
              <h1 style="text-align: center">交流学习</h1>
              <br><br>
            </el-card>
          </div>
          <div class="col-md-6 column" >
            <el-card body-style='padding:0px'>
              <img src="../assets/img/index7.jpg" height="500" width="800">
              <br>
              <h1 style="text-align: center">文化底蕴</h1>
              <br><br>
            </el-card>
          </div>

        </div>
      </div>
    </div>

    <br><br><br>
    <div  style="padding-left: 200px;padding-right: 200px">
      <h2>专题网站</h2>
      <br>
      <el-card>
        <div class="row clearfix">
          <div class="col-md-4 column">
            <img src="../assets/img/1.jpg" height="100%" width="100%">
          </div>
          <div class="col-md-4 column">
            <img src="../assets/img/2.jpg" height="100%" width="100%">
          </div>
          <div class="col-md-4 column">
            <img src="../assets/img/3.jpg" height="100%" width="100%">
          </div>
        </div>
      </el-card>
    </div>

    <br><br><br>


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

      banImgList: [

        {id: 0, image: require('../assets/img/index1.jpg')},

        {id: 1, image: require('../assets/img/index2.jpg')},


      ],
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<style>
p {text-indent:2em;}
</style>
<style>
.t_img{
  height:128px;
  width:200px;
}
</style>
