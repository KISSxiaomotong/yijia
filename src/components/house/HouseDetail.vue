<template>
    <div id="house_detail">
        <header>
            <div class="header">
                <h2>楼盘信息</h2>
                <img src="../../assets/images/house/user.png">
            </div>
        </header>
        <div id="title">
            <div class="title">
                <h2>合一中央城</h2>
                <span>在售</span>
                <ul>
                    <li>普通住宅</li>
                    <li>品质洋房</li>
                    <li>贴心物业</li>
                </ul>
            </div>
        </div>
        <div id="info">
            <div class="info">
                <h2>基本信息</h2>
                <div>
                    <p>楼盘名称：<span>合一中央城</span></p>
                    <p>参考总价：<span>192-329万元</span></p>
                    <p>参考单价：<span>26,800元/m²起</span></p>
                    <p>物业类型：<span>住宅</span></p>
                    <p>户型：<span>二居(6)，三居(8)</span></p>
                    <p>建筑面积：<span>42-124m²</span></p>
                    <h4>楼盘地址：<span>江西省南昌市湾里区规划三路</span></h4>
                </div>
            </div>
        </div>
        <div id="architecture">
            <div class="architecture">
                <h2>建筑信息</h2>
                <div>
                    <h4>物业公司：<span>北京石榴物业服务有限公司</span></h4>
                    <p>绿化率：<span>35%</span></p>
                    <p>拿地时间：<span>1993年</span></p>
                    <p>建筑类型：<span>洋房</span></p>
                    <p>装修状况：<span>毛坯</span></p>
                    <p>车位情况：<span>1：1.2</span></p>
                </div>
            </div>
        </div>
        <div id="property">
            <div class="property">
                <h2>物业信息</h2>
                <div>
                    <h4>物业公司：<span>北京石榴物业服务有限公司</span></h4>
                    <p>物业费用：<span>4.7元/m²*月</span></p>
                    <p>水电燃气：<span>民水民电燃气</span></p>
                    <p>供暖方式：<span>集中供暖</span></p>
                </div>
            </div>
        </div>
        <div id="more">
            <div class="more">
                <h2>了解更多</h2>
                <p>这个楼盘有什么优缺点？开发商资质如何？我有没有购房资质？ 更多问题，咨询师帮您答疑解惑</p>
                <div>
                    <input type="text" placeholder="请输入手机号码">
                    <input type="button" value="免费咨询">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="service">
                <h4>在线客服</h4>
            </div>
            <input type="text" class="see" value="预约看房">
            <input type="text" class="consult" value="电话咨询">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HouseDetail",
        data(){
            return{
                id:this.$route.params.id,
                detail:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('propertiesDynamic/selbyid', {"current":1,"num":10});
                this.detail = res.data;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #house_detail{
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
    .header>h2{
        font-size: 36px;
        text-align: center;
        height: 88px;
        line-height: 88px;
        display: inline-block;
        padding-left: 270px;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
    }
    .header>img{
        width: 36px;
        height: 36px;
        float: right;
        margin-top: 28px;
    }
    #title{
        width: 750px;
        height: 155px;
        background-color: #ffffff;
    }
    .title{
        width: 690px;
        height: 155px;
        margin: 0 auto;
    }
    .title>h2{
        font-size: 40px;
        padding: 30px 0 24px;
        font-weight: bold;
    }
    .title>span{
        display: inline-block;
        height: 36px;
        line-height: 36px;
        background-color: #ffe8ea;
        color: #ef3e4a;
        padding: 0 8px;
        font-size: 24px;
        float: left;
    }
    .title>ul>li{
        float: left;
        height: 36px;
        line-height: 36px;
        background-color: #f3f5f7;
        color: #999999;
        padding: 0 10px;
        font-size: 24px;
        margin-left: 10px;
    }
    #info{
        width: 750px;
        height: 345px;
        margin-top: 20px;
        background-color: #ffffff;
    }
    .info{
        width: 690px;
        height: 345px;
        margin: 0 auto;
    }
    .info>h2{
        font-size: 40px;
        padding: 40px 0;
        font-weight: bold;
    }
    .info>div>p{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
        float: left;
    }
    .info>div>p:nth-child(2n+1){
        width: 54%;
    }
    .info>div>p:nth-child(2n){
        width: 46%;
    }
    .info>div>p>span{
        color: #222222;
    }
    .info>div>h4{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .info>div>h4>span{
        color: #222222;
    }
    #architecture{
        width: 750px;
        height: 345px;
        margin-top: 20px;
        background-color: #ffffff;
    }
    .architecture{
        width: 690px;
        height: 345px;
        margin: 0 auto;
    }
    .architecture>h2{
        font-size: 40px;
        padding: 40px 0;
        font-weight: bold;
    }
    .architecture>div>p{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
        float: left;
    }
    .architecture>div>p:nth-child(2n+1){
        width: 54%;
    }
    .architecture>div>p:nth-child(2n){
        width: 46%;
    }
    .architecture>div>p>span{
        color: #222222;
    }
    .architecture>div>h4{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .architecture>div>h4>span{
        color: #222222;
    }
    #property{
        width: 750px;
        height: 290px;
        margin-top: 20px;
        background-color: #ffffff;
    }
    .property{
        width: 690px;
        height: 290px;
        margin: 0 auto;
    }
    .property>h2{
        font-size: 40px;
        padding: 40px 0;
        font-weight: bold;
    }
    .property>div>p{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
        float: left;
    }
    .property>div>p:nth-child(2n+1){
        width: 54%;
    }
    .property>div>p:nth-child(2n){
        width: 46%;
    }
    .property>div>p>span{
        color: #222222;
    }
    .property>div>h4{
        font-size: 24px;
        line-height: 54px;
        color: #999999;
    }
    .property>div>h4>span{
        color: #222222;
    }
    #more{
        width: 750px;
        height: 330px;
        margin-top: 20px;
        background-color: #ffffff;
        border-bottom: 1px solid #efefef;;
    }
    .more{
        width: 690px;
        height: 330px;
        margin: 0 auto;
    }
    .more>h2{
        font-size: 40px;
        padding: 40px 0;
        font-weight: bold;
    }
    .more>p{
        font-size: 24px;
        color: #999999;
        line-height: 40px;
    }
    .more>div{
        width: 690px;
        height: 70px;
        margin: 40px auto;
    }
    .more>div>input[type='text']{
        height: 70px;
        width: 500px;
        padding-left: 20px;
        border: 1px solid #efefef;
        border-right: none;
    }
    .more>div>input::-webkit-input-placeholder{
        color: #999999;
        font-size: 24px;
    }
    .more>div>input[type='button']{
        width: 168px;
        height: 70px;
        color: #ffffff;
        font-size: 26px;
        background-color: #00c0eb;
        border: none;
    }
    .footer{
        width: 690px;
        height: 112px;
        margin: 0 auto;
    }
    .service{
        width: 100px;
        height: 100px;
        background-image: url("../../assets/images/house/service.png");
        background-repeat: no-repeat;
        background-size: 50px 50px;
        background-position-x: 16px;
        background-position-y: 6px;
        margin-top: 12px;
    }
    .service>h4{
        font-size: 22px;
        color: #888888;
        height: 30px;
        line-height: 30px;
        margin-top: 60px;
    }
    .footer>input{
        width: 274px;
        height: 76px;
        border-radius: 5px;
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        margin-top: 16px;
    }
    .see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    .consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
</style>