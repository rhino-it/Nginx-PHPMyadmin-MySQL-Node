require('./bootstrap');

import { createApp } from "vue";
import Welcome from "./component/Welcome.vue";


const app = createApp({
    components: {       
        Welcome,
    }
}).mount("#app")