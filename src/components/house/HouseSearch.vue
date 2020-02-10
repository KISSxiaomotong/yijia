<template>
    <div id="search">
        <div class="header">
            <div>
                <div class="input">
                    <input type="input" placeholder="请输入楼盘名或区域名">
                </div>
                <router-link to="#"><img src="../../assets/images/house/user.png"></router-link>
            </div>
        </div>
        <div class="build">
            <div class="build_select">
                <van-dropdown-menu>
                    <van-dropdown-item title="区域" :options="test" />
                    <van-dropdown-item title="价格" :options="test" />
                    <van-dropdown-item title="户型" :options="test" />
                    <van-dropdown-item title="筛选" :options="test" />
                    <van-dropdown-item title="排序" :options="test" />
                </van-dropdown-menu>
            </div>
            <div class="build_content">
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
                <div>
                    <div class="build_image">
                        <img src="../../assets/images/material/test1.jpg">
                    </div>
                    <div class="build_detail">
                        <h4>卓越万科翡翠山晓<span>在售</span></h4>
                        <p>住宅 · 江西省南昌市湾里区规划三路</p>
                        <h5>2019120 · 2019-12-30</h5>
                        <h3>10500<span>元/m²</span><p>40-122㎡</p></h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "HouseSearch",
        components: {Footer},
        data (){
            return {
                test: [
                    { text: '测试1', value: '测试1' },
                    { text: '测试2', value: '测试2' },
                    { text: '测试3', value: '测试3'},
                ]
            }
        }
    }
</script>

<style scoped>
    #search{
        width: 750px;
        background-color: #ffffff;
    }
    .header{
        width: 690px;
        margin: 0 auto;
    }
    .header>div{
        width: 690px;
        height: 60px;
        margin: 30px 0;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 24px 36px;
        background-position-y: 10px;
    }
    .input{
        width: 600px;
        height: 62px;
        float: left;
        margin-left: 40px;
        border-radius: 60px;
        background-color: #f3f6f9;
    }
    .input>input{
        width: 480px;
        height: 62px;
        margin-left: 60px;
        color: #999999;
        font-size: 24px;
        background-color: #f3f6f9;
    }
    .input>input::-webkit-input-placeholder {
        height: 62px;
        color: #999999;
        font-size: 24px;
        padding-left: 143px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position-x: 103px;
        background-image: url('../../assets/images/search.png');
    }
    .header>div>a>img{
        width: 36px;
        height: 40px;
        float: right;
        margin-top: 12px;
    }
    .build{
        width: 690px;
        margin: 0 auto 120px;
    }
    .build_select{
        width: 690px;
        height: 80px;
        margin-left: -30px;
    }
    .build_content{
        margin-top: 20px;
    }
    .build_content>div{
        width: 690px;
        height: 200px;
        margin-bottom: 60px;
    }
    .build_image{
        width: 240px;
        height: 186px;
        float: left;
    }
    .build_image>img{
        width: 240px;
        height: 186px;
        border-radius: 10px;
    }
    .build_detail{
        float: left;
        margin-left: 26px;
    }
    .build_detail>h4{
        font-size: 28px;
        font-weight: bold;
    }
    .build_detail>h4>span{
        display: inline-block;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #ffe8ea;
        color: #ef3e4a;
        font-size: 22px;
        font-weight: normal;
        margin-left: 14px;
        padding: 0 10px;
    }
    .build_detail>p,.build_detail>h5{
        font-size: 24px;
        color: #b1b3b5;
        margin: 22px 0;
    }
    .build_detail>h3{
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .build_detail>h3>span{
        font-size: 20px;
    }
    .build_detail>h3>p{
        display: inline-block;
        font-weight: normal;
        font-size: 24px;
        color: #98999c;
        margin-left: 24px;
    }
</style>