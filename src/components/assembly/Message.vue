<template>
    <div id="message">
        <div class="fork">
            <img src="../../assets/images/person/fork.png">
        </div>
        <div class="content">
            <h2>在线留言</h2>
            <p>专业咨询师免费咨询服务，帮您买好房</p>
            <textarea placeholder="在这里输入您的留言" v-model="details"></textarea>
            <input type="text" placeholder="请输入你的手机号码" v-model="phone">
            <input type="button" value="确认" @click="publish()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Message",
        data(){
            return{
                phone: "",
                details: ""
            }
        },
        methods:{
            publish: async function (){
                if(this.details == ""){
                    Toast('请输入您的留言！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('request/add', {
                    "type":4,"phone":this.phone,"details":this.details
                });
                if(res.data.code === 200){
                    Toast("留言成功！");
                }else{
                    Toast("留言失败！");
                }
            }
        }
    }
</script>

<style scoped>
    #message{
        width: 570px;
        height: 756px;
        border-radius: 15px;
        position: fixed;
        top: 290px;
        left: 90px;
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
        font-weight: bold;
    }
    .content>p{
        font-size: 28px;
        font-weight: bold;
        padding: 40px 0;
    }
    .content>textarea{
        width: 432px;
        height: 229px;
        font-size: 26px;
        padding: 27px 30px;
        border-radius: 5px;
        background-color: #f6f6f6;
    }
    textarea::-webkit-input-placeholder{
        font-size: 26px;
        color: #999999;
    }
    .content>input[type='text']{
        width: 462px;
        height: 80px;
        font-size: 26px;
        margin: 30px 0;
        padding-left: 30px;
        border-radius: 5px;
        background-color: #f6f6f6;
    }
    input::-webkit-input-placeholder{
        font-size: 26px;
        color: #999999;
    }
    .content>input[type='button']{
        width: 492px;
        height: 80px;
        font-size: 30px;
        border-radius: 8px;
        color: #ffffff;
        background-color: #00c0eb;
    }
</style>