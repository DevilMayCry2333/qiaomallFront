<template>
<div>
    <el-row class="tac">
    <el-col :span="3">
        <h5>欢迎光临</h5>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="goodsList">商品列表</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="goodsCate">商品分类</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title" @click="orderList">订单列表</span>
        </el-menu-item>
        </el-menu>
    </el-col>

    <el-col :span="5">
           <el-input v-model="searchForm.id" class="searchId"></el-input>
           <el-button type="primary" @click="searchById">以ID搜索</el-button>
    </el-col>

    <el-col :span="5" style="margin-left: 10%">
          <el-input v-model="searchForm.name" class="searchName"></el-input>
          <el-button type="primary" @click="searchByName">以名字搜索</el-button>
    </el-col>

    <el-col :span="5" style="margin-left: 10%">
          <el-input v-model="searchForm.paymentTime" class="searchName"></el-input>
          <el-button type="primary" @click="searchByTime">以时间搜索</el-button>
    </el-col>


     <el-col :span="18" v-if="isShow==1" style="margin-top:2%">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="id"
            label="编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="商品名称">
            </el-table-column>
            <el-table-column
            prop="pic"
            label="商品图片">
            <template scope="pic1" v-if="isShow==1">
            <img :src="pic1.row.pic" width="80" height="80" class="head_pic"/>
            </template>

            </el-table-column>

            <el-table-column
            prop="price"
            label="商品价格">
            </el-table-column>
            <el-table-column
            prop="keywords"
            label="标签">
            </el-table-column>
            <el-table-column
            prop="sort"
            label="排序">
            </el-table-column>
            <el-table-column
            label="SKU库存">
            </el-table-column>
            <el-table-column
            prop="sale"
            label="销量">
            </el-table-column>
            <el-table-column
            prop="verifyStatus"
            label="审核状态">
            </el-table-column>

            <el-table-column
            label="编辑">
                 <template scope="Edit1" v-if="isShow==1">
            <el-button type="primary" icon="el-icon-edit" circle @click="goodEdit(Edit1.row.id)"></el-button>
                 </template>
            </el-table-column>


        </el-table>

        </el-col>


     <el-col :span="18" v-if="isShow==2" style="margin-top:2%">
        <el-table
            :data="cateData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="id"
            label="编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="分类名称">
            </el-table-column>
            <el-table-column
            prop="level"
            label="级别">
            </el-table-column>

            <el-table-column
            prop="productCount"
            label="商品数量">
            </el-table-column>
            <el-table-column
            prop="productUnit"
            label="数量单位">
            </el-table-column>
            <el-table-column
            prop="sort"
            label="排序">
            </el-table-column>
            <el-table-column
            label="设置">
            </el-table-column>
            <el-table-column
            label="操作">
            </el-table-column>


            <el-table-column
            label="编辑">
            <template scope="Edit2" v-if="isShow==2">
            <el-button type="primary" icon="el-icon-edit" circle @click="cateEdit(Edit2.row.id)"></el-button>
            </template>
            </el-table-column>

            <el-table-column
            label="删除">
             <template scope="Del2" v-if="isShow==2">
            <el-button type="danger" icon="el-icon-delete" circle @click="cateDel(Del2.row.id)"></el-button>
             </template>

            </el-table-column>



        </el-table>

        </el-col>



    <el-col :span="18" v-if="isShow==4" style="margin-top:2%">
        <el-table
            :data="orderData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="id"
            label="编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="orderSn"
            label="订单编号">
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="提交时间">
            </el-table-column>

            <el-table-column
            prop="memberUsername"
            label="用户账号">
            </el-table-column>
            <el-table-column
            prop="totalAmount"
            label="订单金额">
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
            prop="status"
            label="订单状态">
            </el-table-column>

            <el-table-column
            label="删除">
             <template scope="Del4" v-if="isShow==4">
            <el-button type="danger" icon="el-icon-delete" circle @click="orderDel(Del4.row.id)"></el-button>
             </template>

            </el-table-column>

            <el-table-column
            label="查看">
             <template scope="Edit4" v-if="isShow==4">
            <el-button type="info" icon="el-icon-message" circle @click="showOrderDetail(Edit4.row.id)"></el-button>
             </template>
            </el-table-column>


        </el-table>
        </el-col>

    </el-row>
     
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { setTimeout } from 'timers';
const config = require('../config/conf.js');
export default Vue.extend({
    name: 'Home',
    data(){
        return{
            isShow:0,
            tableData: [
                {
                id:1,
                // pic: '2016-05-02',
                level:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                name: '王小虎',
                price:5,
                label: '标签',
                sort: 100,
                sale: 100,
                verify_status: 1,
                address: '上海市普陀区金沙江路 1518 弄',
                }
            ],
            cateData: [
                {
                id:1,
                // pic: '2016-05-02',
                level:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                name: '王小虎',
                productCount:5,
                productUnit: '标签',
                sort: 100,
                sale: 100,
                verify_status: 1,
                address: '上海市普陀区金沙江路 1518 弄',
                }
            ],
            orderData:[
            {
                id:2,
                // pic: '2016-05-02',
                orderSn:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                createTime: '王小虎2',
                memberUsername:5,
                totalAmount: '标签',
                payType: 100,
                sourceType: 100,
                status: 1,
                address: '上海市普陀区金沙江路 1518 弄',
                }

            ],
            searchForm:{
                name:'',
                id:'',
                paymentTime:'',

            },
            fits: ['fill'],
            pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      searchById(){
          console.log(this.searchForm.id);
          console.log(this.isShow);
                  var that = this;

                axios({
                        method:'post',
                        url: config.url+ "SearchOrderBySn",
                        params:{
                            sn:this.searchForm.id,
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        // console.log(this.desserts);
                        })
            })

      },
      searchByName(){
          console.log(this.searchForm.name);
          console.log(this.isShow);
          var that = this;
                axios({
                        method:'post',
                        url: config.url+ "SearchByUserName",
                        params:{
                            memberUsername:this.searchForm.name,
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        // console.log(this.desserts);
                        })
            })


      },
      searchByTime(){
          console.log(this.searchForm.paymentTime);
          console.log(this.isShow);
          var that = this;

                axios({
                        method:'post',
                        url: config.url+ "SearchByTime",
                        params:{
                            time:this.searchForm.paymentTime,
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        // console.log(this.desserts);
                        })
            })


       },
      showOrderDetail(e){
          console.log(e);
          this.$router.push({
              path:'/OrderDetail',
              query:{
                  id:e
              }
          })
      },
      orderDel(e){
          console.log("orderDel");
          console.log(e);
          var that1 = this;
        this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
                  var that = this;
                axios({
                        method:'post',
                        url: config.url+ "delOrder",
                        params:{
                            id:e
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        that.$message({
                            type: 'success',
                            message: '删除成功!请手动返回!'
                        });
                        // console.log(this.desserts);
                        })
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goodsCate(){
           this.isShow = 2;
          var that = this;
                axios({
                        method:'post',
                        url: config.url+ "goodsCategory",
                        params:{
                            goodsId:'1'
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        this.cateData = resp.data.Data;
                        // console.log(this.desserts);
                        })

                console.log("hello");
            })


      },
      orderList(){
          this.isShow = 4;
          console.log("order");
          var that = this;
                axios({
                        method:'post',
                        url: config.url+ "allOrder",
                        params:{
                            goodsId:'1'
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        this.orderData = resp.data.orderData;
                        // console.log(this.desserts);
                        })

                console.log("hello");
            })

      },
      cateEdit(e){
          console.log(e);
          console.log("*****");
          this.$router.push({
              path:'/CateEdit',
              query:{
                  id:e
              }
          })


      },
      goodEdit(e){
          console.log(e);
          console.log("GoodEdit");
          this.$router.push({
              path:"/GoodEdit",
              query:{
                  id:e
              }
          })
      },
      cateDel(e){
          console.log(e);
          console.log("cateDel");
          var that = this;
          this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
                  var that = this;
                axios({
                        method:'post',
                        url: config.url+ "DelShowCate",
                        params:{
                            id:e
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        that.$message({
                            type: 'success',
                            message: '删除成功!请手动返回!'
                        });

                        // console.log(this.desserts);
                        })
                })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });


      },
      goodsList(){
            console.log(config);
            this.isShow = 1;
            var that = this;
                axios({
                        method:'post',
                        url: config.url+ "AllGoods",
                        params:{
                            goodsId:'1'
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        this.tableData = resp.data.tableData;
                        // console.log(this.desserts);
                        })

                console.log("hello");
            })
        }
    }
})

</script>

<style>
.searchId{
    width: 30%
}
.searchName{
    width: 30%
}

</style>