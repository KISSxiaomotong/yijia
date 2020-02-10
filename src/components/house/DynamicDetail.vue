<template>
    <div id="detail">
        <header>
            <div class="header">
                <h2>楼盘动态</h2>
            </div>
        </header>
        <div class="info">
            <div class="title">
                <h2>2020年了，你有房了吗？很多事都可以重 来，唯独买房不行，因为房价不会等你！</h2>
            </div>
            <div class="middle">
                <p>来源：益家新房</p><span>2020-01-02</span>
            </div>
            <div class="content">
                <img src="../../assets/images/house/content.jpg">
                <p>2020年了，蓦然回首，想想2019年立下了多少Flag？  升职加薪了吗？减肥成功了吗？结婚旅行吗？房子买了吗？  本世纪最后的日历正在一页页减去，没有什么可以把人轻易打动。除了真实。人们有理想但也有幻象，人们得到过安慰也蒙受过羞辱，人们曾经不再相信别人也不再相信自己。好在岁月让我们深知"真"的宝贵——真实、真情、真理，它让我们离开凌空蹈虚的乌托邦险境，认清了虚伪和欺骗。尽管，"真实"有时让人难堪，但直面真实的民族是成熟的民族，直面真实的人群是坚强的人群。</p>
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
        name: "DynamicDetail"
    }
</script>

<style scoped>
    #detail{
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
    .info{
        width: 690px;
        margin: 0 auto;
    }
    .title{
        width: 690px;
        height: 100px;
    }
    .title>h2{
        font-size: 36px;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
        margin-top: 40px;
    }
    .middle{
        width: 690px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
    }
    .middle>p{
        font-size: 24px;
        color: #888888;
        float: left;
    }
    .middle>span{
        display: block;
        font-size: 24px;
        color: #888888;
        float: left;
        margin-left: 20px;
    }
    .content{
        width: 690px;
        margin: 40px auto 0;
    }
    .content>img{
        width: 690px;
        height: 460px;
        margin-bottom: 30px;
    }
    .content>p{
        font-size: 26px;
        color: #666666;
        line-height: 70px;
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