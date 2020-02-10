<template>
    <div id="appointment">
        <header>
            <div class="header">
                <h2>预约专车</h2>
            </div>
        </header>
        <div class="banner">
            <img src="../../assets/images/banner.jpg">
        </div>
        <div class="content">
            <div class="see">
                <h2>预约看房时间</h2>
                <input type="text" placeholder="请填写适合你的看房时间">
            </div>
            <div class="phone">
                <h2>预约手机号码</h2>
                <input type="text" placeholder="请输入你的手机号码">
            </div>
            <div class="house">
                <h2>想去看的楼盘<span>（非必填）</span></h2>
                <input type="text" placeholder="请选择适合你的看房时间">
            </div>
        </div>
        <div class="submit">
            <input type="button" value="提交">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Appointment"
    }
</script>

<style scoped>
    #appointment{
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
    .banner{
        width: 750px;
        height: 260px;
    }
    .banner>img{
        width: 750px;
        height: 260px;
    }
    .content{
        width: 690px;
        margin: 50px auto 10px;
    }
    .content>div{
        width: 690px;
        padding-bottom: 40px;
    }
    .content>div>input{
        width: 650px;
        height: 80px;
        border-radius: 6px;
        margin-top: 40px;
        padding-left: 40px;
        background-color: #f6f6f6;
    }
    .content>div>input::-webkit-input-placeholder{
        font-size: 24px;
        color: #999999;
    }
    .content>div>h2{
        font-size: 36px;
        font-weight: bold;
    }
    .submit{
        width: 690px;
        height: 80px;
        margin: 0 auto;
    }
    .submit>input{
        width: 690px;
        height: 80px;
        font-size: 30px;
        border-radius: 10px;
        color: #ffffff;
        background-color: #00c0eb;
    }
</style>