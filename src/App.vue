<template>
	<div class="parent">
    <!-- Vue.js Component / React Component 원리 -->
    <!-- 공식문서 한 번 읽어보기 -->
    <!-- How to solve the problem!! -->

      <!-- SECTION01 -->
      <div v-if="isShow" class="container">
        <div class="title">
            <h1>Seoul, South Korea</h1>
          <p>1월 10일 월요일 오후 2시 47분</p>
          </div>  
        아 진짜 뭐라는지 하는지 모르겠다. ㅡㅡ ;;
        <div class="btn">
          <div class="btn-1" id="btn-vue">
            <button @click="showBlueLayout" 
              type="button"> Forecast </button> 
          </div>
          <div class="btn-2">
            <button type="button" @click="showRedLayout"> Air Quality </button>
          </div>
        </div>


        <section class="contents">
          <h2>-2&#8451;</h2> 
          <div class="con_rain"> 
            <img src="./image/43.png" alt="">
          </div>

          <div class="wind">
            <ul class="wind_first">
              <li>습도
                <ul>
                  <li>88%</li>
                </ul>
              </li>

              <li>풍속
                <ul>
                  <li>2m/s</li>
                </ul>
              </li>

              <li>풍향
                <ul>
                  <li>WS</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="time">
            <b>시간대별 날씨 정보</b>
            <a href=""> 이번주 날씨보기</a>

            <div class="slider">
              <ul>
                <li class="slider-1">
                  <ul>
                    <li class="slider-1-img">
                      <img src="./image/44.png" alt="">
                    </li>
                    <div class="slider-list-wrap">
                        <li>
                        2pm
                      </li>
                      <li>
                        -4&#x2103
                      </li>
                      <li>
                        <img src="./image/outline.png" alt=""> 15%
                      </li>
                    </div>
                    
                  </ul>
                </li>

                <li class="slider-1">
                  <ul>
                    <li class="slider-1-img">
                      <img src="./image/45.png" alt="">
                    </li>
                    <div class="slider-list-wrap">
                        <li>
                      4pm
                    </li>
                    <li>
                      -7&#x2103
                    </li>
                    <li>
                      <img src="./image/outline.png" alt=""> 45%
                    </li>
                    </div>
                    
                  </ul>
                </li>

                <li class="slider-1">
                  <ul>
                    <li class="slider-1-img">
                      <img src="./image/45.png" alt="">
                    </li>
                    <div class="slider-list-wrap">
                      <li>
                      6pm
                    </li>
                    <li>
                      -8&#x2103
                    </li>
                    <li>
                      <img src="./image/outline.png" alt=""> 45%
                    </li>
                    </div>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </div>

      <!-- SECTION02 -->
      <div v-else class="wrap-2">
        <div class="container">
            <div class="title">
              <h1>Seoul, South Korea</h1>
              <p>1월 10일 월요일 오후 2시 47분</p>
            </div>

            <div class="btn">
              <div class="btn-1">
                <button type="button" @click="showBlueLayout"> Forecast </button>
                
              </div>
              <div class="btn-2">
                <button type="button" onclick="#"> Air Quality </button>
              </div>
            </div>


            <section class="contents">
              <h2> 나쁨</h2>

              <div class="contents-air">
                <span>오염물질</span>
                <table>
                  <th>원</th>
                  <th>미세먼지</th>
                  <th>값</th>
                  <th>μg/m³</th>
                  <tr> <!--첫번째 줄-->
                    <td class="color-red"> </td>
                    <td>초미세먼지</td>
                    <td>65</td>
                    <td>μg/m³</td>
                  </tr>
                  <tr> <!--두번째 줄-->
                    <td class="color-org"> </td>
                    <td>미세먼지</td>
                    <td>74</td>
                    <td>μg/m³</td>
                  </tr> 
                  <tr> <!--세번째 줄-->
                    <td class="color-green"> </td>
                    <td>오존</td>
                    <td>16</td>
                    <td>μg/m³</td>
                  </tr> 
                  <tr> <!--네번째 줄-->
                    <td class="color-green"> </td>
                    <td>이산화질소</td>
                    <td>103.4</td>
                    <td>μg/m³</td>
                  </tr> 
                  <tr> <!--다섯번째 줄-->
                    <td class="color-green"> </td>
                    <td>이산화황</td>
                    <td>10.5</td>
                    <td>μg/m³</td>
                  </tr> 
                  <tr> <!--여섯번째 줄-->
                    <td class="color-green"> </td>
                    <td>일산화탄소</td>
                    <td>916</td>
                    <td>μg/m³</td>
                  </tr> 
                </table>
              </div>

              <div class="time">
                <b>시간대별 대기 정보</b>
                <a href=""> 이번주 전체보기</a>

                <div class="slider">
                  <ul class="slider-2">
                    <li class="slider-1">
                      <ul>
                        <li>2pm</li>
                        <li>매우나쁨</li>
                      </ul>              
                    </li>

                    <li class="slider-1">
                      <ul>
                        <li>4pm</li>
                        <li>매우 나쁨</li>
                      </ul>
                    </li>

                    <li class="slider-1">
                      <ul>
                        <li>6pm</li>
                        <li>매우 나쁨</li>
                      </ul>
                    </li>

                    <li class="slider-1">
                      <ul>
                        <li>8pm</li>
                        <li>매우 나쁨</li>
                      </ul>
                    </li>

                    <li class="slider-1">
                      <ul>
                        <li>10pm</li>
                        <li>매우 나쁨</li>
                      </ul>
                    </li>

                    <li class="slider-1">
                      <ul>
                        <li>4pm</li>
                        <li>매우 나쁨</li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
              

            </section>
          </div>
      </div>
	</div>
</template>

<script>
export default{
  data(){
    return{
      isShow: true,
    }
  },
  methods:{
    showBlueLayout(){
      this.isShow = true // ! 의 의미는 Not
    },
    showRedLayout(){
      this.isShow=false
    }

  }
  // data(){
  //   return {
  //     isShow: false,
  //     a:0,
  //     b:0,
  //   }
  // },
  // computed:{
  //   total(){
  //     return this.a + this.b 
  //   }
  // },
  // mounted(){
  //   this.a = 10
  //   this.clickShow()

  //   setTimeout(()=>{
  //     this.isShow = false
  //   }, 3000)
  // },
  // methods:{
  //   clickShow(){
  //     this.isShow = !this.isShow
  //     this.hand()
  //   },
  //   hand(){
  //     this.a ++
  //     console.log("total",this.total)
  //   },
  // }
}
        
</script>

<style>
.container{
  width: 390px;
  height: 844px;
  background: linear-gradient(#16455F, #0E1239);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.container .title{
  margin-top: 70px;
}

.container .title h1{
  font-size: 27px; font-weight: 700;
}

.container .title>p{
  font-size: 16px
}

/* 버튼 */

.container .btn{
  display: flex;
  margin: 29px auto 0;
  background: #052137;
  border-radius: 7px;

}

.container .btn div{
  width: 110px;
  height: 35px;
}

.container .btn .btn-1 button{




  display: inline-block;

  width: 100%;
  height: 100%;

  border-radius: 7px;
  border: none;
  background-color: #0889FF;
  color: white;
  cursor: pointer;
}

.container .btn .btn-1 input:checked ~ .wrap-2{
  display: none;
}

.container .btn .btn-2 button{
  background-color: #052137;
  border: none;
  width: 100%;
  height: 100%;
  color: #467599;
  border-radius: 8px;
  cursor: pointer;
}

/* 이미지 */

.container .contents .con_rain{
  margin-top: 18px;
}

/* 바람 */



.container .contents h2{
  font-size: 60px;
  font-weight: 700;
  margin-top: 19px;
}

.container .contents .wind ul{
  list-style: none;
  width: 53%;
  margin: 0 auto;
  padding: 0;
  display: flex;
}

.container .contents .wind .wind_first>li{
  margin: 0 9%;
  color: #799ED0;
}
.container .contents .wind .wind_first>li:nth-of-type(1){
  margin-left: 0;
}
.container .contents .wind .wind_first li ul{
  margin: 0;
}

.container .contents .wind .wind_first li ul li{
  color: #fff;
  font-size: 19px;
  font-weight: 700;
}

/* 날씨보기 */
.container .contents .time{
  margin-top: 53px;
}

.container .contents .time b{
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 67px;
}

.container .contents .time a{
  color: #0085FF;
  font-weight: 700;
}

/* 슬라이더 */

.container .contents .time .slider{
  margin-top: 28px;
  overflow: auto;
  overflow-y: scroll;
}

.container .contents .time .slider::-webkit-scrollbar{
  display: none;
}

.container .contents .time .slider ul{
  list-style: none;
  display: inline-flex;
  
}

.container .contents .time .slider ul .slider-1{
  width: 33%;
  height: 78px;
  background-color: #1B2D56;
  border-radius: 20px;
  padding: 3px;
  margin-right: 10px;
  display: inline-table;
  color: #9AA2B8;
}

.container .contents .time .slider ul .slider-1:nth-child(1){
  background-color: #0989FF;
  color: #fff;
}

.container .contents .time .slider ul li ul{
  padding: 0;
  display: flex;
}

.container .contents .time .slider ul li ul .slider-1-img{
  display: flex;
    text-align: center;
    height: 50%;
    margin: 13px 10px;
}

.container .contents .time .slider ul li ul div{
  display: flex;
    flex-direction: column;
    margin-right: 7px;
}

.container .contents .time .slider ul li ul li:nth-child(1){
  font-size: 13px;
    font-weight: 500;
}

.container .contents .time .slider ul li ul li:nth-child(2){
  font-size: 19px;
    font-weight: 700;
}

.container .contents .time .slider ul li ul li:nth-child(3){
  font-size: 13px;
    font-weight: 500;
    text-align: right;
}

/* 두번째 */

/* 배경 */
.wrap-2 .container{
  background: linear-gradient(180deg, #CB0000 0%, #0E1239 100%);

}
/* 버튼 */
.wrap-2 .container .btn{
  background-color: #370505; color: #A52727;
}

.wrap-2 .container .btn .btn-1 button{
  background-color: #370505;
    color: #A52727;
}

.wrap-2 .container .btn .btn-2 button{
  background-color: #FF0000;
  color: #fff;
}

.wrap-2 .container .contents h2{
  font-size: 40px;
}

.wrap-2 .container .contents-air{
  margin-top: 38px;
}

.wrap-2 .container .contents-air > span{
  font-size: 15px;
  font-weight: 700;
}

/* 오염물질 */

.wrap-2 .container .contents-air table{
  margin: 0 auto;
  margin-top: 35px;
  text-align: left;
}

.wrap-2 .container .contents-air table th{
  display: none;
}

/* 원 컬러 */
.wrap-2 .container .contents-air table tr td:nth-child(1){
  width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 14px;
    margin-right: 8px;
    display: block;
}
.wrap-2 .container .contents-air table tr .color-red{
  background: #FF0000;
}
.wrap-2 .container .contents-air table tr .color-org{
  background: #FF9900;
}
.wrap-2 .container .contents-air table tr .color-green{
  background: #00FF75;
}


.wrap-2 .container .contents-air table tr td:nth-child(2){
  width: 150px;
  font-size: 15px;
  font-weight: 700;
}

.wrap-2 .container .contents-air table tr td:nth-child(3){
  font-size: 21px;
  font-weight: 700;
}

/* 슬라이더 */
.wrap-2 .container .contents .time a{
  color: #FF0000;
}
.wrap-2 .container .contents .time .slider .slider-2 .slider-1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  background-color: #600B21;
}

.wrap-2 .container .contents .time .slider .slider-2 .slider-1:nth-child(1){
  background-color: #FF0000;
}

.wrap-2 .container .contents .time .slider ul li ul li:nth-child(2){
  font-size: 15px;
}

.wrap-2 .container .contents .time .slider .slider-2 li ul {
    padding: 0;
    display: flex;
    flex-direction: column;
}

</style>