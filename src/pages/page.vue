<template>
    <div @subin="btnRed" class="redBtn" :class="{ active: !isActive }">
        <bluePage
            @checkBlue="btnBlue"
            :class="{ active: isActive }"
            class="blueBtn"
        >
        </bluePage>
    </div>

    <div @checkBlue="btnBlue" :class="{ active: isActive }" class="blueBtn">
        <RedPage @subin="btnRed" :class="{ active: !isActive }" class="redBtn">
        </RedPage>
    </div>
</template>

<script>
import BluePage from "../components/bluePage.vue";
import RedPage from "../components/RedPage.vue";

export default {
    components: { BluePage, RedPage },

    data() {
        return {
            isActive: true,
        };
    },

    methods: {
        btnBlue(value) {
            console.log(value);
            this.isActive = !this.isActive;
        },

        btnRed(value) {
            console.log(value);
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>
.blueBtn.active {
    display: none;
}
.blueBtn {
    display: block;
}

.redBtn.active {
    display: none;
}
</style>
