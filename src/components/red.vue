<template>
    <div></div>
</template>

<script setup></script>

<style scoped>
.header {
    margin-top: 70px;
}
.header .header__text-box {
    display: flex;
    flex-direction: column;
}
.header .header__text-box h1 {
    font-size: 27px;
    font-weight: 700;
}

.header .header__text-box > p {
    font-size: 16px;
}
/* HEADER 버튼 */
.header .header__btn-box {
    display: flex;

    width: 224px;

    margin: 29px auto 0;
    background: red;
    border-radius: 7px;
}

.header .header__btn-box div {
    width: 110px;
    height: 35px;
}

.header .header__btn-box .btn-1 button {
    display: inline-block;

    width: 100%;
    height: 100%;

    border-radius: 7px;
    border: none;
    background-color: red;
    color: white;
    cursor: pointer;
}

.header .header__btn-box .btn-1 input:checked ~ .wrap-2 {
    display: none;
}

.header .header__btn-box .btn-2 button {
    width: 100%;
    height: 100%;

    background-color: red;
    border: none;
    color: #467599;
    border-radius: 8px;

    cursor: pointer;
}
</style>
