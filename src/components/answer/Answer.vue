<template>
    <div id="question">
        <header>
            <div class="header">
                <h2>在线问问</h2>
            </div>
        </header>
        <div class="entry">
            <input type="text" placeholder="输入您的问题">
        </div>
        <div class="fill"></div>
        <div class="description">
            <textarea placeholder="请详细描述您的问题"></textarea>
        </div>
        <div class="submit">
            <input type="button" value="提交问题">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Answer"
    }
</script>

<style scoped>
    #question{
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
    .entry{
        width: 690px;
        height: 100px;
        margin: 0 auto;
    }
    .entry>input{
        width: 690px;
        height: 50px;
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
        margin: 0 auto;
    }
    .description>textarea{
        width: 690px;
        height: 260px;
        margin: 36px auto 34px;
    }
    .description>textarea::-webkit-input-placeholder{
        font-size: 28px;
        color: #888888;
    }
    .submit{
        width: 690px;
        height: 84px;
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