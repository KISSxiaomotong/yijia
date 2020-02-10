<template>
    <div id="register">
        <div class="fork">
            <img src="../../assets/images/person/fork.png">
        </div>
        <div class="content">
            <h2>手机号码注册</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone">
            <div>
                <input type="text" placeholder="请输入手机验证码">
                <input type="button" value="获取验证码">
            </div>
            <input type="text" placeholder="请输入密码" class="password">
        </div>
        <div class="other">
            <van-checkbox v-model="checked" shape="square" checked-color="#00c0eb">
                <p class="p1">我已阅读并同意<router-link to="#">《注册协议》</router-link><router-link to="#">《隐私政策》</router-link></p>
            </van-checkbox>
            <input type="button" value="确认">
            <p class="p2">已有账号？<router-link to="#">去登录</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                checked: false
            };
        }
    }
</script>

<style scoped>
    #register{
        width: 570px;
        height: 740px;
        top: 300px;
        left: 90px;
        border-radius: 20px;
        position: fixed;
    }
    .fork{
        width: 570px;
        height: 70px;
    }
    .fork>img{
        width: 40px;
        height: 40px;
        float: right;
        padding: 30px 30px 0 0;
    }
    .content{
        padding: 0 36px 0 54px;
    }
    .content>h2{
        font-size: 40px;
    }
    .content>input{
        width: 460px;
        height: 80px;
        padding-left: 30px;
        border-radius: 5px;
        background-color: #f6f6f6;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #999999;
    }
    .content>div>input[type='text']{
        width: 282px;
        height: 80px;
        padding-left: 30px;
        border-radius: 5px;
        background-color: #f6f6f6;
    }
    .content>div>input[type='button']{
        width: 168px;
        height: 80px;
        color: #ffffff;
        font-size: 26px;
        border-radius: 5px;
        background-color: #00c0eb;
    }
    .phone{
        margin: 40px 0 30px;
    }
    .password{
        margin: 30px 0 40px;
    }
    .other{
        padding: 0 36px 0 54px;
    }
    .other>input{
        width: 490px;
        height: 80px;
        font-size: 30px;
        color: #ffffff;
        border-radius: 5px;
        margin-top: 30px;
        background-color: #00c0eb;
    }
    .other>div{
        height: 30px;
    }
    .other>p{
        font-size: 24px;
        color: #999999;
    }
    .p1{
        font-size: 22px;
        color: #999999;
    }
    .p1>a{
        color: #f44336;
    }
    .p2{
        text-align: center;
        padding: 42px 0;
    }
    .p2>a{
        color: #01c0ec;
    }
</style>