<template>
  <!-- SECTION 01 -->
  <div class="container">
    <div class="container__title">
      <h1 class="container__title__cityName">
        Seoul, South Korea {{ cityName }}
      </h1>
      <p class="container__title__date">{{ currentTime }}요일</p>
    </div>
    <div class="container__filter-box">
      <div class="container__filter-box__button-box">
        <button type="button" class="button" :theme="buttonBlue">
          Forecast
        </button>
      </div>
      <div class="container__filter-box__button-box">
        <button
          type="button"
          class="button"
          @click="blueSend"
          :theme="buttonDarkBlue"
        >
          Air Quality
        </button>
      </div>
    </div>

    <section class="container__contents-box">
      <h2>-2&#8451;</h2>
      <div class="container__contents-box__image-box">
        <img src="../image/43.png" alt="" />
      </div>

      <div class="container__contents-box__text-box">
        <ul class="wind">
          <li>
            습도
            <ul>
              <li>88%</li>
            </ul>
          </li>

          <li>
            풍속
            <ul>
              <li>2m/s</li>
            </ul>
          </li>

          <li>
            풍향
            <ul>
              <li>WS</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="container__contents-box__time-box">
        <b>시간대별 날씨 정보</b>
        <a href=""> 이번주 날씨보기</a>
        <div class="slider">
          <ul class="slider__slider-checked">
            <li class="slider__slider-checked__list-box">
              <ul class="image-box">
                <li class="image-box__image-detail">
                  <img src="../image/44.png" alt="" />
                </li>
                <div class="image-box__text-detail">
                  <li>2pm</li>
                  <li>-4&#8451;</li>
                  <li>
                    <img src="../image/outline.png" alt="" />
                    15%
                  </li>
                </div>
              </ul>
            </li>

            <li class="slider__slider-checked__list-box">
              <ul class="image-box">
                <li class="image-box__image-detail">
                  <img src="../image/45.png" alt="" />
                </li>
                <div class="image-box__text-detail">
                  <li>4pm</li>
                  <li>-7&#8451;</li>
                  <li>
                    <img src="../image/outline.png" alt="" />
                    45%
                  </li>
                </div>
              </ul>
            </li>

            <li class="slider__slider-checked__list-box">
              <ul class="image-box">
                <li class="image-box__image-detail">
                  <img src="../image/44.png" alt="" />
                </li>
                <div class="image-box__text-detail">
                  <li>6pm</li>
                  <li>-8&#8451;</li>
                  <li>
                    <img src="../image/outline.png" alt="" />
                    45%
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
    };
  },

  methods: {
    blueSend() {
      this.$emit("checkBlue", "Blue");
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

<style lang="scss" scoped>
//파란색 설정
$bluecolor: #0889ff;

//클릭 박스설정
@mixin set-box {
  width: 100%;
  height: 100%;

  border-radius: 7px;
  border: none;

  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;

  width: 390px;
  height: 844px;

  color: #fff;
  text-align: center;
  background: linear-gradient(#16455f, #0e1239);
  border-radius: 50px;

  &__title {
    margin-top: 70px;

    &__cityName {
      font-size: 27px;
      font-weight: 700;
    }
    &__date {
      font-size: 16px;
    }
  }
  &__filter-box {
    display: flex;

    margin: 29px auto 0;
    background: #052137;
    border-radius: 7px;

    &__button-box {
      width: 110px;
      height: 35px;

      .button {
        @include set-box;

        &[theme="blue"] {
          background-color: $bluecolor;
          color: #fff;
        }
        &[theme="Darkblue"] {
          background-color: #052137;
          color: #467599;
        }
      }
    }
  }

  //바람
  &__contents-box {
    //이미지
    &__image-box {
      margin-top: 18px;
    }

    h2 {
      font-size: 60px;
      font-weight: 700;
      margin-top: 19px;
    }

    &__text-box {
      ul {
        display: flex;

        width: 53%;
        margin: 0 auto;
        padding: 0;

        list-style: none;
      }
      .wind {
        & > li {
          margin: 0 9%;
          color: #799ed0;

          &:nth-of-type(1) {
            margin-left: 0;
          }
        }

        li ul {
          margin: 0;

          li {
            color: #fff;
            font-size: 19px;
            font-weight: 700;
          }
        }
      }
    }

    //날씨보기
    &__time-box {
      margin-top: 53px;

      b {
        margin-right: 67px;

        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
      }

      a {
        color: $bluecolor;
        font-weight: 700;
      }

      //슬라이더

      .slider {
        margin-top: 28px;
        overflow: auto;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        &__slider-checked {
          display: inline-flex;

          list-style: none;

          &__list-box {
            display: inline-table;

            padding: 3px;
            margin-right: 10px;

            width: 33%;
            height: 78px;

            background-color: #1b2d56;
            border-radius: 20px;
            color: #9aa2b8;

            &:nth-child(1) {
              background-color: $bluecolor;
              color: #fff;
            }
            .image-box {
              display: flex;

              padding: 0;

              &__image-detail {
                display: flex;

                margin: 13px 10px;

                height: 50%;
                text-align: center;
              }

              &__text-detail {
                display: flex;
                flex-direction: column;

                margin-right: 7px;

                list-style: none;
              }

              li {
                &:nth-child(1) {
                  font-size: 13px;
                  font-weight: 500;
                }

                &:nth-child(2) {
                  font-size: 19px;
                  font-weight: 700;
                }

                &:nth-child(3) {
                  font-size: 12px;
                  font-weight: 500;
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
