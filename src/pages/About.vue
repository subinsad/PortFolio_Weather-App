<template>
    <div>about.vue 페이지 라우팅 테스트</div>
    <BasicLayout :type="type">
        <!-- <slot></slot> -->
        <Header />
        <!-- <SimpleData /> 예시 -->
    </BasicLayout>
</template>

<script>
import BasicLayout from "../components/BasicLayout.vue";
import Header from "../components/Header.vue";

export default {
    components: { BasicLayout, Header },
    data() {
        return {
            type: "About",
        };
    },
};
</script>

<style lang="scss" scoped></style>
