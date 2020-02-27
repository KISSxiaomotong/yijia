import Vue from 'vue'
import App from './components/App.vue'
import router from '../src/assets/js/router'
import '../src/assets/js/rem'
import '../src/assets/css/reset.css'
import '../src/assets/css/border.css'
import 'vant/lib/index.css'
import '../src/assets/css/vant.css'
import { DropdownMenu, DropdownItem, Checkbox, CheckboxGroup, Toast, Swipe, SwipeItem, Lazyload, DatetimePicker, Popup, Cell } from 'vant'
import { post, get } from '../src/assets/js/api';

Vue.config.productionTip = false;
Vue.prototype.get=get;
Vue.prototype.post = post;
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(DatetimePicker);
Vue.use(CheckboxGroup);
Vue.use(SwipeItem);
Vue.use(Checkbox);
Vue.use(Lazyload);
Vue.use(Popup);
Vue.use(Swipe);
Vue.use(Toast);
Vue.use(Cell);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
