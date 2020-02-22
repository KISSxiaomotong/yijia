<template>
    <footer>
        <div class="footer">
            <div v-for="(item,index) in link" :key="index"><router-link :to="item.link"><img :src="item.image"><span>{{item.title}}</span></router-link></div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                link: [
                    {"title":"首页","link":"/","image": require("../../assets/images/footer1.png")},
                    {"title":"楼盘","link":"/HouseSearch","image":require("../../assets/images/footer2.png")},
                    {"title":"咨询师","link":"/Consult","image":require("../../assets/images/footer3.png")},
                    {"title":"问问","link":"/Asking","image":require("../../assets/images/footer4.png")},
                    {"title":"我的","link":"/Center","image":require("../../assets/images/footer5.png")}
                ]
            }
        },
        mounted(){
            let link = this.$route.path;
            if(link == "/"){
                this.link[0].image = require("../../assets/images/active_footer1.png");
            }else if(link == "/HouseSearch"){
                this.link[1].image = require("../../assets/images/active_footer2.png");
            }else if(link == "/Consult"){
                this.link[2].image = require("../../assets/images/active_footer3.png");
            }else if(link == "/Asking"){
                this.link[3].image = require("../../assets/images/active_footer4.png");
            }else if(link == "/Center"){
                this.link[4].image = require("../../assets/images/active_footer5.png");
            }
        }
    }
</script>

<style>
    footer{
        width: 750px;
        height: 100px;
        bottom: 0;
        left: 0;
        position: fixed;
        background: #ffffff;
    }
    .footer{
        width: 720px;
        height: 100px;
        margin: 0 auto;
    }
    .footer>div{
        float: left;
        width: 20%;
    }
    .footer>div>a{
        height: 100px;
        margin: 15px auto;
        text-align: center;
        display: block;
    }
    .footer>div>a>img{
        width: 40px;
        height: 40px;
        display: block;
        margin: 0 auto;
    }
    .footer>div>a>span{
        display: block;
        width: 100%;
        text-align: center;
        color: #98999c;
        font-size: 20px;
        float: left;
        margin: 16px auto 0;
    }
</style>