<template>
    <div id="apartment_detail">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>户型详情</h2>
            </div>
        </header>
        <div class="content" v-html="detail.details">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApartmentDetail",
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
                let res = await this.post('houseShape/selbyid', {"id":this.id});
                this.detail = res.data.data;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #apartment_detail{
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
    .content{
        width: 690px;
        margin: 40px auto 0;
    }
    .content >>> img{
        width: 690px;
        height: 460px;
        margin-bottom: 30px;
    }
    .content>p{
        font-size: 26px;
        color: #666666;
        line-height: 70px;
    }
</style>