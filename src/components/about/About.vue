<template>
    <div id="about">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>关于我们</h2>
            </div>
            <div class="content">
                <p>作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注,作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注,作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注
                    作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注</p>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "About",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>

<style scoped>
    #about{
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
        width: 690px;
        margin: 50px auto 0;
    }
    .content>p{
        font-size: 26px;
        color: #555555;
        line-height: 50px;
    }
</style>