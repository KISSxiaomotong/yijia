<template>
    <div id="search">
        <header>
            <div class="header">
                <div class="back" @click="back()"></div>
                <h2>{{properties.name}}</h2>
                <img src="../../assets/images/house/user.png" @click="center()">
            </div>
        </header>
        <div class="swipe" @click="toAlbum(id)">
            <van-swipe class="my-swipe" :autoplay="3000" @change="onChange">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/{{images.length}}
            </div>
        </div>
        <div class="detail">
            <h2>{{properties.name}}</h2>
            <div>
                <span>在售</span>
                <ul>
                    <li v-for="(item,index) in label" :key="index">{{item}}</li>
                </ul>
            </div>
            <ul>
                <li>
                    <h3>{{properties.unitPriceMin}}<span>元/m²</span></h3>
                    <p>参考单价</p>
                </li>
                <li>
                    <h3>{{properties.totalPriceMin}}<span>万元起</span></h3>
                    <p>参考总价</p>
                </li>
                <li>
                    <h3>{{Math.round(properties.areaMin)}}-{{Math.round(properties.areaMax)}}<span>m²</span></h3>
                    <p>建筑面积</p>
                </li>
            </ul>
        </div>
        <div class="get">
            <div class="get_left">
                <p><span>{{coupon.label}}</span></p>
                <h3>{{coupon.body}}</h3>
            </div>
            <div class="get_right">
                <input type="button" value="立即领取" @click="getCoupon()">
            </div>
        </div>
        <div class="fill"></div>
        <div id="house">
            <div class="house">
                <div class="house_title">
                    <h2>基本信息</h2>
                    <router-link :to="{path:'/InfoDetail',query:{id:this.id}}"><h3>查看更多</h3></router-link>
                </div>
                <div>
                    <p>楼盘名称：<span>{{properties.name}}</span></p>
                    <p>参考总价：<span>{{properties.totalPriceMin}}-{{properties.totalPriceMax}}万元</span></p>
                    <p>参考单价：<span>{{properties.unitPriceMin}}元/m²起</span></p>
                    <p>物业类型：<span>{{type}}</span></p>
                    <p>户型：<span>{{apartment}}</span></p>
                    <p>建筑面积：<span>{{Math.round(properties.areaMin)}}-{{Math.round(properties.areaMax)}}m²</span></p>
                    <p>地铁站：<span>{{properties.metroId}}</span></p>
                    <p>区域：<span>{{properties.regionId}}</span></p>
                    <h4>楼盘地址：<span>{{properties.address}}</span></h4>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="apartment">
            <div class="apartment_title">
                <h2>户型分析</h2>
                <router-link :to="{path:'/Apartment',query:{id:this.id}}"><h3>全部户型</h3></router-link>
            </div>
            <div class="apartment_content">
                <div v-for="(item,index) in houseShapes" :key="index" @click="shape(item.id)">
                    <img :src="item.imgs">
                    <h3>{{item.title}}<span>{{item.state}}</span></h3>
                    <p>朝向：{{item.orientation}} | 类型：{{item.type}}</p>
                    <h4>{{item.sumPrice}}万元左右</h4>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="dynamic">
            <div class="dynamic_title">
                <h2>楼盘动态</h2>
                <router-link to="/HouseDynamic"><h3>全部动态</h3></router-link>
            </div>
            <div class="dynamic_content" v-for="(item,index) in propertiesDynamics" :key="index" @click="dynamic(item.id)">
                <div class="dynamic_left">
                    <h3>{{item.title}}</h3>
                    <p>{{item.represent}}</p>
                    <span>{{item.cdate}}</span>
                </div>
                <div class="dynamic_right">
                    <img :src="item.picture">
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="map">
            <div class="map_top">
                <h2>周边配套</h2>
                <h3><span>位置：</span>{{location}}</h3>
                <p>距离南昌站{{distance}}公里</p>
            </div>
            <div class="map_middle" id="container">
            </div>
            <div class="map_bottom">
                <ul class="map_title">
                    <li v-for="(item,index) in facilities" :key="index" @click="change(index)" :class="{active:index == now}">{{item.title}}({{item.count}})</li>
                </ul>
                <ul class="map_around">
                    <li v-for="(item,index) in result" :key="index"><p>{{item.title}}<span>({{item.address}})</span></p><span>{{item.distance}}m</span></li>
                </ul>
            </div>
        </div>
        <div class="fill"></div>
        <div class="comment">
            <div class="comment_title">
                <h2>专家点评</h2>
                <router-link :to="{path:'/ExpertComment'}"><h3>全部点评</h3></router-link>
            </div>
            <div class="comment_top">
                <div class="comment_left">
                    <img :src="expertComment.headPortrait">
                    <h4>{{expertComment.name}}</h4>
                    <p>{{expertComment.cdate}}</p>
                </div>
                <div class="comment_right">
                    <input type="button" value="沟通" id="communicate" @click.stop="openwin()">
                    <input type="button" value="留言" id="message" @click="message()">
                </div>
            </div>
            <div class="comment_middle">
                <p>{{expertComment.comment}}</p>
            </div>
        </div>
        <div class="fill"></div>
        <div class="user">
            <div class="user_title">
                <h2>用户点评</h2>
                <router-link :to="{path:'/UserComment'}"><h3>全部点评</h3></router-link>
            </div>
            <div class="user_info" v-for="(item,index) in userComment" :key="index">
                <div class="user_left">
                    <img :src="item.obj.headPortrait">
                </div>
                <div class="user_right">
                    <h4>{{item.obj.name}}</h4>
                    <p>{{item.comment}}</p>
                    <span>{{item.obj.cdate | dateSub()}}</span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="user_comment" @click="comment()">
                <img src="../../assets/images/edit.png">
                <p>我要点评</p>
            </div>
        </div>
        <div class="fill"></div>
        <div class="question">
            <div class="question_title">
                <h2>楼盘问问</h2>
                <router-link to="/Asking"><h3>全部问问</h3></router-link>
            </div>
            <div class="question_content">
                <div class="ask" v-for="(item,index) in propertiesWws" :key="index">
                    <h3>{{item.problem}}</h3>
                </div>
            </div>
            <div class="question_comment">
                <img src="../../assets/images/write.png">
                <p @click="answer()">我要提问</p>
            </div>
        </div>
        <div class="fill"></div>
        <div class="consult">
            <div class="consult_title">
                <h2>咨询师</h2>
                <router-link to="/Consult"><h3>全部咨询师</h3></router-link>
            </div>
            <div class="consult_content" v-for="(item,index) in experts" :key="index" @click="consult(item.id)">
                <div class="consult_left">
                    <img :src="item.headPortrait">
                    <h4>{{item.name}}</h4>
                    <p>{{item.university}}</p>
                </div>
                <div class="consult_right">
                    <input type="button" value="在线咨询" @click.stop="openwin()">
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="price">
            <div class="price_title">
                <h2>一房一价</h2>
                <router-link :to="{path:'/PreInfo',query: {id: id}}"><h3>更多信息</h3></router-link>
            </div>
            <div class="pre" v-html="price" @click="toDetail(id)">
            </div>
        </div>
        <div class="fill"></div>
        <div class="recommend">
            <div class="recommend_title">
                <h2>推荐楼盘</h2>
            </div>
            <div class="recommend_content">
                <div v-for="(item,index) in propertiesList" :key="index" @click="house(item.id)">
                    <div class="recommend_image">
                        <img :src="item.cover">
                    </div>
                    <div class="recommend_detail">
                        <h4>{{item.name}}<span>在售</span></h4>
                        <p>地址：{{item.address}}</p>
                        <h5>{{item.opening | dateFormat()}} · {{item.opening | dateSub()}}</h5>
                        <h3>{{item.unitPriceMin}}<span>元/m²</span><p>{{item.areaMin}}-{{item.areaMax}}㎡</p></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="service" @click="openwin()">
                <h4>在线客服</h4>
            </div>
            <input type="button" id="see" value="预约看房" @click="appointment()">
            <input type="button" id="consult" value="电话咨询" @click="callPhone()">
        </div>
        <Login ref="login" @toRegister="toRegister"></Login>
        <Register ref="register"  @toLogin="toLogin"></Register>
        <Coupon ref="coupon"></Coupon>
    </div>
</template>

<script>
    import Login from "../person/Login";
    import Coupon from "../assembly/GetCoupon";
    import Register from "../person/Register";
    import BMap from 'BMap';
    export default {
        name: "SearchDetail",
        components: {Login,Register,Coupon},
        inject:['routerRefresh'],
        data(){
            return{
                id:this.$route.query.id,
                current: 0,
                now: 0,
                map: null,
                bounds: null,
                circle: null,
                local: null,
                lng: null,
                lat: null,
                point: null,
                MyMarker: null,
                result: [],
                facilities: [
                    {"title":"公交","count":0},
                    {"title":"地铁","count":0},
                    {"title":"教育","count":0},
                    {"title":"医院","count":0},
                    {"title":"银行","count":0},
                    {"title":"购物","count":0}
                ],
                images: [],
                properties: {},
                label: [],
                houseShapes: {},
                propertiesDynamics: [],
                propertiesWws: {},
                experts: {},
                propertiesList: [],
                expertComment: {
                    headPortrait:null,
                    name:null,
                    cdate:"",
                    comment:null
                },
                userComment: [],
                price: "",
                location: "",
                distance: 0,
                type: "",
                apartment: "",
                coupon:{
                    label:null,
                    title:null,
                    body:null,
                    id:0
                }
            }
        },
        watch: {
            '$route' (to, from) {
                this.routerRefresh();
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            onChange(index) {
                this.current = index;
            },
            change(index){
                this.now = index;
                this.Search(this.facilities[index].title,this.point);
            },
            toAlbum(id){
                this.$router.push({
                    path:'/Album',
                    query:{
                        id:id
                    }
                })
            },
            createMap(lon,lat){
                this.map = new BMap.Map("container");
                this.point = new BMap.Point(lon,lat);
                this.map.centerAndZoom(this.point, 15);
                this.Search(this.facilities[0].title,this.point);
                this.setLocation(this.point);
                this.countNum();
            },
            Search(search,mPoint){
                let self = this;
                let options = {
                    onSearchComplete: function(results){
                        let result = [];
                        // 判断状态是否正确
                        if (local.getStatus() == BMAP_STATUS_SUCCESS){
                            let num = results.getCurrentNumPois();
                            if(num >= 3){
                                for (let i = 0; i < 3; i ++){
                                    result.push({"title":results.getPoi(i).title,"address":results.getPoi(i).address,"point":results.getPoi(i).point});
                                }
                            }else if(num> 0 && num < 3){
                                for (let i = 0; i < num; i ++){
                                    result.push({"title":results.getPoi(i).title,"address":results.getPoi(i).address,"point":results.getPoi(i).point});
                                }
                            }
                        }else{
                            result = null;
                        }
                        self.setContainer(result);
                    },
                };
                self.map.clearOverlays();
                self.circle = new BMap.Circle(mPoint,1000,{stroke:"white",strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                self.map.addOverlay(self.circle);
                let local =  new BMap.LocalSearch(self.map, options);
                self.map.addOverlay(self.MyMarker);
                local.searchNearby(search,mPoint,1000);
            },
            setContainer(result){
                let distance = 0;
                let address = "";
                let title = "";
                let point = {};
                let lists = [];
                if(result === null){
                    lists.push({"title":"暂无相关信息","address":"无","distance":0});
                }else{
                    for (let i = 0; i < result.length; i ++){
                        point = new BMap.Point( result[i].point.lng , result[i].point.lat );
                        distance = this.map.getDistance(this.point,point).toFixed(2);
                        distance = Math.round(distance);
                        address = result[i].address.substring(0,12);
                        title = result[i].title.substring(0,12);
                        lists.push({"title":title,"address":address,"distance":distance});
                    }
                }
                this.result = lists;
            },
            fetchData: async function (){
                let that = this;
                let res = await this.post('properties/whole', {"id":this.id});
                let images = [];
                let detail = res.data.data;
                for(let value of detail.xgt) {
                    images.push(value.picture);
                }
                for(let value of detail.sjt) {
                    images.push(value.picture);
                }
                for(let value of detail.hxt) {
                    images.push(value.picture);
                }
                for(let value of detail.ybj) {
                    images.push(value.picture);
                }
                this.images = images;
                this.properties = detail.properties;
                let position = this.properties.jwd.split(",");
                let lon =  position[0];
                let lat = position[1];
                this.createMap(lon,lat);
                let type = this.properties.type.split(",");
                let apartment = this.properties.hxing.split(",");
                for (let i = 0; i < apartment.length; i ++){
                    if(apartment[i] == 1){
                        this.apartment = this.apartment + "一居 ";
                    }
                    if(apartment[i] == 2){
                        this.apartment = this.apartment + "二居 ";
                    }
                    if(apartment[i] == 3){
                        this.apartment = this.apartment + "三居 ";
                    }
                    if(apartment[i] == 4){
                        this.apartment = this.apartment + "四居 ";
                    }
                    if(apartment[i] == 5){
                        this.apartment = this.apartment + "五居及以上 ";
                    }
                }
                for (let i = 0; i < type.length; i ++){
                    if(type[i] == 1){
                        this.type = this.type + "住宅 ";
                    }
                    if(type[i] == 2){
                        this.type = this.type + "别墅 ";
                    }
                    if(type[i] == 3){
                        this.type = this.type + "商办 ";
                    }
                    if(type[i] == 4){
                        this.type = this.type + "商铺 ";
                    }
                    if(type[i] == 5){
                        this.type = this.type + "写字楼 ";
                    }
                }
                if(detail.hasOwnProperty('coupon')){
                    this.coupon = detail.coupon;
                }
                this.label = this.properties.label.split(",");
                this.houseShapes = detail.houseShapes;
                if(detail.propertiesDynamics.length > 2){
                    for (let i=0;i<2;i++){
                        this.propertiesDynamics.push(detail.propertiesDynamics[i]);
                    }
                }else{
                    this.propertiesDynamics = detail.propertiesDynamics;
                }
                this.propertiesWws = detail.propertiesWws;
                this.experts = detail.experts;
                let propertiesList = detail.propertiesList;
                if(propertiesList.length >= 6){
                    for (let i=0;i<6;i++){
                        this.propertiesList.push(propertiesList[i]);
                    }
                }else{
                    this.propertiesList = propertiesList
                }
                let propertiesComments = detail.propertiesComments;
                Object.keys(propertiesComments).forEach(function(key){
                    if (propertiesComments[key].type == 1) {
                        if(propertiesComments[key].obj == null){
                            propertiesComments[key].obj = {
                                headPortrait:null,
                                name:null,
                                cdate:"",
                                comment:null
                            }
                        }
                        that.userComment.push(propertiesComments[key]);
                    }else {
                        that.expertComment.push(propertiesComments[key]);
                    }
                });
                if (this.expertComment.length > 0){
                    this.expertComment = this.expertComment[0];
                    this.expertComment.headPortrait = this.expertComment.obj.headPortrait;
                    this.expertComment.name = this.expertComment.obj.name;
                    this.expertComment.cdate = this.expertComment.obj.cdate.substring(0,10);
                }
                this.price = detail.yfyj.represent;
            },
            setLocation(point){
                let that = this;
                let geoc = new BMap.Geocoder();
                geoc.getLocation(point, function(rs){
                    let addComp = rs.addressComponents;
                    that.location = addComp.district + addComp.street + addComp.streetNumber;
                });
                let train = new BMap.Point(115.924589,28.668332);
                let distance = this.map.getDistance(this.point,train);
                this.distance = Math.round(distance/1000);
            },
            countNum(){
                for (let i=0;i<6;i++) {
                    this.getNum(this.facilities[i].title,this.point,i);
                }
            },
            getNum(search,mPoint,index){
                let options = {
                    onSearchComplete: function(results){
                        // 判断状态是否正确
                        if (local.getStatus() == BMAP_STATUS_SUCCESS){
                            let num = results.getCurrentNumPois();
                            self.facilities[index].count = num;
                        }else{
                            self.facilities[index].count = 0;
                        }
                    },
                };
                let self = this;
                self.map.clearOverlays();
                self.circle = new BMap.Circle(mPoint,1000,{stroke:"white",strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                self.map.addOverlay(self.circle);
                let local =  new BMap.LocalSearch(self.map, options);
                self.map.addOverlay(self.MyMarker);
                local.searchNearby(search,mPoint,1000);
            },
            appointment(){
                this.$router.push('/Appointment')
            },
            answer(){
                this.$router.push('/Answer')
            },
            consult(id){
                this.$router.push({
                    path:'/Consultant',
                    query:{
                        id:id
                    }
                })
            },
            dynamic(id){
                this.$router.push({
                    path:'/DynamicDetail',
                    query:{
                        id:id
                    }
                })
            },
            toDetail(id){
                this.$router.push({
                    path:'/PreInfo',
                    query:{
                        id:id
                    }
                })
            },
            house(id){
                this.$router.push({
                    path: "/SearchDetail",
                    query: {
                        id:id
                    }
                },()=>{
                    this.$router.go(0)//刷新页面
                })
            },
            center(){
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
            getCoupon() {
                this.$refs.coupon.couponOpen(this.coupon.id);
            },
            comment(){
                this.$router.push('/Comment');
            },
            message(){
                this.$router.push('/Advice');
            },
            shape(id){
                this.$router.push({
                    path:'/ApartmentDetail',
                    query:{
                        id:id
                    }
                })
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            },
            callPhone(){
                window.location.href = 'tel://13188888888'
            }
        },
        mounted() {
            this.fetchData();
        },
        filters:{
            dateFormat(datestr){
                return datestr.replace(/-/g,"");
            },
            dateSub(datestr){
                return datestr.substring(0,10);
            }
        }
    }
</script>

<style scoped>
    #search{
        width: 750px;
        background-color: #ffffff;
    }
    header{
        width: 750px;
        height: 88px;
        background-color: #ffffff;
    }
    .header{
        width: 690px;
        height: 88px;
        margin: 0 auto;
    }
    .back{
        height: 88px;
        width: 88px;
        float: left;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position: left center;
    }
    .header>h2{
        font-size: 36px;
        text-align: center;
        height: 88px;
        line-height: 88px;
        float: left;
        width: 566px;
        text-align: center;
    }
    .header>img{
        width: 36px;
        height: 36px;
        float: right;
        margin-top: 28px;
    }
    .swipe{
        width: 750px;
        height: 617px;
    }
    .my-swipe{
        color: #fff;
        font-size: 20px;
        line-height: 617px;
        text-align: center;
    }
    .my-swipe img{
        width: 750px;
        height: 617px;
    }
    .custom-indicator{
        width: 80px;
        height: 36px;
        border-radius: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 24px;
        color: #ffffff;
        background-color: rgba(30,38,3,0.5);
        position: relative;
        top: -66px;
        left: 640px;
    }
    .detail{
        width: 690px;
        height: 270px;
        margin: 0 auto;
    }
    .detail>h2{
        font-size: 40px;
        font-weight: bold;
        padding: 28px 0 23px;
    }
    .detail>div{
        width: 690px;
        height: 36px;
    }
    .detail>div>span{
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        color: #ef3e4a;
        font-size: 24px;
        float: left;
        background-color: #ffe8ea;
        display: inline-block;
    }
    .detail>div>ul{
        float: left;
    }
    .detail>div>ul>li{
        float: left;
        height: 36px;
        margin-left: 8px;
        padding: 0 10px;
        font-size: 24px;
        line-height: 36px;
        color: #999999;
        background-color: #f3f5f7;
    }
    .detail>ul>li{
        float: left;
    }
    .detail>ul{
        height: 80px;
        margin: 35px 0;
    }
    .detail>ul>li{
        width: 229px;
        border-right: 1px solid #edf1f5;
    }
    .detail>ul>li:nth-child(2){
        width: 199px;
        padding-left: 30px;
    }
    .detail>ul>li:nth-child(3){
        width: 199px;
        padding-left: 30px;
        border-right: none;
    }
    .detail>ul>li>h3{
        color: #ef3e4a;
        font-size: 36px;
    }
    .detail>ul>li>h3>span{
        font-size: 20px;
    }
    .detail>ul>li>p{
        margin-top: 20px;
        font-size: 20px;
        color: #999999;
    }
    .get{
        width: 690px;
        height: 130px;
        margin: 0 auto;
        padding-bottom: 30px;
        background-image: url("../../assets/images/house/searchbg.jpg");
        background-size: 690px 130px;
        background-repeat: no-repeat;
    }
    .get>div{
        margin-left: 30px;
    }
    .get_left{
        float: left;
    }
    .get_left>p{
        height: 36px;
        line-height: 36px;
        margin: 26px 0 10px;
        color: #ffffff;
    }
    .get_left>p>span{
        display: inline-block;
        font-size: 22px;
        padding: 0 12px;
        margin-right: 12px;
        background-color: rgba(250,193,143,0.8);
    }
    .get_left>h3{
        font-size: 28px;
        margin-top: 12px;
        color: #ffffff;
    }
    .get_right{
        margin-top: 35px;
        margin-right: 30px;
        float: right;
    }
    .get_right>input{
        width: 150px;
        height: 60px;
        color: #fd582d;
        font-size: 26px;
        border-radius: 60px;
        background-color: #ffffff;
    }
    .fill{
        width: 750px;
        height: 20px;
        background-color: #f5f9fa;
    }
    #house{
        width: 750px;
        margin-top: 20px;
        background-color: #ffffff;
    }
    .house{
        width: 690px;
        margin: 0 auto;
    }
    .house_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0;
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
    .house>div>p{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
        float: left;
    }
    .house>div>p:nth-child(2n+1){
        width: 54%;
    }
    .house>div>p:nth-child(2n){
        width: 46%;
    }
    .house>div>p>span{
        color: #222222;
    }
    .house>div>h4{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .house>div>h4>span{
        color: #222222;
    }
    .apartment{
        width: 690px;
        margin: 0 auto;
    }
    .apartment_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0;
    }
    .apartment_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .apartment_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .apartment_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .apartment_content{
        width: 690px;
        zoom: 1;
    }
    .apartment_content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .apartment_content>div{
        margin-bottom: 20px;
    }
    .apartment_content>div:nth-child(2n+1){
        float: left;
    }
    .apartment_content>div:nth-child(2n){
        float: right;
    }
    .apartment_content>div>img{
        width: 334px;
        height: 237px;
    }
    .apartment_content>div>h3{
        font-size: 26px;
        font-weight: bold;
        padding: 20px 0;
    }
    .apartment_content>div>p{
        font-size: 24px;
        color: #9fa0a3;
    }
    .apartment_content>div>h4{
        font-size: 26px;
        color: #ef3e4a;
        padding: 20px 0;
    }
    .apartment_content>div>h3>span{
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
    .dynamic{
        width: 690px;
        height: 630px;
        margin: 0 auto;
    }
    .dynamic_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0;
    }
    .dynamic_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .dynamic_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .dynamic_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .dynamic_content{
        height: 250px;
        width: 690px;
    }
    .dynamic_content>div{
        float: left;
    }
    .dynamic_left{
        width: 450px;
        height: 250px;
    }
    .dynamic_left>h3{
        font-size: 26px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
    }
    .dynamic_left>p{
        font-size: 24px;
        line-height: 40px;
        color: #888888;
        margin: 24px 0;
    }
    .dynamic_left>span{
        font-size: 24px;
        color: #888888;
    }
    .dynamic_right{
        width: 240px;
        float: left;
    }
    .dynamic_right>img{
        width: 220px;
        height: 172px;
        float: right;
        border-radius: 4px;
    }
    .map{
        width: 750px;
        height: 860px;
    }
    .map_top{
        width: 690px;
        margin: 0 auto;
        padding: 36px 0;
    }
    .map_top>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
    }
    .map_top>h3{
        font-size: 28px;
        margin: 30px 0 20px;
    }
    .map_top>h3>span{
        color: #9ea3a4;
    }
    .map_top>p{
        font-size: 24px;
        color: #9ea3a4;
    }
    .map_middle{
        width: 750px;
        height: 375px;
    }
    .map_bottom{
        width: 690px;
        margin: 0 auto;
    }
    .map_title{
        width: 690px;
        height: 70px;
        line-height: 70px;
    }
    .map_title>li{
        width: 115px;
        height: 60px;
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        float: left;
    }
    .map_around{
        height: 150px;
    }
    .map_around>li{
        height: 50px;
        line-height: 50px;
        font-size: 24px;
    }
    .map_around>li>p{
        float: left;
    }
    .map_around>li>p>span{
        color: #8c9393;
    }
    .map_around>li>span{
        height: 50px;
        float: right;
        line-height: 50px;
        padding-left: 30px;
        color: #8c9393;
        display: inline-block;
        background-image: url("../../assets/images/location.png");
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: left center;
    }
    .comment{
        width: 690px;
        margin: 0 auto 38px;
    }
    .comment_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0;
    }
    .comment_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .comment_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .comment_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .comment_top{
        width: 690px;
        height: 120px;
    }
    .comment_left{
        width: 320px;
        height: 120px;
        float: left;
    }
    .comment_left>img{
        width: 80px;
        height: 80px;
        border-radius: 80px;
        margin: 20px 0;
        float: left;
    }
    .comment_left>h4{
        font-size: 26px;
        float: left;
        font-weight: bold;
        margin: 26px 0 20px 15px;
    }
    .comment_left>p{
        font-size: 22px;
        color: #a1a1a1;
        margin-left: 15px;
        float: left;
    }
    .comment_right{
        height: 120px;
        float: right;
        margin-top: 18px;
    }
    .comment_right>input{
        width: 120px;
        height: 50px;
        font-size: 26px;
        border-radius: 50px;
    }
    #communicate{
        color: #3fd0f1;
        margin-right: 20px;
        background-color: #e9fbff;
    }
    #message{
        color: #ef3e4a;
        background-color: #ffe9eb;
    }
    .comment_right{
        margin-top: 10px;
    }
    .comment_middle>p{
        font-size: 24px;
        line-height: 40px;
    }
    .user{
        width: 690px;
        margin: 0 auto;
    }
    .user_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0 6px;
    }
    .user_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .user_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .user_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .user_info{
        padding: 30px 0;
    }
    .user_left{
        width: 80px;
        float: left;
    }
    .user_left>img{
        width: 80px;
        height: 80px;
        border-radius: 80px;
    }
    .user_right{
        float: left;
        width: 580px;
        margin-left: 20px;
    }
    .user_right>h4{
        font-size: 26px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
    }
    .user_right>p{
        font-size: 24px;
        line-height: 46px;
    }
    .user_right>span{
        font-size: 22px;
        margin-top: 10px;
        color: #999999;
        display: inline-block;
    }
    .clear{
        clear: both;
    }
    .user_comment{
        width: 690px;
        height: 80px;
        margin-bottom: 40px;
        background-color: #effcff;
    }
    .user_comment>img{
        width: 36px;
        height: 36px;
        padding-bottom: 10px;
        margin-left: 270px;
    }
    .user_comment>p{
        height: 80px;
        width: 110px;
        color: #00c0eb;
        margin-left: 8px;
        font-size: 26px;
        line-height: 80px;
        display: inline-block;
    }
    .question{
        width: 690px;
        margin: 0 auto;
    }
    .question_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0 6px;
    }
    .question_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .question_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .question_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .ask{
        padding: 40px 0 0 60px;
        background-image: url("../../assets/images/answer/question.png");
        background-position-y: 36px;
        background-repeat: no-repeat;
        background-size: 50px 50px;
    }
    .ask>h3{
        font-size: 26px;
        font-weight: bold;
        color: #222222;
        line-height: 46px;
    }
    .question_comment{
        width: 690px;
        height: 80px;
        margin: 50px 0 40px;
        background-color: #effcff;
    }
    .question_comment>img{
        width: 36px;
        height: 36px;
        padding-bottom: 10px;
        margin-left: 270px;
    }
    .question_comment>p{
        height: 80px;
        width: 110px;
        color: #00c0eb;
        margin-left: 8px;
        font-size: 26px;
        line-height: 80px;
        display: inline-block;
    }
    .consult{
        width: 690px;
        margin: 0 auto 30px;
    }
    .consult_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0;
    }
    .consult_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .consult_title>a{
        width: 142px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .consult_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 122px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .consult_content{
        height: 80px;
        padding: 15px 0;
    }
    .consult_left{
        height: 80px;
        width: 500px;
        float: left;
    }
    .consult_left>img{
        width: 80px;
        height: 80px;
        float: left;
        border-radius: 80px;
    }
    .consult_left>h4{
        float: left;
        height: 44px;
        margin-left: 20px;
        line-height: 44px;
        font-size: 26px;
        font-weight: bold;
    }
    .consult_left>p{
        float: left;
        height: 36px;
        margin-left: 20px;
        line-height: 36px;
        font-size: 24px;
        color: #888888;
    }
    .consult_right{
        float: right;
        margin-top: 16px;
    }
    .consult_right>input{
        width: 150px;
        height: 50px;
        font-size: 26px;
        color: #00c0eb;
        border-radius: 50px;
        background-color: #effcff;
    }
    .price{
        width: 690px;
        margin: 0 auto 40px;
    }
    .price_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
        padding: 36px 0 6px;
    }
    .price_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .price_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .price_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .pre{
        width: 690px;
        margin:  40px auto 0;
    }
    .pre >>> img{
        width: 690px;
        height: 519px;
    }
    .recommend{
        width: 690px;
        margin: 0 auto;
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
    .recommend_content{
        margin-top: 20px;
    }
    .recommend_content>div{
        width: 690px;
        height: 200px;
        margin-bottom: 60px;
    }
    .recommend_image{
        width: 240px;
        height: 186px;
        float: left;
    }
    .recommend_image>img{
        width: 240px;
        height: 186px;
        border-radius: 10px;
    }
    .recommend_detail{
        float: left;
        margin-left: 26px;
    }
    .recommend_detail>h4{
        font-size: 28px;
        font-weight: bold;
    }
    .recommend_detail>h4>span{
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
   .recommend_detail>h5{
        font-size: 24px;
        color: #b1b3b5;
        margin: 22px 0;
    }
    .recommend_detail>p{
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
    .recommend_detail>h3{
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .recommend_detail>h3>span{
        font-size: 20px;
    }
    .recommend_detail>h3>p{
        display: inline-block;
        font-weight: normal;
        font-size: 24px;
        color: #98999c;
        margin-left: 24px;
    }
    .footer{
        width: 690px;
        height: 112px;
        margin: 0 auto;
    }
    .service{
        width: 100px;
        height: 100px;
        background-image: url("../../assets/images/house/service.png");
        background-repeat: no-repeat;
        background-size: 50px 50px;
        background-position-x: 16px;
        background-position-y: 6px;
        margin-top: 12px;
    }
    .service>h4{
        font-size: 22px;
        color: #888888;
        height: 30px;
        line-height: 30px;
        margin-top: 60px;
    }
    .footer>input{
        width: 274px;
        height: 76px;
        border-radius: 5px;
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        margin-top: 16px;
    }
    #see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    #consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
    .active{
        color: #02c2f3;
        border-bottom: 6px solid #02c2f3;
    }
</style>