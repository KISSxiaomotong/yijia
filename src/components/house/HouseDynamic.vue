<template>
    <div id="dynamic">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>楼盘动态</h2>
            </div>
        </header>
        <div class="content">
            <div class="info" v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                <div class="info_left">
                    <h3>{{item.title}}</h3>
                    <p>{{item.represent}}</p>
                    <span>{{item.cdate}}</span>
                </div>
                <div class="info_right">
                    <img :src="item.picture">
                </div>
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
        name: "HouseDynamic",
        data(){
            return {
                lists:{}
            }
        },
        methods: {
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('propertiesDynamic/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            },
            show(id){
                this.$router.push({
                    path:'/DynamicDetail',
                    query:{
                        id:id
                    }
                })
            },
            appointment(){
                this.$router.push('/Appointment')
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #dynamic{
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
    .content{
        width: 690px;
        margin: 0 auto;
    }
    .info{
        height: 250px;
        width: 690px;
        margin-top: 50px;
        border-bottom: 1px solid #edf1f5;
    }
    .info>div{
        float: left;
    }
    .info_left{
        width: 450px;
        height: 250px;
    }
    .info_left>h3{
        font-size: 26px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
    }
    .info_left>p{
        font-size: 24px;
        line-height: 40px;
        color: #888888;
        margin: 24px 0;
    }
    .info_left>span{
        font-size: 24px;
        color: #888888;
    }
    .info_right{
        width: 240px;
        float: left;
    }
    .info_right>img{
        width: 220px;
        height: 172px;
        float: right;
        border-radius: 4px;
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
    .see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    .consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
</style>