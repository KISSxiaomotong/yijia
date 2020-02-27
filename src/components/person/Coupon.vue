<template>
    <div id="coupon">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>我的优惠券</h2>
            </div>
        </header>
        <div class="coupon" v-for="(item,index) in coupon" :key="index">
            <div class="top">
                <h2>{{item.title}}</h2>
                <input type="button" value="去使用">
            </div>
            <div class="bottom">
                <p>{{item.body}}</p><span @click="more(index)">查看详情</span>
            </div>
            <div class="detail" v-show=item.show v-html=item.illustrate>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Coupon",
        data (){
            return{
                phone: "",
                coupon: []
            }
        },
        methods: {
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let that = this;
                let res = await this.post('userCoupon/byphone', {"phone":this.phone});
                res = res.data.data;
                Object.keys(res).forEach(function(key){
                    let obj = {"label":res[key].coupon.label,"title":res[key].coupon.title,"body":res[key].coupon.body,"illustrate":res[key].coupon.illustrate,"show":false}
                    that.coupon.push(obj);
                });
            },
            getUser(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                this.phone = user.phone;
            },
            more(index){
                this.coupon[index].show = !this.coupon[index].show;
            }
        },
        mounted() {
            this.getUser();
            this.fetchData();
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