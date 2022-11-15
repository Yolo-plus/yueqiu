// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Collapse, CollapseItem, Avatar, Breadcrumb, BreadcrumbItem, Tabs, TabPane, Alert, Badge } from 'element-ui'
import router from './router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Alert)
Vue.use(Badge)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
