<template>
    <div class="mydata">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>我的资料</h2>
            </div>
        </header>
        <div class="image"><span>头像</span><img :src="user.headPortrait"></div>
        <div class="nickname" @click="edit(1)"><span>昵称</span><p>{{user.userName}}</p></div>
        <div class="info">
            <ul>
                <li @click="edit(2)"><span>性别</span><p>男</p></li>
                <li @click="edit(3)"><span>邮箱</span><p>未设置</p></li>
                <li @click="edit(4)"><span>真实姓名</span><p>未填写</p></li>
                <li><span>手机号</span><p>{{user.phone}}</p></li>
            </ul>
        </div>
        <div class="layout">
            <input type="button" value="退出登录" @click="layout()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mydata",
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
            },
            layout(){
                window.localStorage.removeItem('user');
                this.$router.push('/');
            },
            edit(cate){
                this.$router.push({
                    path:'/EditInfo',
                    query:{
                        cate:cate
                    }
                })
            }
        },
        mounted() {
            this.getUser();
        }
    }
</script>

<style scoped>
    .mydata{
        width: 750px;
        background-color: #ffffff;
    }
    header{
        width: 750px;
        height: 88px;
        border-bottom: 1px solid #edf1f5;
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
    .image{
        width: 690px;
        height: 144px;
        margin: 0 auto;
        border-bottom: 1px solid #edf1f5;
    }
    .image>span{
        display: block;
        height: 144px;
        line-height: 144px;
        font-size: 30px;
        float: left;
    }
    .image>img{
        width: 106px;
        height: 106px;
        border-radius: 106px;
        float: right;
        margin-top: 20px;
    }
    .nickname{
        width: 690px;
        height: 100px;
        margin: 0 auto;
        border-bottom: 1px solid #edf1f5;
    }
    .nickname>span{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        float: left;
    }
    .nickname>p{
        float: right;
        font-size: 30px;
        height: 100px;
        line-height: 100px;
    }
    .info>ul>li{
        width: 690px;
        height: 100px;
        margin: 0 auto;
        border-bottom: 1px solid #edf1f5;
        background-image: url("../../assets/images/person/arrow.png");
        background-repeat: no-repeat;
        background-position: right;
        background-size: 20px 40px;
    }
    .info>ul>li{
        color: #333333;
    }
    .info>ul>li>span{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        float: left;
    }
    .info>ul>li>p{
        float: right;
        font-size: 30px;
        height: 100px;
        line-height: 100px;
        margin-right: 40px;
    }
    .layout{
        width: 690px;
        height: 170px;
        margin: 0 auto;
    }
    .layout>input{
        width: 690px;
        height: 82px;
        background-color: #00c0eb;
        border-radius: 6px;
        font-size: 30px;
        color: #ffffff;
        margin-top: 40px;
    }
</style>