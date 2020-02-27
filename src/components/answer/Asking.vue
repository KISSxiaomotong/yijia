<template>
    <div id="asking">
        <header>
            <div class="header">
                <div @click="back()"></div>
                <h2>买房问问</h2>
            </div>
        </header>
       <div v-for="(item,index) in lists" :key="index">
           <div class="answer">
               <div>
                   <div class="ask">
                       <h3>{{item.problem}}</h3>
                   </div>
                   <div class="question">
                       <p>{{item.answer}}</p>
                   </div>
               </div>
           </div>
           <div class="fill"></div>
       </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "Asking",
        components: {Footer},
        data(){
            return{
                lists:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            fetchData: async function (){
                let res = await this.post('propertiesWw/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #asking{
        width: 750px;
        padding-bottom: 120px;
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
    .answer{
        width: 690px;
        height: 320px;
        margin: 0 auto;
    }
    .ask{
        padding: 40px 0 0 60px;
        background-image: url("../../assets/images/answer/question.png");
        background-position-y: 32px;
        background-repeat: no-repeat;
        background-size: 50px 50px;
    }
    .ask>h3{
        font-size: 28px;
        font-weight: bold;
        color: #222222;
        line-height: 46px;
    }
    .question{
        padding: 30px 0 0 60px;
        background-image: url("../../assets/images/answer/answer.png");
        background-position-y: 20px;
        background-repeat: no-repeat;
        background-size: 50px 50px;
    }
    .question>p{
        font-size: 28px;
        color: #222222;
        line-height: 40px;
        min-height: 40px;
    }
    .fill{
        width: 750px;
        height: 20px;
        background-color: #f5f9fa;
    }
</style>