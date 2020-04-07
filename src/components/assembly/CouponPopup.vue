<template>
    <div id="popup" v-show=couponShow>
        <div class="top">
            <div @click="couponClose()"></div>
        </div>
        <div class="middle">
            <h3>{{coupon.title}}</h3>
            <h2>{{coupon.label}}</h2>
        </div>
        <div class="bottom">
            <input type="text" placeholder="输入你的手机号码" v-model="phone">
            <input type="button" value="立即领取" @click="receive()">
        </div>
    </div>
</template>

<script>
    import { Toast,Dialog } from 'vant';
    export default {
        name: "CouponPopup",
        data(){
            return{
                couponShow: false,
                coupon: {},
                phone: ""
            }
        },
        methods:{
            couponClose(){
                this.couponShow = false;
            },
            couponOpen(){
                this.couponShow = true;
            },
            fetchData: async function (){
                let res = await this.post('home/coupom');
                this.coupon = res.data.data;
            },
            receive: async function (){
                if (!this.phone) {
                    Toast('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('userCoupon/receive', {"phone":this.phone,"cid":this.coupon.id,"pid":0});
                if(res.data.code === 200){
                    Toast("领取成功！");
                    this.closeCoupon();
                }else{
                    Toast("已经领取过了！");
                    this.closeCoupon();
                }
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #popup{
        width: 560px;
        height: 690px;
        top: 320px;
        left: 90px;
        position: fixed;
        border-radius: 10px;
        background-image: url("../../assets/images/coupon.jpg");
        background-size: 560px 690px;
        background-repeat: no-repeat;
    }
    .top{
        width: 560px;
        height: 80px;
        background-image: url("../../assets/images/redfork.png");
        background-repeat: no-repeat;
        background-size: 45px 45px;
        background-position-y: 20px;
        background-position-x: 490px;
    }
    .top>div{
        width: 50px;
        height: 50px;
        margin: 18px 24px 0 0;
        float: right;
    }
    .middle{
        width: 342px;
        height: 167px;
        margin: 140px 109px 176px;
    }
    .middle>h3{
        font-size: 45px;
        font-weight: bold;
        width: 101px;
        color: #e0200f;
        float: left;
        padding: 46px 0 0 25px;
    }
    .middle>h2{
        font-size: 40px;
        float: left;
        width: 191px;
        font-weight: bold;
        color: #e0200f;
        padding: 46px 0 0 25px;
    }
    .bottom>input[type='text']{
        width: 271px;
        height: 75px;
        font-size: 26px;
        margin-left: 40px;
        padding-left: 34px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .bottom>input[type='button']{
        width: 176px;
        height: 75px;
        font-size: 30px;
        color: #e61207;
        font-weight: bold;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #ffbb47;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #a9a9a9;
    }
</style>