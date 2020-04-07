<template>
    <div id="login" v-show=loginShow>
        <div class="fork">
            <img src="../../assets/images/person/fork.png" @click="loginClose()">
        </div>
        <div class="content">
            <h2>手机号码登录</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone" v-model="phone">
            <input type="password" placeholder="请输入密码" class="password" v-model="password">
            <router-link to="/Forget">忘记密码？</router-link>
        </div>
        <div class="other">
            <input type="button" value="确认" @click="login">
            <p class="p2">没有账号？<span @click="toRegister()">去注册</span></p>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Login",
        data() {
            return {
                loginShow: false,
                phone: "",
                password: ""
            };
        },
        methods:{
            loginOpen(){
                this.loginShow = true;
            },
            loginClose(){
                this.loginShow = false;
            },
            toRegister(){
                this.$emit('toRegister');
            },
            login: async function (){
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
                    return false;
                }
                if(this.password == ""){
                    Toast('请填写密码！');
                    return false;
                }
                let res = await this.post('user/signin', {"phone":this.phone,"passWord":this.password});
                res = res.data;
                if(res.code == 200){
                    let user = res.data;
                    window.localStorage.setItem("user",JSON.stringify(user));
                    Toast('登录成功！');
                    this.loginClose();
                }else if(res.code == 400){
                    Toast('账号或密码错误！');
                }
            }
        }
    }
</script>

<style scoped>
    #login{
        width: 570px;
        height: 630px;
        top: 300px;
        left: 90px;
        background-color: #ffffff;
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
    .content>a{
        display: block;
        text-align: right;
        font-size: 24px;
        color: #888888;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #999999;
    }
    .phone{
        margin: 40px 0 30px;
    }
    .password{
        margin-bottom: 40px;
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
    .other>p{
        font-size: 24px;
        color: #999999;
    }
    .p2{
        text-align: center;
        padding: 42px 0;
    }
    .p2>span{
        color: #01c0ec;
    }
    input{
        font-size: 26px;
    }
</style>