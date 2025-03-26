import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import axios from "axios";
import "./index.css";

const app = createApp(App);
app.mount("#app");
app.use(PrimeVue);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.config.globalProperties.axios = axios;
app.use(router);
