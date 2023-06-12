<template>
    <div>
        <div class="header__btn-box">
            <div class="btn-1">
                <button @click="showBlueLayout" type="button">Forecast</button>
            </div>
            <div
                class="btn-2"
                v-bind:class="{ active: isActive }"
                :data-theme="$data"
            >
                <button type="button" @click="actived">Air Quality</button>
            </div>
        </div>
        <div @click="actived">dkssud</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return { isActive: true };
    },

    methods: {
        actived() {
            {
                this.isActive = !this.isActive;
                console.log("ddd");
            }
        },
    },
};
</script>

<style scoped>
.header__btn-box {
    display: flex;

    width: 220px;

    margin: 29px auto 0;
    margin-bottom: 27px;
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
    background-color: #370505;
    color: #a52727;
    cursor: pointer;
}

.header__btn-box .btn-1 input:checked ~ .wrap-2 {
    display: none;
}

.header__btn-box .btn-2 button {
    width: 100%;
    height: 100%;

    background-color: #ff0000;
    border: none;
    color: white;
    border-radius: 8px;

    cursor: pointer;
}

[data-theme="red"] {
    background-color: red;
}

.active {
    color: blue;
    background: beige;
}
</style>
