<template>
    <div id="car">
        <div class="fork">
            <img src="../../assets/images/person/fork.png">
        </div>
        <div class="content">
            <h2>预约看房</h2>
            <p>免费专车接送，全程好房一趟看完!</p>
            <input type="text" placeholder="请输入你的手机号码" v-model="phone">
            <input type="button" value="确认" @click="publish()">
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Car",
        data(){
            return{
                phone:""
            }
        },
        methods:{
            publish: async function (){
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    Toast('手机号格式不正确');
                    return false;
                }
                let res = await this.post('request/add', {
                    "type":1,"phone":this.phone
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
    #car{
        width: 570px;
        height: 490px;
        position: fixed;
        top: 420px;
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