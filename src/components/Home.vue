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
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </el-col>
     <el-col :span="18" v-if="isShow">
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
            prop="pic"
            label="商品图片"
            width="180">
                <div class="demo-fit">
                    <div class="block" v-for="fit in fits" :key="fit">
                        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                    </div>
                </div>
            </el-table-column>
            <el-table-column
            prop="name"
            label="商品名称">
            </el-table-column>
            <el-table-column
            prop="price"
            label="商品价格">
            </el-table-column>
            <el-table-column
            prop="label"
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
            prop="verify_status"
            label="审核状态">
            </el-table-column>

        </el-table>
        </el-col>
    </el-row>
     
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Home',
    data(){
        return{
            isShow:false,
            tableData: [
                {
                id:1,
                pic: '2016-05-02',
                name: '王小虎',
                price:5,
                label: '标签',
                sort: 100,
                sale: 100,
                verify_status: 1,
                address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            fits: ['fill'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goodsList(){
          this.isShow = true;

          console.log("hello");
      }
    }
})
</script>

<style>

</style>