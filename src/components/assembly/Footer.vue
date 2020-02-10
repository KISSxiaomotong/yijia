<template>
    <footer>
        <div class="footer">
            <div><router-link to="#"><img src="../../assets/images/footer1.png"><span>首页</span></router-link></div>
            <div><router-link to="#"><img src="../../assets/images/footer2.png"><span>楼盘</span></router-link></div>
            <div><router-link to="#"><img src="../../assets/images/footer3.png"><span>咨询师</span></router-link></div>
            <div><router-link to="#"><img src="../../assets/images/footer4.png"><span>问问</span></router-link></div>
            <div><router-link to="#"><img src="../../assets/images/footer5.png"><span>我的</span></router-link></div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
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