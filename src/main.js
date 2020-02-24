import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

/* ここから */
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
/* ここまで */

Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
  render: h => h(App)
}).$mount("#app");
