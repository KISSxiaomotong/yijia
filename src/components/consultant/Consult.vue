<template>
    <div id="consult">
        <header>
            <div class="header">
                <h2>咨询师</h2>
            </div>
        </header>
        <div class="tag">
            <ul>
                <li>高素质</li>
                <li>严要求</li>
                <li>更专业</li>
                <li>全免费</li>
            </ul>
        </div>
        <div class="content">
            <div>
                <div class="consult_content">
                    <h4>宝音图<p>内蒙古财经大学</p></h4>
                    <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                    <span>在线咨询</span>
                </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
            <div>
                <div class="consult_content">
                    <h4>宝音图<p>内蒙古财经大学</p></h4>
                    <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                    <span>在线咨询</span>
                </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
            <div>
                <div class="consult_content">
                    <h4>宝音图<p>内蒙古财经大学</p></h4>
                    <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                    <span>在线咨询</span>
                </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
            <div>
                <div class="consult_content">
                    <h4>宝音图<p>内蒙古财经大学</p></h4>
                    <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                    <span>在线咨询</span>
                </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
            <div>
                <div class="consult_content">
                    <h4>宝音图<p>内蒙古财经大学</p></h4>
                    <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                    <span>在线咨询</span>
                </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "Consult",
        components: {Footer}
    }
</script>

<style scoped>
    #consult{
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
    .tag{
        width: 690px;
        height: 80px;
        margin: 0 auto;
    }
    .tag>ul{
        height: 40px;
        line-height: 40px;
        margin: 30px 0;
    }
    .tag>ul>li{
        float: left;
        width: 15%;
        padding-left: 41px;
        font-size: 26px;
        color: #666666;
        margin-left: 37px;
        background-image: url("../../assets/images/consult/check.png");
        background-size: 28px 28px;
        background-repeat: no-repeat;
        background-position-y: 5px;
    }
    .tag>ul>li:first-child{
        margin-left: 0;
    }
    .content{
        width: 750px;
        padding: 30px 0 150px 0;
        background-color: #f5f9fa;
    }
    .content>div{
        width: 690px;
        height: 272px;
        margin: 20px auto 0;
        background-color: #ffffff;
        border-radius: 10px;
    }
    .consult_content{
        width: 460px;
        height: 272px;
        float: left;
    }
    .consult_content>h4{
        font-size: 32px;
        font-weight: bold;
        line-height: 32px;
        margin: 40px 0 0 30px;
    }
    .consult_content>h4>p{
        color: #888888;
        font-size: 24px;
        font-weight: normal;
        display: inline-block;
        margin-left: 24px;
    }
    .consult_content>p{
        height: 86px;
        line-height: 36px;
        font-size: 24px;
        color: #888888;
        margin: 24px 0 0 30px;
    }
    .consult_content>span{
        width: 150px;
        height: 50px;
        font-size: 26px;
        border-radius: 50px;
        background-color: #16cdf6;
        line-height: 50px;
        text-align: center;
        color: white;
        display: inline-block;
        margin: 12px 0 0 30px;
    }
    .consult_image{
        float: left;
    }
    .consult_image{
        width: 230px;
        height: 268px;
        float: left;
    }
    .consult_image>img{
        width: 230px;
        height: 268px;
    }
</style>