<template>
    <div id="forget">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>修改密码</h2>
            </div>
        </header>
        <div class="forget_top">
            <input type="text" placeholder="请输入你的手机号" id="phone" v-model="phone">
            <input type="text" placeholder="输入验证码" id="code" v-model="code">
            <input type="button" v-model="verification" id="getcode" @click="getCode()">
        </div>
        <div class="fill"></div>
        <div class="forget_bottom">
            <input type="password" placeholder="请输入新密码" v-model="password">
            <input type="password" placeholder="再次输入新密码" v-model="confirm">
        </div>
        <div class="publish">
            <input type="button" value="提交" @click="publish()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Forget",
        data(){
            return{
                phone: "",
                code: "",
                password: "",
                confirm: "",
                verification: "获取验证码",
                wait: 0
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            publish: async function (){
                if (!this.phone) {
                    Toast('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
                    return false;
                }
                if(this.code == ""){
                    Toast('请填写验证码！');
                    return false;
                }
                if(this.password == ""){
                    Toast('请填写新密码！');
                    return false;
                }
                if(this.confirm == ""){
                    Toast('请填写新密码！');
                    return false;
                }
                if(this.password == this.confirm){
                    Toast('两次密码不一致！');
                    return false;
                }
                let res = await this.post('user/changePW', {"phone":this.phone,"passWord":this.password,"code":this.code});
                if(res.data.code === 200){
                    Toast("修改成功！");
                }else if(res.data.code === 400){
                    Toast("修改失败！");
                }
            },
            getCode(){
                if (!this.phone) {
                    Toast('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
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
                this.post('user/changeCode', {"phone":this.phone});
            }
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