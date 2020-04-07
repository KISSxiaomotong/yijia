<template>
    <div id="search">
        <div class="header">
            <div>
                <div class="back" @click="back()"></div>
                <div class="input">
                    <input type="input" placeholder="请输入楼盘名或区域名" v-model="name" @keyup="search($event)">
                </div>
                <span @click="center()"><img src="../../assets/images/house/user.png"></span>
            </div>
        </div>
        <div class="build">
            <div class="build_select">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="checkedArea" :options="area" @change="changeArea()"/>
                    <van-dropdown-item v-model="checkedPrice" :options="price" @change="changePrice()"/>
                    <van-dropdown-item v-model="checkedApartment" :options="apartment" @change="changeApartment()"/>
                    <van-dropdown-item v-model="checkedScreen" :options="screen" @change="changeScreen()"/>
                    <van-dropdown-item v-model="checkedOrder" :options="order" @change="changeOrder()"/>
                </van-dropdown-menu>
            </div>
            <div class="build_content">
                <div v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                    <div class="build_image">
                        <img :src="item.cover">
                    </div>
                    <div class="build_detail">
                        <h4>{{item.name}}<span>在售</span></h4>
                        <p>地址：{{item.address}}</p>
                        <h5>{{item.opening | dateFormat()}} · {{item.opening}}</h5>
                        <h3>{{Math.round(item.unitPriceMin,2)}}<span>元/m²</span><p>{{item.totalPriceMin}}-{{item.totalPriceMax}}㎡</p></h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <Login ref="login" @toRegister="toRegister"></Login>
        <Register ref="register"  @toLogin="toLogin"></Register>
    </div>
</template>

<script>
    import Login from "../person/Login";
    import Register from "../person/Register";
    import Footer from "../assembly/Footer";
    export default {
        name: "HouseSearch",
        components: {Footer,Login,Register},
        data (){
            return {
                name: this.$route.query.name,
                area: [],
                price: [
                    { text: '价格', value: '0,3000'},
                    { text: '50万以下', value: '0,50'},
                    { text: '50-80万', value: '50,80'},
                    { text: '80-100万', value: '80,100'},
                    { text: '100-120万', value: '100,120'},
                    { text: '120-150万', value: '120,150'},
                    { text: '150-200万', value: '150,200'},
                    { text: '200-300万', value: '200,300'},
                    { text: '300万以上', value: '300,300'}
                ],
                apartment: [
                    { text: '户型', value: 0},
                    { text: '一居', value: 1},
                    { text: '二居', value: 2},
                    { text: '三居', value: 3},
                    { text: '四居', value: 4},
                    { text: '五居及以上', value: 5},
                ],
                screen: [
                    { text: '面积', value: '0,2000'},
                    { text: '<50m²', value: '0,50'},
                    { text: '50-80m²', value: '50,80'},
                    { text: '80-120m²', value: '80,120'},
                    { text: '120-140m²', value: '120,140'},
                    { text: '140-160m²', value: '140,160'},
                    { text: '>160m²', value: '160,2000'}
                ],
                order: [
                    { text: '排序', value: 0},
                    { text: '总价排序', value: 1},
                    { text: '单价排序', value: 2},
                    { text: '时间排序', value: 3},
                ],
                checkedArea: 0,
                checkedPrice: '0,3000',
                checkedApartment: 0,
                checkedScreen: '0,2000',
                checkedOrder: 0,
                lists: {}
            }
        },
        methods: {
            back(){
                this.$router.go(-1);//返回上一层
            },
            changeArea: async function (){
                if(this.checkedArea == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":10});
                    this.lists = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"regionId":this.checkedArea});
                    this.lists = res.data.data.objs;
                }
            },
            changePrice: async function (){
                let price = this.checkedPrice;
                price = price.split(",");
                let unitPriceMin = price[0];
                let unitPriceMax = price[1];
                let res = await this.post('properties/selpage', {"current":1,"num":10,"unitPriceMin":unitPriceMin,"unitPriceMax":unitPriceMax});
                this.lists = res.data.data.objs;
            },
            changeApartment: async function (){
                if(this.checkedApartment == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":10});
                    this.lists = res.data.data.objs;
                }else{
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"hxing":this.checkedApartment});
                    this.lists = res.data.data.objs;
                }

            },
            changeScreen: async function (){
                let screen = this.checkedScreen;
                screen = screen.split(",");
                let unitAreaMin = screen[0];
                let unitAreaMax = screen[1];
                let res = await this.post('properties/selpage', {"current":1,"num":10,"unitAreaMin":unitAreaMin,"unitAreaMax":unitAreaMax});
                this.lists = res.data.data.objs;
            },
            changeOrder: async function (){
                let order = this.checkedOrder;
                if(order == 0){
                    let res = await this.post('properties/selpage', {"current":1,"num":10});
                    this.lists = res.data.data.objs;
                }else if(order == 1){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"totalIsAsc": true});
                    this.lists = res.data.data.objs;
                }else if(order == 2){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"unitIsAsc": true});
                    this.lists = res.data.data.objs;
                }else if(order == 3){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"cdateIsAsc": true});
                    this.lists = res.data.data.objs;
                }
            },
            fetchData: async function (){
                let res = await this.post('properties/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
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
                this.area = area;
            },
            search: async function (event){
                if(event.keyCode == 13){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"name":this.name});
                    this.lists = res.data.data.objs;
                }
            },
            show(id){
                this.$router.push({
                    path:'/SearchDetail',
                    query:{
                        id:id
                    }
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
            toSearch: async function (){
                if(this.name !== undefined){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"name":this.name});
                    this.lists = res.data.data.objs;
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
        },
        mounted() {
            this.fetchData();
            this.fetchArea();
            this.toSearch();
        },
        filters:{
            dateFormat(datestr){
                return datestr.replace(/-/g,"");
            }
        }
    }
</script>

<style scoped>
    #search{
        width: 750px;
        background-color: #ffffff;
    }
    .header{
        width: 690px;
        margin: 0 auto;
    }
    .header>div{
        width: 690px;
        height: 60px;
        margin: 30px 0;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 24px 36px;
        background-position-y: 10px;
    }
    .back{
        height: 62px;
        width: 40px;
        float: left;
    }
    .input{
        width: 600px;
        height: 62px;
        float: left;
        border-radius: 60px;
        background-color: #f3f6f9;
    }
    .input>input{
        width: 480px;
        height: 62px;
        margin-left: 60px;
        color: #999999;
        font-size: 24px;
        background-color: #f3f6f9;
    }
    .input>input::-webkit-input-placeholder {
        height: 62px;
        color: #999999;
        font-size: 24px;
        padding-left: 143px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position-x: 103px;
        background-image: url('../../assets/images/search.png');
    }
    .header>div>span>img{
        width: 36px;
        height: 40px;
        float: right;
        margin-top: 12px;
    }
    .build{
        width: 690px;
        margin: 0 auto 120px;
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
    .build_detail>p,.build_detail>h5{
        font-size: 24px;
        color: #b1b3b5;
        margin: 22px 0;
    }
    .build_detail>p{
        width: 400px;
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
</style>