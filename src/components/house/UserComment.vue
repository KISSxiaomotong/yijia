<template>
    <div id="user_comment">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>用户点评</h2>
            </div>
        </header>
        <div class="comment_content">
            <div class="user_info" v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                <div class="user_left">
                    <img :src="item.obj.headPortrait">
                </div>
                <div class="user_right">
                    <h4>{{item.obj.name}}</h4>
                    <p>{{item.comment}}</p>
                    <span>{{item.cdate}}</span>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserComment",
        data(){
            return{
                lists:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('propertiesComment/bytype', {"type":2});
                this.lists = res.data.data;
            },
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #user_comment{
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
    .comment_content{
        width: 690px;
        margin: 20px auto 0;
    }
    .user_info{
        padding: 30px 0;
    }
    .user_left{
        width: 80px;
        float: left;
    }
    .user_left>img{
        width: 80px;
        height: 80px;
        border-radius: 80px;
    }
    .user_right{
        float: left;
        margin-left: 20px;
    }
    .user_right>h4{
        font-size: 26px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
    }
    .user_right>p{
        font-size: 24px;
        line-height: 46px;
    }
    .user_right>span{
        font-size: 22px;
        margin-top: 10px;
        color: #999999;
        display: inline-block;
    }
    .clear{
        clear: both;
    }
</style>