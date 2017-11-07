// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//ElementUI配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//ElementUI挂载及国际化配置
Vue.use(ElementUI);

import HappyRegExp from '@/Happy_RegExp';

console.log(HappyRegExp)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
