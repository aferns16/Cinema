import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueYoutube from "vue-youtube";
import "font-awesome/css/font-awesome.min.css";
import store from './store'

//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/src/components/VueFontawesome.vue").default
);

Vue.config.productionTip = false;

Vue.use(VueYoutube);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
