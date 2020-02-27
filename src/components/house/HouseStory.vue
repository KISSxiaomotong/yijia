<template>
    <div id="story">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>买房故事</h2>
            </div>
        </header>
            <div class="content">
                <div v-for="(item,index) in lists" :key="index">
                    <div class="top">
                        <div class="image">
                            <img :src="item.photo">
                        </div>
                        <div class="info">
                            <h2>{{item.mfName}}</h2>
                            <p>成交楼盘：{{item.buyProperties}}</p>
                            <p>成交时间：{{item.cdate}}</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div>
                            <p>{{item.represent}}<router-link :to="{path:'/StoryDetail',query: {id: item.id}}">查看全文</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "HouseStory",
        data(){
            return{
                lists: ""
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('buyHouseStory/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            },
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #story{
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
        width: 750px;
        padding: 20px 0;
        background-color: #f5f9fa;
    }
    .content>div{
        width: 690px;
        height: 350px;
        margin: 20px auto;
        padding: 30px 20px;
        background-color: #ffffff;
    }
    .content>div:first-child{
        margin: 0 auto;
    }
    .top{
        width: 650px;
        height: 200px;
    }
    .image{
        width: 190px;
        height: 200px;
        float: left;
    }
    .image>img{
        width: 180px;
        height: 180px;
    }
    .info{
        margin-left: 20px;
        float: left;
    }
    .info>h2{
        font-size: 32px;
        padding: 10px 0 30px;
        font-weight: bold;
    }
    .info>p{
        font-size: 24px;
        color: #a5a5a5;
        padding-bottom: 20px;
    }
    .bottom{
        width: 690px;
        height: 120px;
    }
    .bottom>div>p{
        font-size: 24px;
        color: #888888;
        line-height: 40px;
    }
    .bottom>div>p>a{
        margin-left: 14px;
    }
</style>