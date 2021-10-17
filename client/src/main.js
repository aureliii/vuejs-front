import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//Vue.config.productionTip = false;


// Is there is any token then we will simply append default axios authorization headers

const app = createApp(App).use(store).use(router)
app.config.globalProperties.$http=axios
const token = localStorage.getItem("token");  
app.mount('#app')
//app.config.productionTip = false
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}

//createApp(App).use(store).use(router).mount('#app')
