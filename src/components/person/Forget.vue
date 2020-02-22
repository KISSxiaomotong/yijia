<template>
    <div id="forget">
        <header>
            <div class="header">
                <h2>修改密码</h2>
            </div>
        </header>
        <div class="forget_top">
            <input type="text" placeholder="请输入你的手机号" id="phone">
            <input type="text" placeholder="输入验证码" id="code">
            <input type="button" value="获取验证码" id="getcode">
        </div>
        <div class="fill"></div>
        <div class="forget_bottom">
            <input type="password" placeholder="请输入新密码">
            <input type="password" placeholder="再次输入新密码">
        </div>
        <div class="publish">
            <input type="button" value="提交">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Forget",
        data(){

        },
        methods:{

        }
    }
</script>

<style scoped>
    #forget{
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
    .forget_top{
        width: 690px;
        height: 200px;
        margin: 0 auto;
    }
    #phone{
        width: 690px;
        height: 99px;
        border: none;
        border-bottom: 1px solid #edf1f5;
    }
    #code{
        width: 535px;
        height: 100px;
    }
    #getcode{
        width: 150px;
        height: 53px;
        color: #00c0eb;
        font-size: 24px;
        border-radius: 5px;
        border: 1px solid #00c0eb;
        background-color: #ffffff;
    }
    .fill{
        width: 750px;
        height: 20px;
        background-color: #edf1f5;
    }
    .forget_bottom{
        width: 690px;
        height: 200px;
        margin: 0 auto;
    }
    .forget_bottom>input{
        width: 690px;
        height: 99px;
        border: none;
        border-bottom: 1px solid #edf1f5;
    }
    .publish{
        width: 690px;
        height: 80px;
        margin: 40px auto 0;
    }
    .publish>input{
        width: 690px;
        height: 80px;
        border-radius: 5px;
        color: #ffffff;
        background-color: #00c0eb;
    }
    input{
        font-size: 30px;
    }
    input::-webkit-input-placeholder{
        font-size: 30px;
        color: #999999;
    }
</style>