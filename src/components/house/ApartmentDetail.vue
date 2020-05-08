<template>
    <div id="apartment_detail">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>户型详情</h2>
            </div>
        </header>
        <div class="content">
            <div class="content_image">
                <img :src="detail.imgs">
            </div>
            <div class="content_middle">
                <div class="content_title">
                   <div>
                       <h2>{{detail.title}}</h2>
                       <span>在售</span>
                   </div>
                    <ul>
                        <li v-for="(item,index) in detail.label" :key="index">{{item}}</li>
                    </ul>
                </div>
                <table>
                    <tr>
                        <td>参考总价：</td>
                        <td>{{detail.sumPrice}}</td>
                        <td>单价：</td>
                        <td>{{detail.unitPrice}}/m²</td>
                    </tr>
                    <tr>
                        <td>建筑面积：</td>
                        <td>{{detail.area}}m²</td>
                        <td>房屋朝向：</td>
                        <td>{{detail.orientation}}</td>
                    </tr>
                    <tr>
                        <td>层高：</td>
                        <td>{{detail.cheight}}</td>
                        <td>类型：</td>
                        <td>{{detail.type}}</td>
                    </tr>
                </table>
            </div>
            <div class="content_detail">
                <h2>户型分析</h2>
                <p>{{detail.analysis}}</p>
                <h2>户型详解</h2>
                <p>{{detail.details}}</p>
                <h2>优势</h2>
                <p>{{detail.advantage}}</p>
            </div>
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
                res = res.data.data;
                res.label = res.label.split(",");
                this.detail = res;
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
    .content_image{
        width: 690px;
        padding: 30px 0;
    }
    .content_image>img{
        width: 690px;
    }
    .content_title>div{
        height: 40px;
        line-height: 40px;
    }
    .content_title>div>h2{
        font-size: 30px;
        font-weight: bold;
        float: left;
    }
    .content_title>div>span{
        font-size: 24px;
        float: left;
        color: #ef3e4a;
        padding: 0 6px;
        margin-left: 12px;
        background-color: #ffe8ea;
    }
    .content_title>ul{
        font-size: 24px;
        height: 30px;
        margin: 20px 0;
        line-height: 30px;
    }
    .content_title>ul>li{
        float: left;
        padding: 4px 6px;
        color: #999999;
        margin-right: 12px;
        background-color: #f3f5f7;
    }
    .content_middle>table>tr{
        height: 50px;
        font-size: 26px;
        line-height: 50px;
    }
    .content_middle>table>tr>td:nth-child(2n+1){
        width: 160px;
    }
    .content_middle>table>tr>td:nth-child(2n){
        width: 180px;
    }
    .content_detail{
        margin: 30px 0 60px;
    }
    .content_detail>h2{
        font-size: 36px;
        font-weight: bold;
        margin: 30px 0;
    }
    .content_detail>p{
        font-size: 24px;
        line-height: 30px;
    }
</style>