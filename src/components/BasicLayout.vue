<template>
    <div class="basic-layout" :data-theme="data">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: String,
            required: true,
        },
    },

    data() {},
};
</script>

<style scoped>
.basic-layout {
    width: 390px;
    height: 844px;

    color: #fff;
    text-align: center;
}
[data-theme="blue"] {
    background: linear-gradient(#16455f, #0e1239);
}
[data-theme="red"] {
    background: linear-gradient(180deg, #cb0000 0%, #0e1239 100%);
}
</style>
