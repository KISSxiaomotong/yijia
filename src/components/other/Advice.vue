<template>
    <div id="advice">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>投诉建议</h2>
            </div>
        </header>
        <div class="description">
            <textarea placeholder="请详细描述您的问题" v-model="details"></textarea>
        </div>
        <div class="fill"></div>
        <div class="entry">
            <input type="text" placeholder="输入你的手机号码（非必填）" v-model="phone">
        </div>
        <div class="submit">
            <input type="button" value="提交" @click="publish()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Answer",
        data(){
            return{
                details: "",
                phone: ""
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            publish: async function (){
                if(this.details == ""){
                    Toast("请详细描述您的问题！");
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确');
                    return false;
                }
                let res = await this.post('request/add', {
                    "type":3,"phone":this.phone,"details":this.details
                });
                if(res.data.code === 200){
                    Toast("提交成功！");
                }else{
                    Toast("提交失败！");
                }
            }
        }
    }
</script>

<style scoped>
    #advice{
        width: 750px;
        background-color: #ffffff;
    }
    header{
        width: 750px;
        height: 88px;
        border-bottom: 1px solid #edf1f5;
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
    .entry{
        width: 690px;
        height: 100px;
        margin: 0 auto;
    }
    .entry>input{
        width: 690px;
        height: 50px;
        font-size: 28px;
        margin: 25px 0;
    }
    .entry>input::-webkit-input-placeholder{
        font-size: 28px;
        color: #888888;
    }
    .fill{
        width: 750px;
        height: 20px;
        background-color: #f5f9fa;
    }
    .description{
        width: 690px;
        height: 330px;
        margin: 0 auto 40px;
    }
    .description>textarea{
        width: 690px;
        height: 260px;
        font-size: 28px;
        margin: 36px auto 34px;
    }
    .description>textarea::-webkit-input-placeholder{
        font-size: 28px;
        color: #888888;
    }
    .submit{
        width: 690px;
        margin: 0 auto;
    }
    .submit>input{
        width: 690px;
        height: 84px;
        font-size: 30px;
        color: #ffffff;
        border-radius: 10px;
        background-color: #00c0eb;
    }
</style>