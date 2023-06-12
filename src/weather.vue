<template>
  <!-- SECTION01 -->
  <div class="container">
      <div class="title">
          <h1>Seoul, South Korea</h1>
        <p>1월 10일 월요일 오후 2시 47분</p>
        </div>  
      <div class="btn">
        <div class="btnClick" >
          <button
            type="button"> Forecast </button> 
        </div>
        <div class="btnChange"  @click="blueSend">
          <button type="button"> Air Quality </button>
        </div>
      </div>


      <section class="contents">
        <h2>-2&#8451;</h2> 
        <div class="con_rain"> 
          <img src="../image/43.png" alt="">
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
                    <img src="../image/44.png" alt="">
                  </li>
                  <div class="slider-list-wrap">
                      <li>
                      2pm
                    </li>
                    <li>
                      -4&#x2103
                    </li>
                    <li>
                      <img src="../image/outline.png" alt=""> 15%
                    </li>
                  </div>
                  
                </ul>
              </li>

              <li class="slider-1">
                <ul>
                  <li class="slider-1-img">
                    <img src="../image/45.png" alt="">
                  </li>
                  <div class="slider-list-wrap">
                      <li>
                    4pm
                  </li>
                  <li>
                    -7&#x2103
                  </li>
                  <li>
                    <img src="../image/outline.png" alt=""> 45%
                  </li>
                  </div>
                  
                </ul>
              </li>

              <li class="slider-1">
                <ul>
                  <li class="slider-1-img">
                    <img src="../image/44.png" alt="">
                  </li>
                  <div class="slider-list-wrap">
                    <li>
                    6pm
                  </li>
                  <li>
                    -8&#x2103
                  </li>
                  <li>
                    <img src="../image/outline.png" alt=""> 45%
                  </li>
                  </div>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
export default {
  methods: {

      blueSend() {
          this.$emit("checkBlue", "Blue");
      },
  },
};
</script>

<style scoped>



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

.container .btn .btnClick button{

display: inline-block;

width: 100%;
height: 100%;

border-radius: 7px;
border: none;
background-color: #0889FF;
color: white;
cursor: pointer;
}

.container .btn .btnClick input:checked ~ .wrap-2{
display: none;
}

.container .btn .btnChange button{
width: 100%;
height: 100%;

background-color: #052137;
border: none;
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
</style>
