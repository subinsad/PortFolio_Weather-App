<template>
  <div @checkRed="btnRed" class="blueBtn" :class="{ active: isActive }">
    <bluePage @checkBlue="btnBlue" class="blueBtn"> </bluePage>
  </div>

  <div @checkBlue="btnBlue" :class="{ active: !isActive }" class="blueBtn">
    <RedPage @checkRed="btnRed" class="redBtn"> </RedPage>
  </div>
</template>

<script>
import BluePage from "./components/bluePage.vue";
import RedPage from "./components/RedPage.vue";

export default {
  components: { BluePage, RedPage },

  data() {
    return {
      isActive: false,
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
  display: flex;
}
</style>
