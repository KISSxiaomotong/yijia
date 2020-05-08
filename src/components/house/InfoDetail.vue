<template>
    <div id="info_detail">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>基本信息</h2>
            </div>
        </header>
        <div class="info_content" v-html="detail">

        </div>
    </div>
</template>

<script>
    export default {
        name: "InfoDetail",
        data(){
            return{
                id:this.$route.query.id,
                detail: {}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                res = res.data.data;
                this.detail = res.properties.details;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #info_detail{
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
    .info_content{
        width: 690px;
        margin: 0 auto;
    }
    .info_content >>> h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
    }
    .info_content >>> li{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .info_content >>> p{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .info_content >>> span{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
</style>