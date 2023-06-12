<template>
    <div>Home.vue 페이지 라우팅 테스트</div>

    <!-- <button class="button" :class="{ active: isActive }">빨강</button>
    <button class="button" :theme="'파랑'">파랑</button> -->
    <div>
        <BasicLayout v-if="type === 'Home'" :data="'blue'">
            <!-- <slot></slot> -->
            <!-- Vue.js 문법에 의해 자식컴포넌트에서 전달받은 이벤트는 '@보내는사람의 이름' 형태로 사용한다. -->
            <Header @ParkSuBin="everything"> </Header>

            <div class="header__btn-box" v-bind:class="{ active: isActive }">
                <div class="btn-1" @click="clickbtn" :dada-theme="data">
                    <button
                        @click="showBlueLayout"
                        type="button"
                        v-bind:class="{ active: isActive }"
                    >
                        Forecast
                    </button>
                </div>
                <div class="btn-2" :data-theme="$data">
                    <button type="button" v-bind:class="{ active: isActive }">
                        Air Quality
                    </button>
                </div>
            </div>
            <redBtn> </redBtn>
            <buleBtn @click="movetoredlayout"> </buleBtn>
        </BasicLayout>
        <BasicLayout
            v-if="type === 'About'"
            :data="'red'"
            class="homeBack"
            v-bind:class="{ active: isActive }"
        >
            <!-- <slot></slot> -->
            <Header> </Header>
            <redBtn>
                <!-- <p class="btnText">매우 나쁨</p> -->버튼 네임클래스
            </redBtn>
        </BasicLayout>
    </div>
</template>

<script>
import BasicLayout from "../components/BasicLayout.vue";
import redBtn from "./Redbtn.vue";
import buleBtn from "./Bulebtn.vue";
import Header from "../components/Header.vue";

export default {
    components: { BasicLayout, redBtn, buleBtn, Header },
    data() {
        return {
            type: "Home",
            test: "200",
            isActive: true,
            emitText: "",
        };
    },
    methods: {
        movetoredlayout() {
            this.type = "About";
        },
        moveToBlueLayout() {
            this.type = "Home";
        },

        clickbtn() {
            this.isActive = !this.isActive;
        },
        // 자식 컴포넌트에서 전달받은 이벤트 함수를 everything 이라는 이름의 함수로 사용하겠다고 정의
        // 이 함수 안에는 '선물'이 담겨 있는데 이것을 함수의 인자로 자동으로 파싱이 되어 있기 때문에 꺼내서 사용하면 된다.
        everything(value) {
            console.log(value);
            this.emitText = value;
            console.log(this.emitText);

            // 결론
            // 부모컴포넌트에서 자식컴포넌트로 데이터를 전달 : Props
            // 자식컴포넌트에서 부모컴포넌트로 데이터 혹은 이벤트를 전달 : emit
        },
    },
};
</script>

<style scoped>
.button {
    width: 100px;
    height: 30px;
}

.BasicLayout {
    display: flex;
}
.btnText {
    font-size: 40px;
    font-weight: 700;
}

.button.active {
    background-color: aqua;
}
[theme="빨강"] {
    background-color: red;
}
[theme="파랑"] {
    background-color: yellow;
}
.header__btn-box {
    display: flex;

    width: 220px;

    margin: 29px auto 0;
    margin-bottom: 27px;
    background: #052137;
    border-radius: 7px;
}

/* 버튼 */
.header__btn-box {
    display: flex;

    width: 220px;

    margin: 29px auto 0;
    background: #052137;
    border-radius: 7px;
}

.header__btn-box div {
    width: 110px;
    height: 35px;
}

.header__btn-box .btn-1 button {
    display: inline-block;

    width: 100%;
    height: 100%;

    border-radius: 7px;
    border: none;
    background-color: #0889ff;
    color: white;
    cursor: pointer;
}

.header__btn-box .btn-1 input:checked ~ .wrap-2 {
    display: none;
}

.header__btn-box .btn-2 button {
    width: 100%;
    height: 100%;

    background-color: #052137;
    border: none;
    color: #467599;
    border-radius: 8px;

    cursor: pointer;
}

.active {
    color: blue;
    background: beige;
}

[theme="red"] {
    background-color: red;
}

[data-theme="red"] {
    background-color: red;
}

.homeBack.active {
    background: linear-gradient(180deg, #cb0000 0%, #0e1239 100%);
}
</style>
