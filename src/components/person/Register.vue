<template>
    <div id="register" v-show=registerShow>
        <div class="fork">
            <img src="../../assets/images/person/fork.png" @click="registerClose()">
        </div>
        <div class="content">
            <h2>手机号码注册</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone" v-model="phone">
            <div>
                <input type="text" placeholder="请输入手机验证码" v-model="code">
                <input type="button" v-model="verification" @click="getCode()">
            </div>
            <input type="password" placeholder="请输入密码" class="password" v-model="password">
        </div>
        <div class="other">
            <van-checkbox v-model="checked" shape="square" checked-color="#00c0eb">
                <p class="p1">我已阅读并同意<router-link to="#">《注册协议》</router-link><router-link to="#">《隐私政策》</router-link></p>
            </van-checkbox>
            <input type="button" value="确认" @click="register()">
            <p class="p2">已有账号？<span @click="toLogin()">去登录</span></p>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Register",
        data() {
            return {
                checked:false,
                registerShow: false,
                phone: "",
                code: "",
                password: "",
                wait: 0,
                verification: "获取验证码"
            };
        },
        methods:{
            registerOpen(){
                this.registerShow = true;
            },
            registerClose(){
                this.registerShow = false;
            },
            toLogin(){
                this.$emit('toLogin');
            },
            getCode(){
                if (!this.phone) {
                    Toast('手机号不能为空');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确');
                    return false;
                }
                if (this.wait > 0) {
                    return false;
                }
                this.wait = 60;
                let that = this;
                let timer = setInterval(function(){
                    if(that.wait > 0){
                        that.verification = that.wait + "s后再获取";
                        that.wait -- ;
                    }else{
                        that.verification = "获取验证码";
                        clearInterval(timer);
                    }
                },1000);
                this.post('user/getCode', {"phone":this.phone});
            },
            register: async function (){
                let res = await this.post('user/register', {"phone":this.phone,"passWord":this.password,"code":this.code});
                if(res.data.code === 200){
                    Toast("注册成功！");
                }else if(res.data.code === 400){
                    Toast("已注册或验证码错误！");
                }
            }
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
        background-color: #ffffff;
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
    .p2>span{
        color: #01c0ec;
    }
</style>