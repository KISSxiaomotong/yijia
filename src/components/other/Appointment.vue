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
                <input type="text" placeholder="请选择适合你的看房时间" v-model="cdate">
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
                this.cdate = new Date();
                this.cdate = this.dateFormat("YYYY-mm-dd HH:MM:SS", this.cdate)
                let res = await this.post('request/add', {
                    "type":1,"cdate":this.cdate,"phone":this.phone,"details":this.details
                });
                if(res.data.code === 200){
                    Toast("提交成功！");
                }else{
                    Toast("提交失败！");
                }
            },
            dateFormat(fmt, date){
                let ret;
                const opt = {
                    "Y+": date.getFullYear().toString(),        // 年
                    "m+": (date.getMonth() + 1).toString(),     // 月
                    "d+": date.getDate().toString(),            // 日
                    "H+": date.getHours().toString(),           // 时
                    "M+": date.getMinutes().toString(),         // 分
                    "S+": date.getSeconds().toString()          // 秒
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (let k in opt) {
                    ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                    };
                };
                return fmt;
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