<template>
    <div>
        <h3>基本信息</h3>  
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="orderSn"
            label="订单编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="deliverySn"
            label="发货单流水号">
            </el-table-column>
            <el-table-column
            prop="memberUsername"
            label="用户账号">
            </el-table-column>

            <el-table-column
            prop="payType"
            label="支付方式">
            </el-table-column>
            <el-table-column
            prop="sourceType"
            label="订单来源">
            </el-table-column>
            <el-table-column
            prop="orderType"
            label="订单类型">
            </el-table-column>
            <el-table-column
            prop="deliveryCompany"
            label="配送方式">
            </el-table-column>
            <el-table-column
            prop="deliverySn"
            label="物流单号">
            </el-table-column>
            <el-table-column
            prop="autoConfirmDay"
            label="自动确认收货时间">
            </el-table-column>


        </el-table>

        <h3>收货人信息</h3>  

        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="receiverName"
            label="收货人"
            width="180">
            </el-table-column>
            <el-table-column
            prop="receiverPhone"
            label="手机号码">
            </el-table-column>
            <el-table-column
            prop="receiverPostCode"
            label="邮政编码">
            </el-table-column>

            <el-table-column
            prop="receiverProvince"
            label="收货地址(省)">
            </el-table-column>
            <el-table-column
            prop="receiverCity"
            label="收货地址(市)">
            </el-table-column>
            <el-table-column
            prop="receiverRegion"
            label="收货地址(县)">
            </el-table-column>
            <el-table-column
            prop="receiverDetailAddress"
            label="收货地址(详细)">
            </el-table-column>


        </el-table>

                <h3>商品信息</h3>  
        <el-table
            :data="itemDetailData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="productPic"
            label="商品图片"
            width="180">

            <template scope="scope">
            <img :src="scope.row.productPic" width="80" height="80" class="head_pic"/>
            </template>

            </el-table-column>
            <el-table-column
            prop="productName"
            label="商品名称">
            </el-table-column>
            <el-table-column
            prop="productPrice"
            label="价格">
            </el-table-column>

            <el-table-column
            prop="productSn"
            label="货号">
            </el-table-column>
            <el-table-column
            prop="productAttr"
            label="属性">
            </el-table-column>
            <el-table-column
            prop="productQuantity"
            label="数量">
            </el-table-column>
            <el-table-column
            prop="productPrice"
            label="小计">
            </el-table-column>


        </el-table>




    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
const config = require('../config/conf.js');

export default Vue.extend({
    name: 'OrderDetail',
    created(){
        console.log(this.$route.query.id);
        this.id = this.$route.query.id;
         var that = this;
                axios({
                        method:'post',
                        url: config.url+ "/Order/OrderBasicDetail",
                        params:{
                            id: this.id
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        that.tableData = resp.data;
                        // console.log(this.desserts);
                        })

                console.log("hello");
            })

                            axios({
                        method:'post',
                        url: config.url+ "/Order/OrderItemById",
                        params:{
                            id: this.id
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        that.itemDetailData = resp.data;
                        // console.log(this.desserts);
                        })

                console.log("hello");
            })
            

    },
    data(){
        return{
            id:'1',
            tableData: [
                {
                orderSn:1,
                // pic: '2016-05-02',
                deliverySn:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                memberUsername: '王小虎',
                payType:5,
                sourceType: '标签',
                orderType: 100,
                deliveryCompany: 100,
                address: '上海市普陀区金沙江路 1518 弄',
                }
            ],
            itemDetailData:[

            ]

        }
    }
})
</script>

<style>

</style>