<template>
    <div class="header__btn-box">
        <div class="btn-1" id="btn-vue">
            <button @click="showBlueLayout" type="button">Forecast</button>
        </div>
        <div class="btn-2">
            <button type="button" @click="test">Air Quality</button>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
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

[data-theme="red"] {
    background-color: red;
}
</style>
