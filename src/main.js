import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./style/index.css"    // 全局样式
import myplugin from './plugins/myplugins.js'
Vue.use(ElementUI);
Vue.use(myplugin)

Vue.config.productionTip = false;
// 拦截axios
if(process.env.NODE_ENV==='development'){
  require('./mock/index.js')
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
