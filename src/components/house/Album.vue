<template>
    <div id="album">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>楼盘相册</h2>
            </div>
        </header>
        <div class="swipe">
            <van-swipe class="my-swipe" :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image.picture" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="tag">
            <ul>
                <li v-for="(item, index) in tag" :key="index" :class="{active:index == current}" @click="changeSlide(item.type,index)">
                    {{item.label}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Album",
        data(){
            return{
                id:this.$route.query.id,
                images:[],
                xgt:[],
                sjt:[],
                hxt:[],
                ybj:[],
                tag:[{label:"效果图",type:"xgt"},
                    {label:"实景图",type:"sjt"},
                    {label:"户型图",type:"hxt"},
                    {label:"样板间",type:"ybj"}],
                current:0
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                let detail = res.data.data;
                this.xgt = detail.xgt;
                this.sjt = detail.sjt;
                this.hxt = detail.hxt;
                this.ybj = detail.ybj;
                this.images = this.xgt;
            },
            changeSlide(type,index){
                if(type == "xgt"){
                    this.images = this.xgt;
                }
                if(type == "sjt"){
                    this.images = this.sjt;
                }
                if(type == "hxt"){
                    this.images = this.hxt;
                }
                if(type == "ybj"){
                    this.images = this.ybj;
                }
                this.current = index;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #album{
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
    .swipe{
        width: 750px;
        height: 617px;
        margin-top: 200px;
    }
    .my-swipe{
        color: #fff;
        font-size: 20px;
        line-height: 617px;
        text-align: center;
    }
    .my-swipe img{
        width: 750px;
        height: 617px;
    }
    .tag{
        margin-top: 100px;
    }
    .tag>ul{
        height: 50px;
    }
    .tag>ul>li{
        float: left;
        width: 160px;
        height: 50px;
        color: #ffffff;
        font-size: 24px;
        margin-right: 20px;
        line-height: 50px;
        text-align: center;
        border-radius: 50px;
        background-color: rgba(36,213,252);
    }
    .tag>ul .active{
        color: #13cbf4;
        background-color: #eeeeee;
    }
</style>