<template>
    <div id="index">
        <div class="header">
            <div class="down"><p>南昌</p><span></span></div>
            <span class="user" @click="center()">
                <img src="../../assets/images/user.png" />
            </span>
            <div class="input">
                <input type="input" placeholder="请输入楼盘名或区域名">
            </div>
        </div>
        <div class="icon">
            <ul>
                <li><router-link to="/center"><img src="../../assets/images/icon1.jpg"/><span>楼盘查询</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon2.jpg"/><span>帮我找房</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon3.jpg"/><span>咨询师</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon4.jpg"/><span>预约专车</span></router-link></li>
            </ul>
            <ul>
                <li><router-link to="#"><img src="../../assets/images/icon5.jpg"/><span>买房故事</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon6.jpg"/><span>买房问问</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon7.jpg"/><span>关于我们</span></router-link></li>
                <li><router-link to="#"><img src="../../assets/images/icon8.jpg"/><span>行业资讯</span></router-link></li>
            </ul>
        </div>
        <div class="news">
           <img src="../../assets/images/material/news.jpg">
            <ul>
                <li><router-link to="#">2020年房地产政策和市场展望</router-link></li>
                <li><router-link to="#">世茂APM怎么样 世茂APM项目实测</router-link></li>
            </ul>
        </div>
        <div class="recommend" ref="comment">
            <div class="recommend_title">
                <h2>品质推荐</h2>
                <router-link to="#"><h3>更多楼盘</h3></router-link>
            </div>
            <div class="recommend_content" ref="slide" :style="slideStyle" @touchstart="start($event)" @touchmove="move($event)" @touchend="end()">
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test2.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test2.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
            </div>
        </div>
        <div class="house">
            <div class="house_title">
                <h2>一房一价</h2>
                <router-link to="#"><h3>更多楼盘</h3></router-link>
            </div>
            <div class="house_select">
                <van-dropdown-menu>
                    <van-dropdown-item title="区域" :options="region" />
                    <van-dropdown-item title="类型" :options="type" />
                    <van-dropdown-item title="面积" :options="area" />
                </van-dropdown-menu>
            </div>
            <div class="house_content" ref="house" :style="houseStyle" @touchstart="dostart($event)" @touchmove="domove($event)" @touchend="doend()">
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test2.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test2.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
                <div>
                    <div class="position">
                        <img src="../../assets/images/material/test1.jpg">
                        <p>优质推荐</p>
                    </div>
                    <h3>卓越万科翡翠山晓</h3>
                    <span>40-122㎡</span>
                    <p>10500<span>元/m²</span></p>
                </div>
            </div>
        </div>
        <div class="consult">
            <div class="consult_top">
                <h2>咨询师</h2>
                <router-link to="#"><h3>查看更多</h3></router-link>
            </div>
            <div class="consult_middle">
               <div class="consult_content">
                   <h4>宝音图<p>内蒙古财经大学</p></h4>
                   <p>  “热爱地产，珍惜客户，提供优质服务， 我承诺我做到，做专业地产人”</p>
                   <span>在线咨询</span>
               </div>
                <div class="consult_image">
                    <img src="../../assets/images/material/consult.jpg">
                </div>
            </div>
            <div class="consult_bottom">
                <p><span>换一换</span></p>
            </div>
        </div>
        <div class="build">
            <div class="build_title">
                <h2>推荐楼盘</h2>
                <router-link to="#"><h3>更多楼盘</h3></router-link>
            </div>
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
        <CouponPopup ref="coupon"></CouponPopup>
        <Login ref="login" @toRegister="toRegister"></Login>
        <Register ref="register"  @toLogin="toLogin"></Register>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    import CouponPopup from "../assembly/CouponPopup";
    import Login from "../person/Login";
    import Register from "../person/Register";
    export default {
        name: 'Index',
        components: {Footer,CouponPopup,Login,Register},
        props: {

        },
        data (){
            return {
                //滑动属性
                border: 0,
                positionX: 0,
                startX: 0,
                endX: 0,
                slideStyle: {
                    left: 0,
                    transition: 'none'
                },
                positionH: 0,
                startH: 0,
                endH: 0,
                houseStyle: {
                    left: 0,
                    transition: 'none'
                },
                region: [
                    { text: '南昌', value: '南昌' },
                    { text: '北京', value: '北京' },
                    { text: '上海', value: '上海' },
                    { text: '广州', value: '广州' }
                ],
                type: [
                    { text: '两室一厅', value: '两室一厅' },
                    { text: '三室一厅', value: '三室一厅' },
                    { text: '三室两厅', value: '三室两厅' },
                ],
                area: [
                    { text: '40-80㎡', value: '40-80㎡' },
                    { text: '80-120㎡', value: '80-120㎡' },
                    { text: '120-200㎡', value: '120-200㎡'},
                ],
                test: [
                    { text: '测试1', value: '测试1' },
                    { text: '测试2', value: '测试2' },
                    { text: '测试3', value: '测试3'},
                ]
            }
        },
        methods: {
            start (e){
                this.startX = e.touches[0].clientX;
                this.endX = this.$refs.slide.offsetLeft;
                this.slideStyle.transition = 'none';
            },
            move (e){
                let moveX = this.endX + (e.touches[0].clientX - this.startX);  //计算滑动的距离
                this.positionX = moveX;
                if(this.positionX == 0 && moveX< 0){
                    this.slideStyle.left = moveX + 'px';
                }else if(this.positionX > this.border && this.positionX < 0 && moveX < 0){
                    this.slideStyle.left = moveX + 'px';
                }else if(this.positionX <= this.border && (e.touches[0].clientX - this.startX) > 0){
                    this.slideStyle.left = this.border + 'px';
                }
            },
            end (){
                this.slideStyle.transition = 'left .3s';
            },
            dostart (e){
                this.startH = e.touches[0].clientX;
                this.endH = this.$refs.house.offsetLeft;
                this.houseStyle.transition = 'none';
            },
            domove (e){
                let moveH = this.endH + (e.touches[0].clientX - this.startH);  //计算滑动的距离
                this.positionH = moveH;
                if(this.positionH == 0 && moveH< 0){
                    this.houseStyle.left = moveH + 'px';
                }else if(this.positionH > this.border && this.positionH < 0 && moveH < 0){
                    this.houseStyle.left = moveH + 'px';
                }else if(this.positionH <= this.border && (e.touches[0].clientX - this.startH) > 0){
                    this.houseStyle.left = this.border + 'px';
                }
            },
            doend (){
                this.houseStyle.transition = 'left .3s';
            },
            closeCoupon(){
                this.$refs.coupon.couponClose();
            },
            center(){
                this.closeCoupon();
                let check = this.checkLogin();
                if(check){

                }else{
                    this.$refs.login.loginOpen();
                }
            },
            checkLogin(){
                let loginInfo = localStorage.getItem("userId");
                if(loginInfo){
                    return true;
                }else{
                    return false;
                }
            },
            toLogin(){
                this.$refs.register.registerClose();
                this.$refs.login.loginOpen();
            },
            toRegister(){
                this.$refs.login.loginClose();
                this.$refs.register.registerOpen();
            }
        },
        mounted (){
            //计算边界
            this.border = this.$refs.comment.clientWidth - this.$refs.slide.clientWidth;
            // 使用js的现代事件监听transition过渡结束
            let _this = this;
            this.$refs.slide.addEventListener('transitionend',function(){
                _this.endX = this.offsetLeft;
            });
            this.$refs.house.addEventListener('transitionend',function(){
                _this.endH = this.offsetLeft;
            });
        }
    }
</script>

<style scoped>
    #index{
        width: 750px;
        background: #ffffff;
    }
    .header{
        height: 420px;
        padding: 1px;
        background-image: url('../../assets/images/index_banner.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
    .down{
        width: 102px;
        height: 50px;
        color: #ffffff;
        font-size: 24px;
        border-radius: 30px;
        float: left;
        margin: 40px 0 0 30px;
        background-color: rgba(0,0,0,0.1);
    }
    .down>p{
        line-height: 52px;
        padding:2px 0 0 18px;
    }
    .user{
        float: right;
        margin: 40px 30px 0 0;
    }
    .user>img{
        width: 40px;
        height: 40px;
    }
    .input{
        width: 690px;
        height: 62px;
        float: left;
        border-radius: 60px;
        margin: 240px  0 0 30px;
        background-color: #ffffff;
    }
    .input>input{
        width: 570px;
        height: 62px;
        margin-left: 60px;
        color: #999999;
        font-size: 24px;
    }
    .input>input::-webkit-input-placeholder {
        height: 62px;
        color: #999999;
        font-size: 24px;
        padding-left: 188px;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position-x: 148px;
        background-image: url('../../assets/images/search.png');
    }
    .icon{
        width: 750px;
        height: 440px;
    }
    .icon>ul{
        height: 175px;
        width: 690px;
        margin: 22px 30px;
    }
    .icon>ul>li{
        float: left;
        width: 25%;
    }
    .icon>ul>li>a>img{
        width: 105px;
        height: 105px;
        padding: 33px;
        display: block;
    }
    .icon>ul>li>a>span{
        display: block;
        font-size: 26px;
        text-align: center;
        color: #222222;
        font-weight: bold;
    }
    .news{
        width: 690px;
        height: 100px;
        margin: 0 auto;
    }
    .news>img{
        width: 86px;
        height: 86px;
        padding: 10px;
        float: left;
        border-radius: 15px;
        border: 1px solid #e8e8e8;
    }
    .news>ul{
        float: left;
        margin-left: 38px;
    }
    .news>ul>li{
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        background-repeat: no-repeat;
        background-size: 8px 8px;
        background-position-y: 20px;
        background-image: url("../../assets/images/circle.png");
    }
    .news>ul>li>a{
        font-size: 26px;
        color: #222222;
    }
    .recommend{
        width: 690px;
        height: 430px;
        margin: 60px 30px 0 30px;
        overflow-x: hidden;
        position: relative;
    }
    .recommend_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .recommend_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .recommend_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .recommend_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .recommend_content{
        width: 1600px;
        position: absolute;
        top: 80px;
    }
    .recommend_content>div{
        width: 300px;
        float: left;
        margin-right: 20px;
    }
    .position{
        border-radius: 10px;
        position: relative;
    }
    .position>img{
        width: 300px;
        height: 230px;
    }
    .position>p{
        top: 0;
        left: 0;
        width: 84px;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        text-align: center;
        position: absolute;
        color: #ffffff;
        background-color: #ef3e4a;
    }
    .recommend_content>div>h3{
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0;
    }
    .recommend_content>div>span{
        display: inline-block;
        float: left;
        font-size: 24px;
        font-weight: bold;

    }
    .recommend_content>div>p{
        float: right;
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .recommend_content>div>p>span{
        font-size: 20px;
    }
    .house{
        width: 690px;
        height: 510px;
        margin: 60px 30px 0 30px;
        overflow-x: hidden;
        position: relative;
    }
    .house_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .house_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .house_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .house_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .house_select{
        width: 400px;
        height: 80px;
        margin-left: -30px;
    }
    [class*='van-hairline']::after {
        border:none;
    }
    .house_content{
        width: 1600px;
        position: absolute;
        top: 160px;
    }
    .house_content>div{
        width: 300px;
        float: left;
        margin-right: 20px;
    }
    .house_content>div>h3{
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0;
    }
    .house_content>div>span{
        display: inline-block;
        float: left;
        font-size: 24px;
        font-weight: bold;

    }
    .house_content>div>p{
        float: right;
        font-size: 32px;
        font-weight: bold;
        color: #ef3e4a;
    }
    .house_content>div>p>span{
        font-size: 20px;
    }
    .consult{
        width: 690px;
        height: 500px;
        margin: 0 auto;
        padding-top: 30px;
    }
    .consult_top{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .consult_top>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .consult_top>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .consult_top>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
    }
    .consult_middle{
        width: 690px;
        height: 268px;
        border-radius: 6px;
        margin-top: 30px;
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
    .consult_bottom{
        width: 690px;
        height: 128px;
    }
    .consult_bottom>p{
        width: 160px;
        height: 60px;
        font-size: 26px;
        color: #666666;
        border-radius: 60px;
        line-height: 60px;
        margin: 50px auto;
        background-color: #efefef;
        background-image: url("../../assets/images/refresh.png");
        background-size: 40px 40px;
        background-repeat: no-repeat;
        background-position-x: 15px;
        background-position-y: 10px;
    }
    .consult_bottom>p>span{
        display: inline-block;
        margin-left: 60px;
    }
    .build{
        width: 690px;
        margin: 0 auto 120px;
    }
    .build_title{
        width: 690px;
        height: 60px;
        margin: 0 auto;
    }
    .build_title>h2{
        font-size: 38px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        float: left;
    }
    .build_title>a{
        width: 120px;
        float: right;
        font-size: 24px;
        color: #999999;
    }
    .build_title>a>h3{
        height:40px;
        line-height: 40px;
        background-repeat: no-repeat;
        background-size: 22px 22px;
        background-position-x: 100px;
        background-position-y: 10px;
        background-image: url("../../assets/images/right_arrow.png");
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