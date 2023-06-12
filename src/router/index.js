import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Page from "../pages/page.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // pages : page 구분해주는 개념
        // routes : page를 관리한다.
        { path: "/", name: "Home", component: Home },
        { path: "/about", name: "About", component: About },
        // { path: "/page", name: "Page", component: Page },
    ],
});

export default router;
