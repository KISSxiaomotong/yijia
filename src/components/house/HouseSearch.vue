<template>
    <div id="search">
        <div class="header">
            <div>
                <div class="input">
                    <input type="input" placeholder="请输入楼盘名或区域名" v-model="name" @keyup="search($event)">
                </div>
                <router-link to="#"><img src="../../assets/images/house/user.png"></router-link>
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
                        <h5>2019120 · {{item.opening}}</h5>
                        <h3>{{item.unitPriceMin}}<span>万元/m²</span><p>{{item.totalPriceMin}}-{{item.totalPriceMax}}㎡</p></h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "HouseSearch",
        components: {Footer},
        data (){
            return {
                name: "",
                area: [],
                price: [
                    { text: '价格', value: '0,2000'},
                    { text: '<200万', value: '0,200'},
                    { text: '200-400万', value: '200,400'},
                    { text: '400-500万', value: '400,500'},
                    { text: '500-600万', value: '500,600'},
                    { text: '600-800万', value: '600,800'},
                    { text: '800-1000万', value: '800,1000'},
                    { text: '1000-2000万', value: '1000,2000'}
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
                checkedPrice: '0,2000',
                checkedApartment: 0,
                checkedScreen: '0,2000',
                checkedOrder: 0,
                lists: {}
            }
        },
        methods: {
            changeArea: async function (){
                let res = await this.post('properties/selpage', {"current":1,"num":10,"regionId":this.checkedArea});
                this.lists = res.data.data.objs;
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
                let res = await this.post('properties/selpage', {"current":1,"num":10,"hxing":this.checkedApartment});
                this.lists = res.data.data.objs;
            },
            changeScreen: async function (){
                let screen = this.checkedPrice;
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
            }
        },
        mounted() {
            this.fetchData();
            this.fetchArea();
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
    .input{
        width: 600px;
        height: 62px;
        float: left;
        margin-left: 40px;
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
    .header>div>a>img{
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