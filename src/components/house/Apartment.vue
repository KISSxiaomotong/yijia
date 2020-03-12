<template>
    <div id="apartment">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>全部户型</h2>
            </div>
        </header>
        <div class="apartment_content">
            <div v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                <div class="apartment_image">
                    <img :src="item.imgs">
                </div>
                <div class="apartment_detail">
                    <h4>{{item.title}}<span>在售</span></h4>
                    <p>朝向：{{item.orientation}}</p>
                    <h5>类型：{{item.type}}</h5>
                    <h3>价格：{{item.sumPrice}}万元左右</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Apartment",
        data(){
            return{
                id:this.$route.query.id,
                lists:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('houseShape/all', {"id":this.id});
                this.lists = res.data.data;
            },
            show(id){
                this.$router.push({
                    path:'/ApartmentDetail',
                    query:{
                        id:id
                    }
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #apartment{
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
    .apartment_content{
        width: 690px;
        margin: 20px auto 0;
    }
    .apartment_content>div{
        width: 690px;
        height: 200px;
        margin-bottom: 40px;
    }
    .apartment_image{
        width: 240px;
        height: 186px;
        float: left;
    }
    .apartment_image>img{
        width: 240px;
        height: 186px;
        border-radius: 10px;
    }
    .apartment_detail{
        float: left;
        margin-left: 26px;
    }
    .apartment_detail>h4{
        font-size: 28px;
        font-weight: bold;
    }
    .apartment_detail>h4>span{
        display: inline-block;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #ffe8ea;
        color: #ef3e4a;
        font-size: 22px;
        font-weight: normal;
        margin-left: 14px;
        padding: 0 10px;
    }
    .apartment_detail>p,.apartment_detail>h5{
        font-size: 24px;
        color: #b1b3b5;
        margin: 22px 0;
    }
    .apartment_detail>h3{
        font-weight: lighter;
        color: #ef3e4a;
        font-size: 24px;
    }
</style>