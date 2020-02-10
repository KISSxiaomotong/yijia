<template>
    <div id="asking">
        <header>
            <div class="header">
                <h2>买房问问</h2>
            </div>
        </header>
        <div class="answer">
          <div>
              <div class="ask">
                  <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
              </div>
              <div class="question">
                  <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
              </div>
          </div>
        </div>
        <div class="fill"></div>
        <div class="answer">
            <div>
                <div class="ask">
                    <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
                </div>
                <div class="question">
                    <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="answer">
            <div>
                <div class="ask">
                    <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
                </div>
                <div class="question">
                    <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="answer">
            <div>
                <div class="ask">
                    <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
                </div>
                <div class="question">
                    <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="answer">
            <div>
                <div class="ask">
                    <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
                </div>
                <div class="question">
                    <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <div class="answer">
            <div>
                <div class="ask">
                    <h3>提交了购房资质审核以后，那么我的资质是否长 期有效呢？</h3>
                </div>
                <div class="question">
                    <p>在提交了购房资质审核的相关材料后，购房资质审 核查询一般可在十日后进行。根据北京当前的购房 政策，如果您的家庭正常审核购房 提交了购房资质审核的相关材料后</p>
                </div>
            </div>
        </div>
        <div class="fill"></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    export default {
        name: "Asking",
        components: {Footer}
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
    .header>h2{
        font-size: 36px;
        text-align: center;
        height: 88px;
        line-height: 88px;
        background-image: url("../../assets/images/person/left_arrow.png");
        background-repeat: no-repeat;
        background-size: 26px 40px;
        background-position-y: 20px;
    }
    .answer{
        width: 690px;
        height: 320px;
        margin: 0 auto;
    }
    .ask{
        padding: 40px 0 0 60px;
        background-image: url("../../assets/images/answer/question.png");
        background-position-y: 42px;
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
        background-position-y: 26px;
        background-repeat: no-repeat;
        background-size: 50px 50px;
    }
    .question>p{
        font-size: 28px;
        color: #222222;
        line-height: 40px;
    }
    .fill{
        width: 750px;
        height: 20px;
        background-color: #f5f9fa;
    }
</style>