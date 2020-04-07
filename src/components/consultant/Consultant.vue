<template>
    <div id="consultant">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>咨询师</h2>
            </div>
        </header>
        <div class="top"></div>
        <div class="middle">
            <div class="contact">
                <img :src="detail.headPortrait">
                <div>
                    <h3>{{detail.name}}</h3>
                    <p>{{detail.university}}</p>
                </div>
                <input type="button" value="在线咨询" @click.stop="openwin()">
            </div>
            <div class="desc">
                <p>{{detail.slogan}}</p>
            </div>
        </div>
        <div class="bottom">
            <h2>基本信息</h2>
            <div v-html="detail.personalInformation">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Consultant",
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
                let res = await this.post('expert/selbyid',{"id":this.id});
                this.detail = res.data.data;
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #consultant{
        width: 750px;
        background-color: #f5f9fa;
    }
    header{
        width: 750px;
        height: 88px;
        background-color: #ffffff;
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
    .top{
        width: 750px;
        height: 176px;
        background-color: #00c0eb;
    }
    .middle{
        width: 690px;
        height: 350px;
        margin: -126px auto 0;
        border-radius: 20px;
        background-color: #ffffff;
    }
    .middle>div{
        float: left;
    }
    .contact{
        width: 690px;
        height: 190px;
    }
    .contact>img{
        width: 120px;
        height: 120px;
        float: left;
        margin: 40px 0 0 20px;
        border-radius: 120px;
    }
    .contact>div{
        margin: 65px 0 0 32px;
        float: left;
    }
    .contact>div>h3{
        font-size: 32px;
        font-weight: bold;
    }
    .contact>div>p{
        font-size: 24px;
        color: #444444;
        margin-top: 20px;
    }
    .contact>input{
        width: 150px;
        height: 60px;
        border-radius: 60px;
        color: #ffffff;
        font-size: 26px;
        background-color: #0fc9f2;
        float: right;
        margin: 63px 30px 0 0;
    }
    .desc{
        width: 630px;
        height: 72px;
        padding: 24px 0;
        margin: 0 30px;
        border-radius: 16px;
        background-color: #f5f9fa;
    }
    .desc>p{
        color: #444444;
        font-size: 24px;
        line-height: 36px;
        padding: 0 28px;
    }
    .bottom{
        width: 690px;
        margin: 12px auto 0;
        background-color: #ffffff;
    }
    .bottom>h2{
        font-size: 36px;
        padding: 48px 0 48px 28px;
        font-weight: bold;
    }
    .bottom >>> img{
        width: 690px;
    }
</style>