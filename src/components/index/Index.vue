<template>
    <div id="index">
        <div class="header">
            <div class="down"><p>南昌</p></div>
            <span class="user" @click="center()">
                <img src="../../assets/images/user.png" />
            </span>
            <div class="input">
                <input type="text" placeholder="请输入楼盘名或区域名" v-model="name" @keyup="search($event)">
            </div>
        </div>
        <div class="icon">
            <ul>
                <li><router-link to="/HouseSearch"><img src="../../assets/images/icon1.jpg"/><span>楼盘查询</span></router-link></li>
                <li><router-link to="/Help"><img src="../../assets/images/icon2.jpg"/><span>帮我找房</span></router-link></li>
                <li><router-link to="/Consult"><img src="../../assets/images/icon3.jpg"/><span>咨询师</span></router-link></li>
                <li><router-link to="/Appointment"><img src="../../assets/images/icon4.jpg"/><span>预约专车</span></router-link></li>
            </ul>
            <ul>
                <li><router-link to="/HouseStory"><img src="../../assets/images/icon5.jpg"/><span>买房故事</span></router-link></li>
                <li><router-link to="/Asking"><img src="../../assets/images/icon6.jpg"/><span>买房问问</span></router-link></li>
                <li><router-link to="/About"><img src="../../assets/images/icon7.jpg"/><span>关于我们</span></router-link></li>
                <li><router-link to="/News"><img src="../../assets/images/icon8.jpg"/><span>行业资讯</span></router-link></li>
            </ul>
        </div>
        <div class="news">
           <img src="../../assets/images/material/news.jpg">
            <ul>
                <li v-for="(item,index) in news" :key="index"><router-link :to="{path:'/NewsDetail',query: {id: item.id}}">{{item.title}}</router-link></li>
            </ul>
        </div>
        <div class="recommend">
            <div class="recommend_title">
                <h2>品质推荐</h2>
                <router-link to="/HouseSearch"><h3>更多楼盘</h3></router-link>
            </div>
            <div class="recommend_content">
                <div v-for="(item,index) in recommend" :key="index" @click="toHouse(item.id)">
                    <div class="position">
                        <img :src="item.cover">
                        <p>优质推荐</p>
                    </div>
                    <h3>{{item.title}}</h3>
                    <span>{{Math.round(item.areaMin)}}-{{Math.round(item.areaMax)}}㎡</span>
                    <p>{{item.unitPriceMin}}<span>元/m²</span></p>
                </div>
            </div>
        </div>
        <div class="house">
            <div class="house_title">
                <h2>一房一价</h2>
                <router-link to="/HouseSearch"><h3>更多楼盘</h3></router-link>
            </div>
            <div class="house_select">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="checkedPriceArea" :options="priceArea" @change="changePriceArea()" />
                    <van-dropdown-item v-model="checkedPriceApartment" :options="priceApartment" @change="changePriceApartment()"/>
                    <van-dropdown-item v-model="checkedPriceScreen" :options="priceScreen" @change="changePriceScreen()"/>
                </van-dropdown-menu>
            </div>
            <div class="house_content" ref="house">
                <div v-for="(item,index) in price" :key="index" @click="toHouse(item.id)">
                    <div class="position">
                        <img :src="item.cover">
                        <p>优质推荐</p>
                    </div>
                    <h3>{{item.title}}</h3>
                    <span>{{Math.round(item.areaMin)}}-{{Math.round(item.areaMax)}}㎡</span>
                    <p>{{item.unitPriceMin}}<span>元/m²</span></p>
                </div>
            </div>
        </div>
        <div class="consult">
            <div class="consult_top">
                <h2>咨询师</h2>
                <router-link to="/Consult"><h3>查看更多</h3></router-link>
            </div>
            <div class="consult_middle" @click="toConsult(consult.id)">
               <div class="consult_content">
                   <h4>{{consult.name}}<p>{{consult.university}}</p></h4>
                   <p>{{consult.slogan}}</p>
                   <span @click.stop="openwin()">在线咨询</span>
               </div>
                <div class="consult_image">
                    <img :src="consult.headPortrait">
                </div>
            </div>
            <div class="consult_bottom">
                <p @click="changeConsult(consult.key)"><span>换一换</span></p>
            </div>
        </div>
        <div class="build">
            <div class="build_title">
                <h2>推荐楼盘</h2>
                <router-link to="/HouseSearch"><h3>更多楼盘</h3></router-link>
            </div>
            <div class="build_select">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="checkedHouseArea" :options="houseArea" @change="changeArea()"/>
                    <van-dropdown-item v-model="checkedHousePrice" :options="housePrice" @change="changePrice()"/>
                    <van-dropdown-item v-model="checkedHouseApartment" :options="houseApartment" @change="changeApartment()"/>
                    <van-dropdown-item v-model="checkedHouseScreen" :options="houseScreen" @change="changeScreen()"/>
                    <van-dropdown-item v-model="checkedHouseOrder" :options="houseOrder" @change="changeOrder()"/>
                </van-dropdown-menu>
            </div>
            <div id="pull">
                <pull-to :bottom-load-method="more" :is-top-bounce=topBounce class="file_lists">
                    <div class="build_content">
                        <div v-for="(item,index) in house" :key="index" @click="toHouse(item.id)">
                            <div class="build_image">
                                <img :src="item.cover">
                            </div>
                            <div class="build_detail">
                                <h4>{{item.name}}<span>在售</span></h4>
                                <p>地址：{{item.address}}</p>
                                <h5>{{item.opening | dateFormat()}} · {{item.opening}}</h5>
                                <h3>{{item.unitPriceMin}}<span>元/m²</span><p>{{item.areaMin}}-{{item.areaMax}}㎡</p></h3>
                            </div>
                        </div>
                    </div>
                </pull-to>
            </div>
            <p class="record"><a href="http://www.beian.miit.gov.cn" target="_blank">鄂ICP备20003183号</a></p>
        </div>
        <Footer></Footer>
        <CouponPopup ref="coupon"></CouponPopup>
        <Login ref="login" @toRegister="toRegister"></Login>
        <Register ref="register"  @toLogin="toLogin"></Register>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    import CouponPopup from "../assembly/CouponPopup";
    import Login from "../person/Login";
    import Register from "../person/Register";
    import PullTo from 'vue-pull-to'
    export default {
        name: 'Index',
        components: {Footer,CouponPopup,Login,Register,PullTo},
        props: {

        },
        data (){
            return {
                name: "",
                notLogin: this.$route.query.notLogin,
                houseArea: [],
                priceArea: [],
                housePrice: [
                    { text: '价格', value: '0,3000'},
                    { text: '50万以下', value: '0,50'},
                    { text: '50-80万', value: '50,80'},
                    { text: '80-100万', value: '80,100'},
                    { text: '100-120万', value: '100,120'},
                    { text: '120-150万', value: '120,150'},
                    { text: '150-200万', value: '150,200'},
                    { text: '200-300万', value: '200,300'},
                    { text: '300万以上', value: '300,3000'}
                ],
                houseApartment: [
                    { text: '户型', value: 0},
                    { text: '一居', value: 1},
                    { text: '二居', value: 2},
                    { text: '三居', value: 3},
                    { text: '四居', value: 4},
                    { text: '五居及以上', value: 5},
                ],
                priceApartment: [
                    { text: '户型', value: 0},
                    { text: '一居', value: 1},
                    { text: '二居', value: 2},
                    { text: '三居', value: 3},
                    { text: '四居', value: 4},
                    { text: '五居及以上', value: 5},
                ],
                houseScreen: [
                    { text: '面积', value: '0,2000'},
                    { text: '<50m²', value: '0,50'},
                    { text: '50-80m²', value: '50,80'},
                    { text: '80-120m²', value: '80,120'},
                    { text: '120-140m²', value: '120,140'},
                    { text: '140-160m²', value: '140,160'},
                    { text: '>160m²', value: '160,2000'}
                ],
                priceScreen: [
                    { text: '面积', value: '0,2000'},
                    { text: '<50m²', value: '0,50'},
                    { text: '50-80m²', value: '50,80'},
                    { text: '80-120m²', value: '80,120'},
                    { text: '120-140m²', value: '120,140'},
                    { text: '140-160m²', value: '140,160'},
                    { text: '>160m²', value: '160,2000'}
                ],
                houseOrder: [
                    { text: '排序', value: 0},
                    { text: '总价排序', value: 1},
                    { text: '单价排序', value: 2},
                    { text: '时间排序', value: 3},
                ],
                checkedHouseArea: 0,
                checkedPriceArea: 0,
                checkedHousePrice: '0,3000',
                checkedHouseApartment: 0,
                checkedPriceApartment: 0,
                checkedHouseScreen: '0,2000',
                checkedPriceScreen: '0,2000',
                checkedHouseOrder: 0,
                recommend: [],
                price: [],
                consult: {},
                consultation: {},
                house: [],
                news: {},
                map:{},
                page:1,
                num:6,
                topBounce:false
            }
        },
        methods: {
            changeArea: async function (){
                if(this.checkedHouseArea == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":6});
                    this.house = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":6,"regionId":this.checkedHouseArea});
                    this.map = {"regionId":this.checkedHouseArea};
                    this.reset("area");
                    this.house = res.data.data.objs;
                }
            },
            changePrice: async function (){
                let price = this.checkedHousePrice;
                price = price.split(",");
                let totalPriceMin = price[0];
                let totalPriceMax = price[1];
                let res = await this.post('properties/selpage', {"current":1,"num":6,"totalPriceMin":totalPriceMin,"totalPriceMax":totalPriceMax});
                this.map = {"totalPriceMin":totalPriceMin,"totalPriceMax":totalPriceMax};
                this.reset("price");
                this.house = res.data.data.objs;
            },
            changeApartment: async function (){
                if(this.checkedHouseApartment == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":6});
                    this.house = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":6,"hxing":this.checkedHouseApartment});
                    this.map = {"hxing":this.checkedHouseApartment};
                    this.reset("apartment");
                    this.house = res.data.data.objs;
                }
            },
            changeScreen: async function (){
                let screen = this.checkedHouseScreen;
                screen = screen.split(",");
                let areaMin = screen[0];
                let areaMax = screen[1];
                let res = await this.post('properties/selpage', {"current":1,"num":6,"areaMin":areaMin,"areaMax":areaMax});
                this.map = {"areaMin":areaMin,"areaMax":areaMax};
                this.reset("screen");
                this.house = res.data.data.objs;
            },
            changeOrder: async function (){
                let order = this.checkedHouseOrder;
                if(order == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":6});
                    this.house = res.data.data.objs;
                }else if(order == 1){
                    let res = await this.post('properties/selpage', {"current":1,"num":6,"totalIsAsc": true});
                    this.house = res.data.data.objs;
                }else if(order == 2){
                    let res = await this.post('properties/selpage', {"current":1,"num":6,"unitIsAsc": true});
                    this.house = res.data.data.objs;
                }else if(order == 3){
                    let res = await this.post('properties/selpage', {"current":1,"num":6,"cdateIsAsc": true});
                    this.house = res.data.data.objs;
                }
                this.reset("order");
            },
            changePriceArea: async function(){
                if(this.checkedPriceArea == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":4});
                    this.price = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":4,"regionId":this.checkedPriceArea});
                    this.price = res.data.data.objs;
                }
            },
            changePriceApartment: async function(){
                if(this.checkedPriceApartment == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":4});
                    this.price = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":4,"hxing":this.checkedPriceApartment});
                    this.price = res.data.data.objs;
                }
            },
            changePriceScreen: async function(){
                let screen = this.checkedHouseScreen;
                screen = screen.split(",");
                let unitAreaMin = screen[0];
                let unitAreaMax = screen[1];
                let res = await this.post('properties/selpage', {"current":1,"num":4,"unitAreaMin":unitAreaMin,"unitAreaMax":unitAreaMax});
                this.price = res.data.data.objs;
            },
            openCoupon(){
                let coupon = window.localStorage.getItem('coupon');
                if(coupon !== "coupon"){
                    window.localStorage.setItem("coupon","coupon");
                    this.$refs.coupon.couponOpen();
                }
            },
            closeCoupon(){
                this.$refs.coupon.couponClose();
            },
            center(){
                this.closeCoupon();
                let check = this.checkLogin();
                if(check){
                    this.$router.push('/Center');
                }else{
                    this.$refs.login.loginOpen();
                }
            },
            checkLogin(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                if(user){
                    return true;
                }else{
                    return false;
                }
            },
            toLogin(){
                this.$refs.register.registerClose();
                this.$refs.login.loginOpen();
            },
            toRegister(){
                this.$refs.login.loginClose();
                this.$refs.register.registerOpen();
            },
            fetchData: async function (){
                let res = await this.post('home/byphone');
                res = res.data.data;
                let recommend = res.yztj;
                if(recommend.length >= 5){
                    for (let i=0;i<4;i++){
                        this.recommend.push(recommend[i]);
                    }
                }else{
                    this.recommend = recommend;
                }
                let price = res.yfyj;
                if(price.length >= 5){
                    for (let i=0;i<5;i++){
                        this.price.push(price[i]);
                    }
                }else{
                    this.price = price;
                }
                let consultation = res.zxs;
                Object.keys(consultation).forEach(function(key){
                    consultation[key].key = key;
                });
                this.consultation = consultation;
                this.consult = consultation[0];
                this.news = res.zx;
            },
            fetchHouse: async function (){
                let res = await this.post('properties/selpage', {"current":1,"num":this.num * this.page});
                this.house = res.data.data.objs;
            },
            search: async function (event){
                if(event.keyCode == 13){
                    if(this.name != ""){
                        this.$router.push({
                            path:'/HouseSearch',
                            query:{
                                name:this.name
                            }
                        });
                    }
                }
            },
            fetchArea: async function (){
                let res = await this.post('region/selpage');
                let area = [
                    {"text":"区域","value": 0}
                ];
                res = res.data.data[0].children;
                Object.keys(res).forEach(function(key){
                    area.push({"text":res[key].name,"value":res[key].id});
                });
                this.houseArea = area;
            },
            fetchPriceArea: async function (){
                let res = await this.post('region/selpage');
                let area = [
                    {"text":"区域","value": 0}
                ];
                res = res.data.data[0].children;
                Object.keys(res).forEach(function(key){
                    area.push({"text":res[key].name,"value":res[key].id});
                });
                this.priceArea = area;
            },
            toHouse(id){
                this.$router.push({
                    path: "/SearchDetail",
                    query: {
                        id:id
                    }
                });
            },
            ejectLogin(){
                if(this.notLogin == true){
                    this.closeCoupon();
                    this.toLogin();
                }
            },
            toConsult(id){
                this.$router.push({
                    path:'/Consultant',
                    query:{
                        id:id
                    }
                })
            },
            changeConsult(key){
                let k = Number(key) + 1;
                let length = this.consultation.length;
                if(k>=length){
                    this.consult = this.consultation[0];
                }else{
                    this.consult = this.consultation[k];
                }
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            },
            more: async function(loaded){
                this.page++;
                this.map.current = 1;
                this.map.num = this.num * this.page;
                let res = await this.post('properties/selpage', this.map);
                if(res.data.code == 200){
                    this.house = res.data.data.objs;
                    loaded('done')
                }else{
                    this.page--;
                    loaded('fail')
                }
            },
            reset(type)
            {
                if(type != "area"){
                    this.checkedHouseArea = 0;
                }
                if(type != "price"){
                    this.checkedHousePrice = '0,3000'
                }
                if(type != "apartment"){
                    this.checkedHouseApartment = 0;
                }
                if(type != "screen"){
                    this.checkedHouseScreen = '0,2000';
                }
                if(type != "order"){
                    this.checkedHouseOrder = 0;
                }
            }
        },
        mounted (){
            setTimeout(() => {
                this.openCoupon();
            },40000);
            this.fetchData();
            this.fetchHouse();
            this.fetchArea();
            this.fetchPriceArea();
            this.ejectLogin();
        },
        filters:{
            dateFormat(datestr){
                return datestr.replace(/-/g,"");
            }
        }
    }
</script>

<style scoped>
    #index{
        width: 750px;
    }
    .header{
        height: 420px;
        padding: 1px;
        background-image: url('../../assets/images/index_banner.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
    .down{
        width: 102px;
        height: 50px;
        color: #ffffff;
        font-size: 24px;
        border-radius: 30px;
        float: left;
        margin: 40px 0 0 30px;
        background-color: rgba(0,0,0,0.1);
    }
    .down>p{
        line-height: 52px;
        padding:2px 0 0 18px;
        background-image: url("../../assets/images/bottom_arrow.png");
        background-repeat: no-repeat;
        background-size: 21px 12px;
        background-position-x: 72px;
        background-position-y: 20px;
    }
    .user{
        float: right;
        margin: 40px 30px 0 0;
    }
    .user>img{
        width: 40px;
        height: 40px;
    }
    .input{
        width: 690px;
        height: 62px;
        float: left;
        border-radius: 60px;
        margin: 240px  0 0 30px;
        background-color: #ffffff;
    }
    .input>input{
        width: 570px;
        height: 62px;
        margin-left: 60px;
        color: #999999;
        font-size: 24px;
    }
    .input>input::-webkit-input-placeholder {
        height: 62px;
        color: #999999;
        font-size: 24px;
        padding-left: 188px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position-x: 148px;
        background-image: url('../../assets/images/search.png');
    }
    .icon{
        width: 750px;
        height: 440px;
    }
    .icon>ul{
        height: 175px;
        width: 690px;
        margin: 22px 30px;
    }
    .icon>ul>li{
        float: left;
        width: 25%;
    }
    .icon>ul>li>a>img{
        width: 105px;
        height: 105px;
        padding: 33px;
        display: block;
    }
    .icon>ul>li>a>span{
        display: block;
        font-size: 26px;
        text-align: center;
        color: #222222;
        font-weight: bold;
    }
    .news{
        width: 690px;
        height: 100px;
        margin: 0 auto;
    }
    .news>img{
        width: 86px;
        height: 86px;
        padding: 10px;
        float: left;
        border-radius: 15px;
        border: 1px solid #e8e8e8;
    }
    .news>ul{
        float: left;
        margin-left: 38px;
    }
    .news>ul>li{
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        background-repeat: no-repeat;
        background-size: 8px 8px;
        background-position-y: 20px;
        background-image: url("../../assets/images/circle.png");
    }
    .news>ul>li>a{
        font-size: 26px;
        color: #222222;
    }
    .recommend{
        height: 430px;
        margin: 60px 30px 0 30px;
        overflow: hidden;
    }
    .recommend_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .recommend_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .recommend_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .recommend_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .recommend_content{
        white-space: nowrap;
        overflow-y:auto;
        margin-top: 36px;
    }
    .recommend_content::-webkit-scrollbar{
        display: none;
    }
    .recommend_content>div{
        width: 300px;
        display: inline-block;
        margin-right: 20px;
    }
    .recommend_content>div:last-child{
        margin-right: 0;
    }
    .position{
        border-radius: 10px;
        position: relative;
    }
    .position>img{
        width: 300px;
        height: 230px;
    }
    .position>p{
        top: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        text-align: center;
        position: absolute;
        color: #ffffff;
        padding: 0 5px;
        background-color: #ef3e4a;
    }
    .recommend_content>div>h3{
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0;
    }
    .recommend_content>div>span{
        display: inline-block;
        float: left;
        font-size: 24px;
        font-weight: bold;

    }
    .recommend_content>div>p{
        float: right;
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .recommend_content>div>p>span{
        font-size: 20px;
    }
    .house{
        height: 510px;
        margin: 60px 30px 0 30px;
        overflow: hidden;
    }
    .house_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .house_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .house_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .house_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .house_select{
        width: 400px;
        height: 80px;
        margin-left: -30px;
    }
    [class*='van-hairline']::after {
        border:none;
    }
    .house_content{
        white-space: nowrap;
        overflow-y:auto;
        margin-top: 20px;
    }
    .house_content::-webkit-scrollbar{
        display: none;
    }
    .house_content>div{
        width: 300px;
        display: inline-block;
        margin-right: 20px;
    }
    .house_content>div:last-child{
        margin-right: 0;
    }
    .house_content>div>h3{
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0;
    }
    .house_content>div>span{
        display: inline-block;
        float: left;
        font-size: 24px;
        font-weight: bold;

    }
    .house_content>div>p{
        float: right;
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .house_content>div>p>span{
        font-size: 20px;
    }
    .consult{
        width: 690px;
        height: 500px;
        margin: 0 auto;
        padding-top: 30px;
    }
    .consult_top{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .consult_top>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .consult_top>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .consult_top>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .consult_middle{
        width: 690px;
        height: 268px;
        border-radius: 6px;
        margin-top: 30px;
    }
    .consult_content{
        width: 460px;
        height: 272px;
        float: left;
    }
    .consult_content>h4{
        font-size: 32px;
        font-weight: bold;
        line-height: 32px;
        margin: 40px 0 0 30px;
    }
    .consult_content>h4>p{
        color: #888888;
        font-size: 24px;
        font-weight: normal;
        display: inline-block;
        margin-left: 24px;
    }
    .consult_content>p{
        height: 86px;
        line-height: 36px;
        font-size: 24px;
        color: #888888;
        margin: 24px 0 0 30px;
    }
    .consult_content>span{
        width: 150px;
        height: 50px;
        font-size: 26px;
        border-radius: 50px;
        background-color: #16cdf6;
        line-height: 50px;
        text-align: center;
        color: white;
        display: inline-block;
        margin: 12px 0 0 30px;
    }
    .consult_image{
        float: left;
    }
    .consult_image{
        width: 230px;
        height: 268px;
        float: left;
    }
    .consult_image>img{
        width: 230px;
        height: 268px;
    }
    .consult_bottom{
        width: 690px;
        height: 128px;
    }
    .consult_bottom>p{
        width: 160px;
        height: 60px;
        font-size: 26px;
        color: #666666;
        border-radius: 60px;
        line-height: 60px;
        margin: 50px auto;
        background-color: #efefef;
        background-image: url("../../assets/images/refresh.png");
        background-size: 40px 40px;
        background-repeat: no-repeat;
        background-position-x: 15px;
        background-position-y: 10px;
    }
    .consult_bottom>p>span{
        display: inline-block;
        margin-left: 60px;
    }
    .build{
        width: 690px;
        margin: 0 auto 120px;
    }
    .build_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .build_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .build_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .build_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .build_select{
        width: 690px;
        height: 80px;
        margin-left: -30px;
    }
    .build_content{
        margin-top: 20px;
    }
    .build_content>div{
        width: 690px;
        height: 200px;
        margin-bottom: 60px;
    }
    .build_image{
        width: 240px;
        height: 186px;
        float: left;
    }
    .build_image>img{
        width: 240px;
        height: 186px;
        border-radius: 10px;
    }
    .build_detail{
        float: left;
        margin-left: 26px;
    }
    .build_detail>h4{
        font-size: 28px;
        font-weight: bold;
    }
    .build_detail>h4>span{
        display: inline-block;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #ffe8ea;
        color: #ef3e4a;
        font-size: 22px;
        font-weight: normal;
        margin-left: 14px;
        padding: 0 10px;
    }
    .build_detail>h5{
        font-size: 24px;
        color: #b1b3b5;
        margin: 22px 0;
    }
    .build_detail>p{
        width: 400px;
        font-size: 24px;
        height: 38px;
        line-height: 38px;
        color: #b1b3b5;
        margin: 15px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .build_detail>h3{
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .build_detail>h3>span{
        font-size: 20px;
    }
    .build_detail>h3>p{
        display: inline-block;
        font-weight: normal;
        font-size: 24px;
        color: #98999c;
        margin-left: 24px;
    }
    .record{
        font-size: 24px;
        text-align: center;
        margin-bottom: 30px;
    }
    .record>a{
        color: #888888;
    }
    #pull{
        height: 1000px;
    }
</style>