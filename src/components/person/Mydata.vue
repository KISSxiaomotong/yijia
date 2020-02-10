<template>
    <div class="mydata">
        <header>
            <div class="header">
                <h2>我的资料</h2>
            </div>
        </header>
        <div class="image"><span>头像</span><img src="../../assets/images/material/avatar.jpg"></div>
        <div class="nickname"><span>昵称</span><p>那些你很冒险的梦</p></div>
        <div class="info">
            <ul>
                <li><router-link to="#"><span>性别</span><p>女</p></router-link></li>
                <li><router-link to="#"><span>邮箱</span><p>未设置</p></router-link></li>
                <li><router-link to="#"><span>真实姓名</span><p>周子凯</p></router-link></li>
                <li><router-link to="#"><span>手机号</span><p>13199999999</p></router-link></li>
            </ul>
        </div>
        <div class="layout">
            <input type="button" value="退出登录">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mydata"
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
    .header>h2{
        font-size: 36px;
        text-align: center;
        height: 88px;
        line-height: 88px;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
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
    .info>ul>li>a{
        color: #333333;
    }
    .info>ul>li>a>span{
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        float: left;
    }
    .info>ul>li>a>p{
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