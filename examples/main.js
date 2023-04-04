import Vue from 'vue'
import App from './App.vue'

import 'cly-ui/dist/css/index.css';
import clyUI from 'cly-ui';
Vue.use(clyUI);

// import '../components/css/demo.scss'
// import Demo from '../components/lib/demo/index'

// import '../components/css/card.scss'
// import Card from '../components/lib/card/index'

// Vue.use(Demo)
// Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
