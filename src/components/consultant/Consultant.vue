<template>
    <div id="consultant">
        <header>
            <div class="header">
                <h2>咨询师</h2>
            </div>
        </header>
        <div class="top"></div>
        <div class="middle">
            <div class="contact">
                <img src="../../assets/images/material/avatar.jpg">
                <div>
                    <h3>宝音图</h3>
                    <p>内蒙古财经大学</p>
                </div>
                <input type="button" value="在线咨询">
            </div>
            <div class="desc">
                <p>“热爱地产，珍惜客户，提供优质服务，我承诺我做到， 做专业地产人”</p>
            </div>
        </div>
        <div class="bottom">
            <h2>基本信息</h2>
            <div class="declaration">
                <p>服务宣言：</p>
                <p>“热爱地产，珍惜客户，提供优质服务，我承诺我做到， 做专业地产人”</p>
            </div>
            <div class="brief">
                <p>本人简介：</p>
                <p>本人成熟稳重经验丰富，贷款业务扎实，了解政策法规，合理规避高额费用。房源信息及时准确，规避风险远离骗局，为您甄选吉屋旺铺，助您生活事业节节高</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Consultant"
    }
</script>

<style scoped>
    #consultant{
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
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
    }
    .top{
        width: 750px;
        height: 176px;
        background-color: #00c0eb;
    }
    .middle{
        width: 690px;
        height: 350px;
        margin: -126px auto 0;
        border-radius: 20px;
        background-color: #ffffff;
    }
    .middle>div{
        float: left;
    }
    .contact{
        width: 690px;
        height: 190px;
    }
    .contact>img{
        width: 120px;
        height: 120px;
        float: left;
        margin: 40px 0 0 20px;
        border-radius: 120px;
    }
    .contact>div{
        margin: 65px 0 0 32px;
        float: left;
    }
    .contact>div>h3{
        font-size: 32px;
        font-weight: bold;
    }
    .contact>div>p{
        font-size: 24px;
        color: #444444;
        margin-top: 20px;
    }
    .contact>input{
        width: 150px;
        height: 60px;
        border-radius: 60px;
        color: #ffffff;
        font-size: 26px;
        background-color: #0fc9f2;
        float: right;
        margin: 63px 30px 0 0;
    }
    .desc{
        width: 630px;
        height: 72px;
        padding: 24px 0;
        margin: 0 30px;
        border-radius: 16px;
        background-color: #f5f9fa;
    }
    .desc>p{
        color: #444444;
        font-size: 24px;
        line-height: 36px;
        padding: 0 28px;
    }
    .bottom{
        width: 690px;
        margin: 12px auto 0;
        background-color: #ffffff;
    }
    .bottom>h2{
        font-size: 36px;
        padding: 48px 0 48px 28px;
        font-weight: bold;
    }
    .declaration{
        width: 634px;
        padding: 0 28px;
    }
    .declaration>p{
        font-size: 26px;
        color: #555555;
        line-height: 40px;
    }
    .brief{
        width: 634px;
        padding: 55px 28px;
    }
    .brief>p{
        font-size: 26px;
        color: #555555;
        line-height: 40px;
    }
</style>