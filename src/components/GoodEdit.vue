<template>
    <el-form :model="goodsForm" :rules="rules" ref="goodsForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="商品分类">
        <div class="block">

        <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"></el-cascader>
        </div>
  </el-form-item>

  <el-form-item label="商品名称" prop="name">
    <el-input v-model="goodsForm.brandName"></el-input>
  </el-form-item>
    <el-form-item label="副标题" prop="name">
    <el-input v-model="goodsForm.detailDesc"></el-input>
  </el-form-item>
  <el-form-item label="商品品牌" prop="region">
    <el-select v-model="goodsForm.brand" placeholder="请选择商品品牌">
      <el-option label="法拉利" value="shanghai"></el-option>
      <el-option label="兰博基尼" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="商品介绍" prop="desc">
    <el-input type="textarea" v-model="goodsForm.desc"></el-input>
  </el-form-item>

    <el-form-item label="商品货号" prop="productSn">
    <el-input v-model="goodsForm.productSn"></el-input>
  </el-form-item>

    <el-form-item label="商品售价" prop="price">
    <el-input v-model="goodsForm.price"></el-input>
  </el-form-item>

    <el-form-item label="市场价" prop="originalPrice">
    <el-input v-model="goodsForm.originalPrice"></el-input>
  </el-form-item>

    <el-form-item label="商品库存" prop="stock">
    <el-input v-model="goodsForm.stock"></el-input>
  </el-form-item>

    <el-form-item label="计量单位" prop="unit">
    <el-input v-model="goodsForm.unit"></el-input>
  </el-form-item>

    <el-form-item label="商品重量" prop="weight">
    <el-input v-model="goodsForm.weight"></el-input>
  </el-form-item>

    <el-form-item label="排序" prop="sort">
    <el-input v-model="goodsForm.sort"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('goodsForm')">立即修改</el-button>
    <el-button @click="resetForm('goodsForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
const config = require('../config/conf.js');

export default Vue.extend({
    name: 'GoodEdit',
    data() {
      return {
        queryId:'1',
        goodsForm: {
          brandName: '',
          subtitle:'',
          brand: '',
          desc: '',
          productSn:'',
          price:'',
          originalPrice:'',
          unit:'',
          weight:'',
          sort:'',
        },
        rules: {
          brandName: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          brand: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          subtitle: [
            {required: true, message: '请选择日期', trigger: 'change' }
          ],
          desc: [
            {required: true, message: '请输入商品描述', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        },
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
          }, {
            value: 'daohang',
            label: '导航',
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
          }, {
            value: 'form',
            label: 'Form',
          }, {
            value: 'data',
            label: 'Data',
          }, {
            value: 'notice',
            label: 'Notice',
          }, {
            value: 'navigation',
            label: 'Navigation',
          }, {
            value: 'others',
            label: 'Others',
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
        }]
      };
    },
    created(){
      console.log(this.$route.query.id);
      this.queryId = this.$route.query.id;

      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "showGoodsDetail",
                        params:{
                            goodsId: this.queryId
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        this.goodsForm = resp.data;
                        // console.log(this.desserts);
                        })
                })
    },
    methods: {
      submitForm(formName) {
        var that = this;

        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            console.log(this.$refs[formName].$options.propsData.model);
                axios({
                        method:'post',
                        url: config.url+ "EditGoods",
                        params:{
                            id:this.goodsForm.id,
                            brandName: this.goodsForm.brandName,
                            detailDesc: this.goodsForm.detailDesc,
                            brand: this.goodsForm.brand,
                            desc: this.goodsForm.desc,
                            productSn: this.goodsForm.productSn,
                            price: this.goodsForm.price,
                            originalPrice: this.goodsForm.originalPrice,
                            stock: this.goodsForm.stock,
                            unit: this.goodsForm.unit,
                            weight: this.goodsForm.weight,
                            sort: this.goodsForm.sort
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        })
                })

            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleChange(value) {
        console.log(value);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
})
</script>

<style>

</style>