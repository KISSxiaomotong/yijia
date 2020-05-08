<template>
    <div id="coupon" v-show=couponShow>
        <div class="fork">
            <img src="../../assets/images/person/fork.png" @click="couponClose()">
        </div>
        <div class="content">
            <h2>领取优惠券</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone" v-model="phone">
            <input type="text" placeholder="请输入姓名" class="password" v-model="name">
        </div>
        <div class="other">
            <input type="button" value="确认" @click="getCoupon()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "GetCoupon",
        data(){
            return{
                phone:"",
                name:"",
                couponShow:false,
                cid:0
            }
        },
        methods:{
            getCoupon: async function (){
                if(this.phone == ""){
                    Toast("请填写手机号！");
                    return false;
                }
                if(this.name == ""){
                    Toast("请填写姓名！");
                    return false;
                }
                let res = await this.post('userCoupon/receive', {"phone": this.phone,"name":this.name,"cid":this.cid});
                if(res.data.code === 200){
                    Toast("领取成功！");
                    this.couponClose();
                }else{
                    Toast("已经领取过了！");
                }
            },
            couponOpen(id){
                this.cid = id;
                this.couponShow = true;
            },
            couponClose(){
                this.couponShow = false;
            },
        }
    }
</script>

<style scoped>
    #coupon{
        width: 570px;
        height: 580px;
        top: 300px;
        left: 90px;
        background-color: #ffffff;
        border-radius: 20px;
        position: fixed;
    }
    .fork{
        width: 570px;
        height: 70px;
    }
    .fork>img{
        width: 40px;
        height: 40px;
        float: right;
        padding: 30px 30px 0 0;
    }
    .content{
        padding: 0 36px 0 54px;
    }
    .content>h2{
        font-size: 40px;
    }
    .content>input{
        width: 460px;
        height: 80px;
        padding-left: 30px;
        border-radius: 5px;
        background-color: #f6f6f6;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #999999;
    }
    .phone{
        margin: 40px 0 30px;
    }
    .password{
        margin-bottom: 40px;
    }
    .other{
        padding: 0 36px 0 54px;
    }
    .other>input{
        width: 490px;
        height: 80px;
        font-size: 30px;
        color: #ffffff;
        border-radius: 5px;
        margin-top: 30px;
        background-color: #00c0eb;
    }
    input{
        font-size: 26px;
    }
</style>