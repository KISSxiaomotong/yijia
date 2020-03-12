<template>
    <div id="center">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>个人中心</h2>
            </div>
        </header>
        <div class="info">
            <img :src="user.headPortrait">
            <h2>{{user.userName}}</h2>
            <router-link class="tag" to="Mydata"><span>编辑个人资料</span></router-link>
        </div>
        <div class="fill"></div>
        <div class="list">
            <ul>
                <router-link to="/Coupon" tag="li"><img src="../../assets/images/person/coupon.png"><span>我的优惠券</span></router-link>
                <router-link to="/Help" tag="li"><img src="../../assets/images/person/house.png"><span>帮我找房</span></router-link>
                <router-link to="/Appointment" tag="li"><img src="../../assets/images/person/car.png"><span>预约专车</span></router-link>
                <router-link to="/HouseSearch" tag="li"><img src="../../assets/images/person/house.png"><span>楼盘合作</span></router-link>
                <router-link to="/About" tag="li"><img src="../../assets/images/person/about.png"><span>关于我们</span></router-link>
                <router-link to="/Advice" tag="li"><img src="../../assets/images/person/suggest.png"><span>投诉建议</span></router-link>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "Center",
        components: {Footer},
        data(){
            return{
                user:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            getUser(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                this.user = user;
            }
        },
        mounted() {
            this.getUser();
            if(!this.user){
                this.$router.push({
                    path:'/index',
                    query:{
                        notLogin:true
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #center{
        width: 750px;
        background: #ffffff;
    }
    header{
        width: 690px;
        height: 88px;
        margin: 0 auto;
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
    .info{
        width: 720px;
        height: 226px;
        margin: 42px 0 0 30px;
    }
    .info>img{
        width: 122px;
        height: 122px;
        border-radius: 122px;
    }
    .info>h2{
        font-size: 36px;
        margin-left: 28px;
        height: 122px;
        line-height: 122px;
        display: inline-block;
    }
    .info>a{
        display: block;
        float: right;
        width: 192px;
        height: 62px;
        margin-top: 30px;
        line-height: 62px;
        text-align: center;
        font-size: 22px;
        color: #ffffff;
        background-color: #00c0eb;
        border-bottom-left-radius: 62px;
        border-top-left-radius: 62px;
    }
    .fill{
        width: 750px;
        height: 24px;
        background-color: #f8f8fa;
    }
    .list{
        width: 690px;
        margin: 0 auto;
    }
    .list>ul{
        margin-top: 20px;
    }
    .list>ul>li{
        width: 690px;
        height: 56px;
        line-height: 56px;
        margin: 30px 0;
        background-image: url("../../assets/images/right_arrow.png");
        background-repeat: no-repeat;
        background-position: right;
    }
    .list>ul>li>img{
        width: 50px;
        height: 42px;
    }
    .list>ul>li>span{
        margin-left: 26px;
        font-size: 26px;
        font-weight: bold;
        color: #222222;
    }
</style>