<template>
    <div id="help">
        <header>
            <div class="header">
                <h2>帮我找房</h2>
            </div>
        </header>
        <div class="banner">
            <img src="../../assets/images/house/help.jpg">
        </div>
        <div class="progress">
            <div>
                <h2>购房预算</h2>
                <input type="button" v-model="nowNum">
            </div>
            <div>
                <div class="dragbox" @mousemove="timeMove($event)" @mouseleave="timeEnd($event)" ref="dragbox">
                    <div class="speed" @click="timeClick($event)">
                        <div class="progressbar" :style="{width:distance+'px'}">
                        </div>
                    </div>
                    <div class="bardrag" @mousedown="timeDown($event)" @mouseup="timeEnd($event)"
                         :style="{left:distance+'px'}">
                    </div>
                </div>
                <p><span>0</span><span>1000万</span></p>
            </div>
        </div>
        <div class="area">
            <h2>购房预算</h2>
            <input type="text" placeholder="请填写区域">
        </div>
        <div class="ideal">
            <h2>理想户型</h2>
            <ul>
                <li v-for="(item,index) in apartment" :key="index" @click="change(index)" :class="{active:index == current}">{{item}}</li>
            </ul>
        </div>
        <div class="phone">
            <h2>您的手机号码</h2>
            <input type="text" placeholder="请输入你的手机号码">
        </div>
        <div class="submit">
            <input type="button" value="提交">
        </div>
    </div>
</template>

<script>
    export default {
        name: "help",
        data () {
            return{
                pos: {},
                startX: null,
                locked: false,
                distance: 0, //当前位置
                endDistance: 0, //上次操作结束位置
                dragWidth: 0, //进度条宽度
                startNum: 0,
                endNum: 1000,
                nowNum: 0,
                current: 0,
                apartment: [
                    '不限','一居','二居','三居','四居','五居及以上'
                ]
            }
        },
        methods: {
            mousePos: function (e) {
                var pos = {};
                pos.x = e.pageX;
                this.pos = pos;
                return pos;
            },
            timeDown: function (e) { // 当鼠标指针移动到元素上方，并按下鼠标左键时
                this.transTime = 0;
                this.mousePos(e);
                this.startX = this.pos.x;
                this.locked = true;
                this.endDistance = this.distance;
            },
            timeMove: function (e) { // 当鼠标指针移动到元素上方移动时
                if (!this.locked) return;
                let pos = this.mousePos(e);
                let moveX = pos.x - this.startX;
                if (this.distance >= this.dragWidth) {
                    this.distance = this.dragWidth - 10;
                } else {
                    if ((this.distance <= 0 && moveX < 0) || (this.distance >= this.dragWidth && moveX > 0)) return;
                    this.distance = this.endDistance + moveX;
                    this.countNum(this.distance);
                }
            },
            timeEnd: function () {
                this.locked = false;
            },
            timeClick: function (e) { //点击拖动到指定位置
                let x = e.offsetX;
                let moveX = x - this.distance;
                this.distance += moveX;
                this.countNum(this.distance);

            },
            countNum: function (num) {
                let len = this.endNum - this.startNum;
                let now = Math.ceil((num / this.dragWidth) * len);
                if( now >= 970 ){
                    this.nowNum = "1000万";
                }else{
                    this.nowNum = Math.ceil((num / this.dragWidth) * len) + "万";
                }
            },
            change: function (index) {
                this.current = index;
            }
        },
        mounted: function() {
            this.dragWidth = this.$refs.dragbox.clientWidth;
        },
    }
</script>

<style scoped>
    #help{
        width: 750px;
        background-color: #ffffff;
    }
    .banner{
        width: 750px;
        height: 260px;
    }
    .banner>img{
        width: 750px;
        height: 260px;
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
    .progress{
        width: 690px;
        height: 200px;
        margin: 60px auto;
    }
    .progress>div:first-child{
        width: 690px;
        height: 60px;
    }
    .progress>div:last-child{
        width: 690px;
        margin-top: 30px;
    }
    .progress>div>h2{
        font-size: 36px;
        font-weight: bold;
        padding: 12px 0;
        float: left;
    }
    .progress>div>input{
        width: 142px;
        height: 60px;
        border-radius: 24px;
        font-size: 28px;
        color: #ffffff;
        background-color: #2fd8fd;
        float: right;
    }
    .progress>div>p{
        font-size: 30px;
    }
    .progress>div>p>span{
        margin-top: 26px;
        display: inline-block;
    }
    .progress>div>p>span:first-child{
        margin-left: 6px;
        float: left;
    }
    .progress>div>p>span:last-child{
        float: right;
    }
    .dragbox {
        width: 690px;
        position: relative;
        height: 20px;
        border-radius: 4px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    }
    .speed {
        background: #e2e2e2;
        height: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    }
    .progressbar {
        background-color: #3fdbfd;
        float: left;
        width: 0;
        height: 100%;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        text-align: center;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
        -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    }

    .bardrag {
        position: absolute;
        top: -10px;
        left: 10px;
        display: inline-block;
        height: 30px;
        width: 30px;
        background-color: #3fdbfd;
        border: 1px solid #e1e0de;
        border-radius: 30px;
        cursor: e-resize;
    }
    .area{
        width: 690px;
        height: 180px;
        margin: 0 auto;
    }
    .area>h2{
        font-size: 36px;
        font-weight: bold;
    }
    .area>input{
        width: 660px;
        height: 80px;
        border-radius: 5px;
        padding-left: 30px;
        margin-top: 36px;
        background-color: #f6f6f6;
    }
    .area>input::-webkit-input-placeholder{
        font-size: 24px;
        color: #999999;
    }
    .ideal{
        width: 690px;
        margin: 0 auto;
    }
    .ideal>h2{
        font-size: 36px;
        font-weight: bold;
        padding: 40px 0;
    }
    .ideal>ul{
        width: 690px;
        height: 200px;
    }
    .ideal>ul>li{
        width: 214px;
        height: 80px;
        float: left;
        line-height: 80px;
        font-size: 28px;
        margin-bottom: 20px;
        text-align: center;
        background-color: #f6f6f6;
    }
    .ideal>ul>li:nth-child(2){
        margin: 0 20px;
    }
    .ideal>ul>li:nth-child(5){
        margin: 0 20px;
    }
    .ideal>ul .active{
        color: #ffffff;
        background-color: #00c0eb;
    }
    .phone{
        width: 690px;
        height: 180px;
        margin: 40px auto;
    }
    .phone>h2{
        font-size: 36px;
        font-weight: bold;
    }
    .phone>input{
        width: 660px;
        height: 80px;
        border-radius: 5px;
        padding-left: 30px;
        margin-top: 36px;
        background-color: #f6f6f6;
    }
    .phone>input::-webkit-input-placeholder{
        font-size: 24px;
        color: #999999;
    }
    .submit{
        width: 690px;
        height: 80px;
        margin: 0 auto 40px;
    }
    .submit>input{
        width: 690px;
        height: 80px;
        color: #ffffff;
        font-size: 30px;
        border-radius: 10px;
        background-color: #00c0eb;
    }
</style>