<template>
    <div id="pre">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>一房一价</h2>
            </div>
        </header>
        <div class="pre" v-html="info.represent">

        </div>
        <div class="tung">
            <table>
                <tr>
                    <th>点击幢号查看详细信息</th>
                </tr>
                <tr>
                    <td>
                        <span v-for="(item,index) in tung" :key="index" :class="{active:item.id == tungId}" @click="changeTung(item.id)">{{item.title}} </span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="info">
            <table>
                <tr>
                    <th rowspan="2">楼层\单元</th>
                    <th colspan="4">
                        <van-dropdown-menu>
                            <van-dropdown-item v-model="unitId" :options="unitArray" @change="changeUnit()"/>
                        </van-dropdown-menu>
                    </th>
                </tr>
                <tr>
                    <th v-for="(item,index) in floor" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(item,index) in apartment" :key="index">
                    <td>{{item.label}}</td>
                    <td v-for="(i,d) in item.children" :key="d" :style="i.state" @click="show(i.id)">{{i.label}}</td>
                </tr>
            </table>
        </div>
        <div class="status">
            <div>
                <p>已限制</p>
                <p>开发商被查封的房产</p>
            </div>
            <div>
                <p>已抵押</p>
                <p>被开发商抵押的房产</p>
            </div>
            <div>
                <p>已报审</p>
                <p>已签约且申请备案的房产</p>
            </div>
            <div>
                <p>已备案</p>
                <p>合同已备案的房产</p>
            </div>
            <div>
                <p>可销售</p>
                <p>正常可销售的房产</p>
            </div>
            <div>
                <p>不可售</p>
                <p>拆迁、集资、配套用房</p>
            </div>
        </div>
        <div class="footer">
            <div class="service">
                <h4>在线客服</h4>
            </div>
            <input type="button" class="see" value="预约看房" @click="appointment()">
            <input type="button" class="consult" value="电话咨询">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PreInfo",
        data(){
            return{
                id:this.$route.query.id,
                info: {},
                tung: [],
                apartment: [],
                unit: {},
                floor: [],
                tungId: 0,
                unitId: 0,
                unitArray: []
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                this.info = res.data.data.yfyj;
            },
            fetchTung: async function (){
                let res = await this.post('properties/ld', {"id":this.id});
                res = res.data.data;
                let tung = [];
                Object.keys(res).forEach(function(key){
                    tung.push({"id":res[key].id,"title":res[key].label});
                });
                this.tung = tung;
                this.tungId = this.tung[0].id;
                this.unitId =  await this.fetchUnit(this.tungId);
                this.fetchApartment(this.unitId);
            },
            fetchUnit: async function (id){
                let res = await this.post('properties/dy', {"id":id});
                res = res.data.data;
                let unit = [];
                Object.keys(res).forEach(function(key){
                    unit.push({"id":res[key].id,"title":res[key].label});
                });
                this.unit = unit;
                let unitArray = [];
                Object.keys(res).forEach(function(key){
                    unitArray.push({"text":res[key].label,"value":res[key].id});
                });
                this.unitArray = unitArray;
                return this.unit[0].id;
            },
            fetchApartment: async function (id){
                let res = await this.post('properties/lh', {"id":id});
                res = res.data.data;
                let children = res[0].children;
                let floor = [];
                for (let i=1;i<=children.length;i++){
                    floor.push(i);
                }
                this.floor = floor;
                Object.keys(res).forEach(function(key){
                    Object.keys(res[key].children).forEach(function(k){
                        if(res[key].children[k].state == 1){
                            res[key].children[k].state = {backgroundColor:"#f0621f",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 2){
                            res[key].children[k].state = {backgroundColor:"#ffab33",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 3){
                            res[key].children[k].state = {backgroundColor:"#247eb5",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 4){
                            res[key].children[k].state = {backgroundColor:"#d11cf2",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 5){
                            res[key].children[k].state = {backgroundColor:"#20bf0a",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 6){
                            res[key].children[k].state = {backgroundColor:"#b3b5b8",color:"#ffffff"};
                        }
                    });
                });
                this.apartment = res;
            },
            changeTung: async function(id){
                this.tungId = id;
                this.unitId =  await this.fetchUnit(this.tungId);
                this.fetchApartment(this.unitId);
            },
            show(id){
                this.$router.push({
                    path:'/PreinfoDetail',
                    query:{
                        id:id
                    }
                })
            },
            changeUnit(){
                this.fetchApartment(this.unitId);
            },
            appointment(){
                this.$router.push('/Appointment')
            }
        },
        mounted() {
            this.fetchData();
            this.fetchTung();
        }
    }
</script>

<style scoped>
    #pre{
        width: 750px;
        background-color: #ffffff;
    }
    header{
        width: 750px;
        height: 88px;
    }
    .header{
        width: 690px;
        height: 88px;
        margin: 0 auto;
    }
    .header>div{
        height: 88px;
        width: 88px;
        float: left;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
    }
    .header>h2{
        font-size: 36px;
        text-align: center;
        height: 88px;
        line-height: 88px;
        float: left;
        margin-left: 200px;
    }
    .pre{
        width: 690px;
        margin:  40px auto 0;
    }
    .pre >>> img{
        width: 690px;
        height: 519px;
    }
    .tung{
        width: 690px;
        margin: 20px auto;
    }
    .tung>table{
        width: 100%;
    }
    .tung>table td{
        width: 100%;
        height: 88px;
        font-size: 28px;
        text-align: center;
        border: 1px solid #e5e5e5;
    }
    .tung>table th{
        width: 100%;
        height: 88px;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
        background-color: #f9f9f9;
        border: 1px solid #e5e5e5;
    }
    .info{
        width: 690px;
        margin: 20px auto 40px;
    }
    .info>table th{
        width: 175px;
        height: 90px;
        text-align: center;
        font-size: 26px;
        border: 1px solid #e5e5e5;
        background-color: #f9f9f9;
    }
    .info>table td{
        height: 90px;
        width: 100px;
        text-align: center;
        font-size: 26px;
        border: 1px solid #e5e5e5;
    }
    .info>table td a{
        color: #ef3e4a;
        margin-right: 12px;
    }
    .footer{
        width: 690px;
        height: 112px;
        margin: 0 auto;
    }
    .status{
        width: 690px;
        margin: 0 auto 60px;
        zoom: 1;
    }
    .status:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .status>div{
        width: 345px;
        height: 120px;
        float: left;
        text-align: center;
    }
    .status>div:nth-child(1){
        background-color: #f0621f;
    }
    .status>div:nth-child(2){
        background-color: #ffab33;
    }
    .status>div:nth-child(3){
        background-color: #247eb5;
    }
    .status>div:nth-child(4){
        background-color: #d11cf2;
    }
    .status>div:nth-child(5){
        background-color: #20bf0a;
    }
    .status>div:nth-child(6){
        background-color: #b3b5b8;

    }
    .status>div>p{
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        color: #ffffff;
    }
    .status>div>p:nth-child(1){
        margin-top: 25px;
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
    .see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    .consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
    .active{
        color: #ef3e4a;
    }
    .info>table th .van-dropdown-menu{
        background-color: #f9f9f9;
    }
</style>