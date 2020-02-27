<template>
    <div id="pre">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>一房一价</h2>
            </div>
        </header>
        <div class="pre" v-html="info.represent">

        </div>
        <div class="footer">
            <div class="service">
                <h4>在线客服</h4>
            </div>
            <input type="button" class="see" value="预约看房" @click="appointment()">
            <input type="button" class="consult" value="电话咨询">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PreInfo",
        data(){
            return{
                id:this.$route.query.id,
                info: {}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                this.info = res.data.data.yfyj;
            },
            appointment(){
                this.$router.push('/Appointment')
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #pre{
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
    .pre{
        width: 690px;
        margin:  40px auto 0;
    }
    .pre >>> img{
        width: 690px;
        height: 519px;
    }
    .other{
        width: 690px;
        margin: 0 auto;
    }
    .other>table td{
        width: 100px;
        height: 100px;
        border: 1px solid #e5e5e5;
    }
    .other>table th{
        width: 230px;
        height: 90px;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
        background-color: #f9f9f9;
        border: 1px solid #e5e5e5;
    }
    .other>table td{
        width: 230px;
        height: 90px;
        font-size: 26px;
        text-align: center;
    }
    .info{
        width: 690px;
        margin: 20px auto 40px;
    }
    .info>table th{
        height: 90px;
        width: 690px;
        text-align: center;
        font-size: 26px;
        border: 1px solid #e5e5e5;
        background-color: #f9f9f9;
    }
    .info>table th span{
        color: #ef3e4a;
    }
    .info>table td{
        height: 90px;
        width: 690px;
        text-align: center;
        font-size: 26px;
        border: 1px solid #e5e5e5;
    }
    .info>table td a{
        color: #ef3e4a;
        margin-right: 12px;
    }
    .footer{
        width: 690px;
        height: 112px;
        margin: 0 auto;
    }
    .service{
        width: 100px;
        height: 100px;
        background-image: url("../../assets/images/house/service.png");
        background-repeat: no-repeat;
        background-size: 50px 50px;
        background-position-x: 16px;
        background-position-y: 6px;
        margin-top: 12px;
    }
    .service>h4{
        font-size: 22px;
        color: #888888;
        height: 30px;
        line-height: 30px;
        margin-top: 60px;
    }
    .footer>input{
        width: 274px;
        height: 76px;
        border-radius: 5px;
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        margin-top: 16px;
    }
    .see{
        margin-left: 20px;
        background-color: #ef3e4a;
    }
    .consult{
        margin-left: 16px;
        background-color: #00c0eb;
    }
</style>