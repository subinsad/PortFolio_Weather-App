<template>
  <!-- SECTION01 -->
  <div class="container">
    <div class="title">
      <h1>Seoul, South Korea {{ cityName }}</h1>

      <p class="container__title__date">{{ currentTime }}요일</p>
    </div>
    <div class="btn">
      <div class="btnChange" @click="redSend">
        <button type="button">Forecast</button>
      </div>
      <div class="btnClick">
        <button type="button">Air Quality</button>
      </div>
    </div>

    <section class="contents">
      <h2>나쁨</h2>

      <div class="contents-air">
        <span>오염물질</span>
        <table>
          <th>원</th>
          <th>미세먼지</th>
          <th>값</th>
          <th>μg/m³</th>

          <tr v-for="(n, i) in data" :key="i">
            <td class="color-red" :style="{ backgroundColor: n.color }"></td>
            <td>
              {{ n.name }}
            </td>
            <td>{{ n.value }}</td>
            <td>{{ n.unit }}</td>
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
    <!-- <div id="mapContainer">
            <div id="map"></div>
        </div> -->
  </div>
</template>

<script>
import MapPositions from "../assets/map-position.json";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

export default {
  data() {
    return {
      currentTime: dayjs().format("YYYY년 MM월 DD일 ddd"),
      buttonBlue: "blue",
      buttonDarkBlue: "Darkblue",
      cityName: "",
      data: [
        {
          name: "이산화탄소",
          value: "16",
          unit: "μg/m³",
          id: 0,
          color: "#ff0000",
        },
        {
          name: "미세먼지",
          value: "74",
          unit: "μg/m³",
          id: 1,
          color: "#ff9900",
        },
        {
          name: "오존",
          value: "16",
          unit: "μg/m³",
          id: 2,
          color: "#00ff75",
        },
        {
          name: "이산화질소",
          value: "103.4",
          unit: "μg/m³",
          id: 3,
          color: "#00ff75",
        },
        {
          name: "이산화황",
          value: "10.5",
          unit: "μg/m³",
          id: 4,
          color: "#00ff75",
        },
        {
          name: "일산화탄소",
          value: "916",
          unit: "μg/m³",
          id: 5,
          color: "#00ff75",
        },
      ],
    };
  },

  mounted() {
    const API_KEY = "4ae85ced80e498887bee091005ddda4e";

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
      document.head.appendChild(script);
    }
  },
  methods: {
    redSend() {
      this.$emit("checkRed", "red");
    },

    // variable : 변할 수 있는 => 한 번 선언하면 전역에서 사용할 수 있음. => 큰 장점이면서도 큰 단점인 게 뭐냐면

    // let : 변수 / const : 상수
    // 함수 Scope
    // initMap() {
    //     const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    //     const mapOption = {
    //         center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
    //         level: 13, // 지도의 확대 레벨
    //     };

    //     const map = new kakao.maps.Map(mapContainer, mapOption);
    //     const positions = MapPosition.map((pos) => ({
    //         latlng: new kakao.maps.LatLng(...pos.latlng),
    //         cityName: pos.cityName,
    //     }));
    //     // const positions = [
    //     //     {
    //     //         latlng: new kakao.maps.LatLng(
    //     //             37.562632898194835,
    //     //             126.9454282268269
    //     //         ),
    //     //     },
    //     //     {
    //     //         latlng: new kakao.maps.LatLng(
    //     //             37.56195884514403,
    //     //             126.94922601468826
    //     //         ),
    //     //     },
    //     // ];

    //     // 마커생성
    //     positions.forEach((pos) => {
    //         const marker = new kakao.maps.Marker({
    //             positions: pos.latlng,
    //         });
    //         marker.setMap(map);
    //     });
    // },

    initMap() {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(36.73035, 127.967487), // 지도의 중심좌표
        level: 13, // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);
      const positions = MapPositions.map((pos) => ({
        latlng: new kakao.maps.LatLng(...pos.latlng),
        cityName: pos.cityName,
      }));
      // 마커를 생성합니다.
      positions.forEach((pos) => {
        const marker = new kakao.maps.Marker({
          position: pos.latlng, // 마커의 위치
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // kakao.maps.event.addListener(marker, "click", () => {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     // watch로 따로 빼지 않고, 직접 할당
        //     this.$store.commit(
        //         "openWeatherApi/SET_CITYNAME",
        //         pos.cityName
        //     );
        //     this.$store.commit(
        //         "openWeatherApi/SET_LATLON",
        //         marker.getPosition()
        //     );
        //     this.$store.dispatch(
        //         "openWeatherApi/FETCH_OPENWEATHER_API"
        //     );
        // });
        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      });
    },
  },

  created() {
    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
    const API_KEY = "a8b3133f0089755edfc62aa91f1af81e";
    let initialLat = 37.44903;
    let initialLon = 127.051974;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}`
      )
      .then((Response) => {
        console.log(Response);
        this.cityName = Response.data.sys.country; // KR
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#mapContainer {
  width: 300px;
  height: 300px;
}
#map {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 390px;
  height: 844px;
  background: linear-gradient(180deg, #cb0000 0%, #0e1239 100%);
  border-radius: 50px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.container .title {
  margin-top: 70px;
}

.container .title h1 {
  font-size: 27px;
  font-weight: 700;
}

.container .title > p {
  font-size: 16px;
}

/* 버튼 */

.container .btn {
  display: flex;

  margin: 29px auto 0;
  background-color: #370505;
  color: #a52727;
  border-radius: 7px;
}

.container .btn div {
  width: 110px;
  height: 35px;
}

.container .btn .btnClick button {
  display: inline-block;

  width: 100%;
  height: 100%;

  border-radius: 7px;
  border: none;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
}

.container .btn .btnClick input:checked ~ .wrap-2 {
  display: none;
}

.container .btn .btnChange button {
  width: 100%;
  height: 100%;

  background-color: #370505;
  border: none;
  color: #a52727;
  border-radius: 8px;

  cursor: pointer;
}

.container .contents {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* 이미지 */

.container .contents .con_rain {
  margin-top: 18px;
}

/* 바람 */

.container .contents h2 {
  font-size: 60px;
  font-weight: 700;
  margin-top: 19px;
}

.container .contents .wind ul {
  list-style: none;
  width: 53%;
  margin: 0 auto;
  padding: 0;
  display: flex;
}

.container .contents .wind .wind_first > li {
  margin: 0 9%;
  color: #799ed0;
}
.container .contents .wind .wind_first > li:nth-of-type(1) {
  margin-left: 0;
}
.container .contents .wind .wind_first li ul {
  margin: 0;
}

.container .contents .wind .wind_first li ul li {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
}

/* 날씨보기 */
.container .contents .time {
  margin-top: 53px;
  margin-bottom: 50px;
}

.container .contents .time b {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 67px;
}

.container .contents .time a {
  color: #0085ff;
  font-weight: 700;
}

/* 슬라이더 */

.container .contents .time .slider {
  margin-top: 28px;
  overflow: auto;
  overflow-y: scroll;
}

.container .contents .time .slider::-webkit-scrollbar {
  display: none;
}

.container .contents .time .slider ul {
  list-style: none;
  display: inline-flex;
}

.container .contents .time .slider ul .slider-1 {
  width: 33%;
  height: 78px;
  background-color: #1b2d56;
  border-radius: 20px;
  padding: 3px;
  margin-right: 10px;
  display: inline-table;
  color: #9aa2b8;
}

.container .contents .time .slider ul .slider-1:nth-child(1) {
  background-color: #0989ff;
  color: #fff;
}

.container .contents .time .slider ul li ul {
  padding: 0;
  display: flex;
}

.container .contents .time .slider ul li ul .slider-1-img {
  display: flex;
  text-align: center;
  height: 50%;
  margin: 13px 10px;
}

.container .contents .time .slider ul li ul div {
  display: flex;
  flex-direction: column;
  margin-right: 7px;
}

.container .contents .time .slider ul li ul li:nth-child(1) {
  font-size: 13px;
  font-weight: 500;
}

.container .contents .time .slider ul li ul li:nth-child(2) {
  font-size: 19px;
  font-weight: 700;
}

.container .contents .time .slider ul li ul li:nth-child(3) {
  font-size: 13px;
  font-weight: 500;
  text-align: right;
}

.container .contents .con_rain {
  margin-top: 18px;
}

/* 바람 */

.container .contents h2 {
  font-size: 60px;
  font-weight: 700;
  margin-top: 19px;
}

.container .contents .wind ul {
  list-style: none;
  width: 53%;
  margin: 0 auto;
  padding: 0;
  display: flex;
}

.container .contents .wind .wind_first > li {
  margin: 0 9%;
  color: #799ed0;
}
.container .contents .wind .wind_first > li:nth-of-type(1) {
  margin-left: 0;
}
.container .contents .wind .wind_first li ul {
  margin: 0;
}

.container .contents .wind .wind_first li ul li {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
}

/* 날씨보기 */
.container .contents .time {
  margin-top: 53px;
}

.container .contents .time b {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 67px;
}

.container .contents .time a {
  color: #0085ff;
  font-weight: 700;
}

/* 슬라이더 */

.container .contents .time .slider {
  margin-top: 28px;
  overflow: auto;
  overflow-y: scroll;
}

.container .contents .time .slider::-webkit-scrollbar {
  display: none;
}

.container .contents .time .slider ul {
  list-style: none;
  display: inline-flex;
}

.container .contents .time .slider ul .slider-1 {
  width: 33%;
  height: 78px;
  background-color: #1b2d56;
  border-radius: 20px;
  padding: 3px;
  margin-right: 10px;
  display: inline-table;
  color: #9aa2b8;
}

.container .contents .time .slider ul .slider-1:nth-child(1) {
  background-color: #0989ff;
  color: #fff;
}

.container .contents .time .slider ul li ul {
  padding: 0;
  display: flex;
}

.container .contents .time .slider ul li ul .slider-1-img {
  display: flex;
  text-align: center;
  height: 50%;
  margin: 13px 10px;
}

.container .contents .time .slider ul li ul div {
  display: flex;
  flex-direction: column;
  margin-right: 7px;
}

.container .contents .time .slider ul li ul li:nth-child(1) {
  font-size: 13px;
  font-weight: 500;
}

.container .contents .time .slider ul li ul li:nth-child(2) {
  font-size: 19px;
  font-weight: 700;
}

.container .contents .time .slider ul li ul li:nth-child(3) {
  font-size: 13px;
  font-weight: 500;
  text-align: right;
}

/* 두번째 */

/* 배경 */
.container {
  background: linear-gradient(180deg, #cb0000 0%, #0e1239 100%);
}
/* 버튼 */
.container .btn {
  background-color: #370505;
  color: #a52727;
}

.container .btn .btn-1 button {
  background-color: #370505;
  color: #a52727;
}

.container .btn .btn-2 button {
  background-color: #ff0000;
  color: #fff;
}

.container .contents h2 {
  font-size: 40px;
}

.container .contents-air {
  margin-top: 38px;
}

.container .contents-air > span {
  font-size: 15px;
  font-weight: 700;
}

/* 오염물질 */

.container .contents-air table {
  margin: 0 auto;
  margin-top: 35px;
  text-align: left;
}

.container .contents-air table th {
  display: none;
}

/* 원 컬러 */
.container .contents-air table tr td:nth-child(1) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 14px;
  margin-right: 8px;
  display: block;
}

.container .contents-air table tr td:nth-child(2) {
  width: 150px;
  font-size: 15px;
  font-weight: 700;
}

.container .contents-air table tr td:nth-child(3) {
  font-size: 21px;
  font-weight: 700;
}

/* 슬라이더 */
.container .contents .time a {
  color: #ff0000;
}
.container .contents .time .slider .slider-2 .slider-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  background-color: #600b21;
}

.container .contents .time .slider .slider-2 .slider-1:nth-child(1) {
  background-color: #ff0000;
}

.container .contents .time .slider ul li ul li:nth-child(2) {
  font-size: 15px;
}

.container .contents .time .slider .slider-2 li ul {
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
