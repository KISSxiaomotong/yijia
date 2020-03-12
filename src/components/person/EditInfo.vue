<template>
    <div id="edit_info">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>{{title}}</h2>
            </div>
        </header>
        <div class="edit">
            <input type="text" v-model="info">
            <button @click="postData()">确认修改</button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "EditInfo",
        data(){
            return{
                title: "",
                info: "",
                user: {},
                cate:this.$route.query.cate,
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            getUser(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                this.user = user;
                if(this.cate == 1){
                    this.title = "修改昵称";
                    this.info = this.user.userName;
                }else if(this.cate == 2){
                    this.title = "修改性别";
                    this.info = this.user.sex;
                }else if(this.cate == 3){
                    this.title = "修改邮箱";
                    this.info = this.user.mail;
                }else if(this.cate == 4){
                    this.title = "修改姓名";
                    this.info = this.user.name;
                }
            },
            postData: async function (){
                if(this.info == ""){
                    Toast("已经领取过了！");
                    return false;
                }
                if(this.cate == 1){
                    let res = await this.post('user/up', {"id":this.user.id,"userName":this.info});
                    if(res.data.code == 200){
                        Toast("修改成功！");
                        this.user.userName = this.info;
                        window.localStorage.setItem("user",JSON.stringify(this.user));
                    }else{
                        Toast("修改失败！");
                    }
                }else if(this.cate == 2){
                    let res = await this.post('user/up', {"id":this.user.id,"sex":this.info});
                    if(res.data.code == 200){
                        Toast("修改成功！");
                        this.user.sex = this.info;
                        window.localStorage.setItem("user",JSON.stringify(this.user));
                    }else{
                        Toast("修改失败！");
                    }
                }else if(this.cate == 3){
                    let res = await this.post('user/up', {"id":this.user.id,"mail":this.info});
                    if(res.data.code == 200){
                        Toast("修改成功！");
                        this.user.mail = this.info;
                        window.localStorage.setItem("user",JSON.stringify(this.user));
                    }else{
                        Toast("修改失败！");
                    }
                }else if(this.cate == 4){
                    let res = await this.post('user/up', {"id":this.user.id,"name":this.info});
                    if(res.data.code == 200){
                        Toast("修改成功！");
                        this.user.name = this.info;
                        window.localStorage.setItem("user",JSON.stringify(this.user));
                    }else{
                        Toast("修改失败！");
                    }
                }
            }
        },
        mounted() {
            this.getUser();
        }
    }
</script>

<style scoped>
    #edit_info{
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
    .edit{
        width: 690px;
        margin: 0 auto;
    }
    .edit>input[type='text']{
        width: 690px;
        height: 80px;
        border: none;
        font-size: 24px;
        margin: 10px 0 30px;
        border-bottom: 1px solid #00c0eb;
    }
    button{
        width: 690px;
        height: 80px;
        color: #ffffff;
        font-size: 30px;
        border-radius: 10px;
        background-color: #00c0eb;
    }
</style>