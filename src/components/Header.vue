<template>
    <div class="header">
        <div class="header__text-box" @click="emitTest">
            <slot> </slot>
            <h1 class="header__text">Seoul, South Korea</h1>
            <p>1월 10일 월요일 오후 2시 47분</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    data() {
        return { isActive: false };
    },
    methods: {
        test() {
            console.log(this.isActive);
            console.log("버튼이 클릭되었습니다.");
            this.isActive = true;
            console.log(this.isActive);
            this.$emit("send-event", this.isActive);
        },
        showBlueLayout() {
            return { vlaue: true };
        },
        // Vue.js Emit Function Test
        emitTest() {
            console.log("선택되었습니다."); // 함수가 제대로 작동하는지 안하는지 테스트

            // this.$emit 이라는 Vue.js 문법을 사용하여 자식컴포넌트에서 부모컴포넌트로 이벤트를 전달한다.
            // 즉, 데이터를 보낸다.
            // 쉽게 얘기해서
            // this.$emit("보내는 사람의 이름", "선물")
            this.$emit("ParkSuBin", "GSIL 퇴사할까?");
        },
    },
};
</script>

<style scoped>
.header .header__text {
    margin-top: 70px;
}
.header .header__text-box {
    display: flex;
    flex-direction: column;

    margin-top: 70px;
}
.header .header__text-box h1 {
    font-size: 27px;
    font-weight: 700;
}

.header .header__text-box > p {
    font-size: 16px;
}

[data-theme="red"] {
    background-color: red;
}
</style>
