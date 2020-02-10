<template>
    <div id="coupon">
        <header>
            <div class="header">
                <h2>我的优惠券</h2>
            </div>
        </header>
        <div class="coupon">
            <div class="top">
                <h2>益家新房优惠券</h2>
                <input type="button" value="去使用">
            </div>
            <div class="bottom">
                <p>适用于xxxx服务才可使用该券</p><span @click="more()">查看详情</span>
            </div>
            <div class="detail">
                <p>时间范围:适用于6月10日起接受居理服务的用户;</p>
                <p>用户范围:通过居理新房平台(PC、手机端)注册为益家新房用户</p>
                <p>楼盘范围:仅限标注“安全购”的房源;</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Coupon",
        data (){
            return{
                startX: null,
            }
        },
        methods: {
            more: function () {

            }
        }
    }
</script>

<style scoped>
    #coupon{
        width: 750px;
        padding-bottom: 20px;
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
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
    }
    .coupon{
        width: 622px;
        margin: 20px auto 0;
        padding: 40px 34px;
        background-color: #ffffff;
    }
    .top{
        width: 622px;
        height: 54px;
    }
    .top>h2{
        font-size: 30px;
        height: 54px;
        line-height: 54px;
        font-weight: bold;
        float: left;
    }
    .top>input{
        width: 134px;
        height: 54px;
        font-size: 26px;
        color: #ffffff;
        border-radius: 54px;
        background-color: #f03f49;
        float: right;
    }
    .bottom{
        width: 590px;
        height: 36px;
        padding-right: 32px;
        margin: 30px 0 0;
        background-image: url("../../assets/images/person/bottom_arrow.png");
        background-repeat: no-repeat;
        background-position: right top;
        background-position-y: 8px;
        background-size: 26px 13px;
    }
    .bottom>p{
        font-size: 24px;
        color: #999999;
        float: left;
    }
    .bottom>span{
        font-size: 24px;
        color: #999999;
        float: right;
    }
    .detail{
        width: 562px;
        padding: 30px;
        margin-top: 30px;
        display: none;
        background-color: #f5f9fa;
    }
    .detail>p{
        line-height: 40px;
        padding-left: 30px;
        font-size: 24px;
        background-image: url("../../assets/images/circle.png");
        background-size: 6px 6px;
        background-repeat: no-repeat;
        background-position: left center;
    }
</style>