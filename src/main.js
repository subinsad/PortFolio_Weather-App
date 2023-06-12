import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "../src/router/index";

createApp(App).use(router).mount("#app");
