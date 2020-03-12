<template>
    <div id="appointment">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>预约专车</h2>
            </div>
        </header>
        <div class="banner">
            <img src="../../assets/images/banner.jpg">
        </div>
        <div class="content">
            <div class="see">
                <h2>预约看房时间</h2>
                <input type="text" placeholder="请填写适合你的看房时间" v-model="cdate">
            </div>
            <div class="phone">
                <h2>预约手机号码</h2>
                <input type="text" placeholder="请输入你的手机号码" v-model="phone">
            </div>
            <div class="house">
                <h2>想去看的楼盘<span>（非必填）</span></h2>
                <input type="text" placeholder="请填写想去看的楼盘" v-model="details">
            </div>
        </div>
        <div class="submit">
            <input type="button" value="提交" @click="publish()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Appointment",
        data(){
            return{
                cdate: "",
                phone: "",
                details: ""
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            publish: async function (){
                if(this.cdate == ""){
                    Toast("请填写看房时间！");
                    return false;
                }
                if (!this.phone) {
                    Toast('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
                    return false;
                }
                if(this.details == ""){
                    Toast('请填写想去看的楼盘！');
                    return false;
                }
                let res = await this.post('request/add', {
                    "type":1,"cdate":this.cdate,"phone":this.phone,"details":this.details
                });
                if(res.data.code === 200){
                    Toast("提交成功！");
                    this.$router.go(-1);
                }else{
                    Toast("提交失败！");
                }
            }
        }

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
    input{
        font-size: 24px;
    }
</style>