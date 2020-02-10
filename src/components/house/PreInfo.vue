<template>
    <div id="pre">
        <header>
            <div class="header">
                <h2>一房一价</h2>
            </div>
        </header>
        <div class="pre">
            <table>
                <tr>
                    <th colspan="4">项目预售信息 鸿海城</th>
                </tr>
                <tr>
                    <td>公司名称</td>
                    <td colspan="3">江西济泽置业有限公司</td>
                </tr>
                <tr>
                    <td>项目名称</td>
                    <td colspan="3">鸿海城</td>
                </tr>
                <tr>
                    <td>预售许可证</td>
                    <td colspan="3">2019120</td>
                </tr>
                <tr>
                    <td>售楼电话</td>
                    <td colspan="3">13188888888</td>
                </tr>
                <tr>
                    <td>土地来源</td>
                    <td>买卖</td>
                    <td>土地面积</td>
                    <td>23456m2</td>
                </tr>
                <tr>
                    <td>土地级别</td>
                    <td>一级</td>
                    <td>占地面积</td>
                    <td>23006m2</td>
                </tr>
                <tr>
                    <td>建筑面积</td>
                    <td>20000m2</td>
                    <td>容积率</td>
                    <td>80%</td>
                </tr>
                <tr>
                    <td>绿地率</td>
                    <td>30%</td>
                    <td>建筑密度</td>
                    <td>19.68%</td>
                </tr>
                <tr>
                    <td>工程投资</td>
                    <td>15亿</td>
                    <td>开工日期</td>
                    <td>2015年8月8日</td>
                </tr>
                <tr>
                    <td>竣工日期</td>
                    <td>2020年1月1日</td>
                    <td>施工单位</td>
                    <td>中建三局</td>
                </tr>
                <tr>
                    <td>测量单位</td>
                    <td colspan="3">中国国土规划院</td>
                </tr>
            </table>
        </div>
        <div class="other">
            <table>
                <tr>
                    <th colspan="3">房屋用途-住宅</th>
                </tr>
                <tr>
                    <td></td>
                    <td>套数</td>
                    <td>面积</td>
                </tr>
                <tr>
                    <td>批准销售</td>
                    <td>416</td>
                    <td>2333</td>
                </tr>
                <tr>
                    <td>可售统计</td>
                    <td>416</td>
                    <td>2333</td>
                </tr>
                <tr>
                    <td>已售统计</td>
                    <td>416</td>
                    <td>2333</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="3">房屋用途-商业</th>
                </tr>
                <tr>
                    <td></td>
                    <td>间数</td>
                    <td>面积</td>
                </tr>
                <tr>
                    <td>批准销售</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>可售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>已售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="3">房屋用途-写字楼</th>
                </tr>
                <tr>
                    <td></td>
                    <td>间数</td>
                    <td>面积</td>
                </tr>
                <tr>
                    <td>批准销售</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>可售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>已售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="3">房屋用途-车库车位</th>
                </tr>
                <tr>
                    <td></td>
                    <td>间数</td>
                    <td>面积</td>
                </tr>
                <tr>
                    <td>批准销售</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>可售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>已售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="3">房屋用途-其他</th>
                </tr>
                <tr>
                    <td></td>
                    <td>间数</td>
                    <td>面积</td>
                </tr>
                <tr>
                    <td>批准销售</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>可售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>已售统计</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
        <div class="info">
            <table>
                <tr>
                    <th>点击<span>幢号</span>查看详细信息</th>
                </tr>
                <tr>
                    <td>
                        <router-link to="#">15栋</router-link>
                        <router-link to="#">16栋</router-link>
                        <router-link to="#">19栋</router-link>
                        <router-link to="#">20栋</router-link>
                    </td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <div class="service">
                <h4>在线客服</h4>
            </div>
            <input type="text" class="see" value="预约看房">
            <input type="text" class="consult" value="电话咨询">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PreInfo"
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
    .pre{
        width: 690px;
        margin:  40px auto 0;
    }
    .pre>table td{
        width: 100px;
        height: 100px;
        border: 1px solid #e5e5e5;
    }
    .pre>table th{
        width: 172px;
        height: 90px;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        border: 1px solid #e5e5e5;
    }
    .pre>table td{
        width: 172px;
        height: 90px;
    }
    .pre>table td:nth-child(2n+1){
        font-size: 26px;
        text-align: center;
        background-color: #f9f9f9;
    }
    .pre>table td:nth-child(2n){
        font-size: 26px;
        padding-left: 20px;
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