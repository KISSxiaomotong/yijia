<template>
    <div id="detail">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>楼盘动态</h2>
            </div>
        </header>
        <div class="info">
            <div class="title">
                <h2>{{detail.title}}</h2>
            </div>
            <div class="middle">
                <p>来源：{{detail.source}}</p><span>{{detail.cdate}}</span>
            </div>
            <div class="content" v-html="detail.details">
            </div>
        </div>
        <div class="footer">
            <div class="service" @click="openwin()">
                <h4>在线客服</h4>
            </div>
            <input type="button" class="see" value="预约看房" @click="appointment()">
            <input type="button" class="consult" value="电话咨询" @click="callPhone()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DynamicDetail",
        data(){
            return{
                id:this.$route.query.id,
                detail:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('propertiesDynamic/selbyid',{"id":this.id});
                this.detail = res.data.data;
            },
            appointment(){
                this.$router.push('/Appointment')
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            },
            callPhone(){
                window.location.href = 'tel://13188888888'
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #detail{
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
    .info{
        width: 690px;
        margin: 0 auto;
    }
    .title{
        width: 690px;
        height: 100px;
    }
    .title>h2{
        font-size: 36px;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
        margin-top: 40px;
    }
    .middle{
        width: 690px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
    }
    .middle>p{
        font-size: 24px;
        color: #888888;
        float: left;
    }
    .middle>span{
        display: block;
        font-size: 24px;
        color: #888888;
        float: left;
        margin-left: 20px;
    }
    .content{
        width: 690px;
        margin: 40px auto 0;
    }
    .content>img{
        width: 690px;
        height: 460px;
        margin-bottom: 30px;
    }
    .content>p{
        font-size: 26px;
        color: #666666;
        line-height: 70px;
    }
    .footer{
        width: 690px;
        height: 112px;
        margin: 0 auto;
    }
    .service{
        width: 100px;
        height: 100px;
        background-image: url("../../assets/images/house/service.png");
        background-repeat: no-repeat;
        background-size: 50px 50px;
        background-position-x: 16px;
        background-position-y: 6px;
        margin-top: 12px;
    }
    .service>h4{
        font-size: 22px;
        color: #888888;
        height: 30px;
        line-height: 30px;
        margin-top: 60px;
    }
    .footer>input{
        width: 274px;
        height: 76px;
        border-radius: 5px;
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        margin-top: 16px;
    }
    .see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    .consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
</style>