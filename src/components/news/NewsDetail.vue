<template>
    <div id="detail">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>行业咨询</h2>
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
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
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
                let res = await this.post('industryInformation/selbyid',{"id":this.id});
                this.detail = res.data.data;
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
    .content >>> img{
        width: 690px;
        height: 460px;
        margin-bottom: 30px;
    }
    .content >>> p{
        font-size: 26px;
        color: #666666;
        line-height: 70px;
    }
</style>