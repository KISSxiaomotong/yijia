// router.js
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router
import Index from '../../components/index/Index'
import Center from '../../components/person/Center';
import Coupon from '../../components/person/Coupon';
import Mydata from '../../components/person/Mydata';
import HouseSearch from '../../components/house/HouseSearch';
import HouseDynamic from '../../components/house/HouseDynamic';
import HouseStory from '../../components/house/HouseStory';
import DynamicDetail from '../../components/house/DynamicDetail';
import HouseDetail from '../../components/house/HouseDetail';
import PreInfo from '../../components/house/PreInfo';
import Help from '../../components/house/Help';
import About from '../../components/about/About';
import News from '../../components/news/News';
import NewsDetail from '../../components/news/NewsDetail';
import Asking from '../../components/answer/Asking';
import Answer from '../../components/answer/Answer';
import Advice from '../../components/other/Advice';
import Appointment from '../../components/other/Appointment';
import Consult from '../../components/consultant/Consult';
import Consultant from '../../components/consultant/Consultant';
import Register from '../../components/person/Register';
import Login from '../../components/person/Login';
import Message from '../../components/assembly/Message';
import Car from '../../components/assembly/Car';
import CouponPopup from '../../components/assembly/CouponPopup';
import SearchDetail from '../../components/house/SearchDetail';

Vue.use(Router) //使用vue-router

export default new Router({
    mode: 'history',
    routes:[
        { path: "/", name: "index", component: Index},
        { path: "/center", name: "center", component: Center},
        { path: "/coupon", name: "coupon", component: Coupon},
        { path: "/mydata", name: "coupon", component: Mydata},
        { path: "/HouseSearch", name: "HouseSearch", component: HouseSearch},
        { path: "/HouseDynamic", name: "HouseDynamic", component: HouseDynamic},
        { path: "/HouseStory", name: "HouseStory", component: HouseStory},
        { path: "/HouseDetail", name: "HouseDetail", component: HouseDetail},
        { path: "/Preinfo", name: "PreInfo", component: PreInfo},
        { path: "/Help", name: "Help", component: Help},
        { path: "/DynamicDetail", name: "DynamicDetail", component: DynamicDetail},
        { path: "/Asking", name: "Asking", component: Asking},
        { path: "/Answer", name: "Answer", component: Answer},
        { path: "/About", name: "About", component: About},
        { path: "/News", name: "News", component: News},
        { path: "/NewsDetail", name: "NewsDetail", component: NewsDetail},
        { path: "/Advice", name: "Advice", component: Advice},
        { path: "/Appointment", name: "Advice", component:Appointment},
        { path: "/Consult", name: "Consult", component:Consult},
        { path: "/Consultant", name: "Consultant", component:Consultant},
        { path: "/Register", name: "Register", component:Register},
        { path: "/Login", name: "Login", component:Login},
        { path: "/Message", name: "Message", component:Message},
        { path: "/Car", name: "Message", component:Car},
        { path: "/CouponPopup", name: "CouponPopup", component:CouponPopup},
        { path: "/SearchDetail", name: "SearchDetail", component:SearchDetail}
    ]
})