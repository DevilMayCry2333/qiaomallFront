<template>
        <el-form :model="cateForm" :rules="rules" ref="goodsForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="name">
            <el-input v-model="cateForm.name"></el-input>
        </el-form-item>

        <el-form-item label="上级分类" prop="region">
            <el-select v-model="cateForm.brand" placeholder="请选择商品品牌">
            <el-option label="法拉利" value="shanghai"></el-option>
            <el-option label="兰博基尼" value="beijing"></el-option>
            </el-select>
        </el-form-item>

            <el-form-item label="数量单位" prop="name">
            <el-input v-model="cateForm.productUnit"></el-input>
        </el-form-item>

        <el-form-item label="排序" prop="desc">
            <el-input type="textarea" v-model="cateForm.sort"></el-input>
        </el-form-item>

            <el-form-item label="是否显示" prop="productSn">
                <el-radio v-model="showStatus" label="1">是</el-radio>
                <el-radio v-model="showStatus" label="2">否</el-radio>
            </el-form-item>

            <el-form-item label="是否显示在导航栏" prop="productSn">
                <el-radio v-model="navStatus" label="1">是</el-radio>
                <el-radio v-model="navStatus" label="2">否</el-radio>
            </el-form-item>

            <el-form-item label="关键词" prop="unit">
            <el-input v-model="cateForm.keywords"></el-input>
        </el-form-item>

            <el-form-item label="分类描述" prop="weight">
            <el-input v-model="cateForm.description"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('cateForm')">立即创建</el-button>
            <el-button @click="resetForm('cateForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
const config = require('../config/conf.js');

export default Vue.extend({
        name: 'CateEdit',
    data() {
      return {
        queryId:1,
        showStatus:1,
        navStatus:1,
        cateForm: {
          name: '',
          productUnit:'',
          brand: '',
          description: '',
          keywords:'',
          unit:'',
          sort:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
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
      this.queryId = this.$route.query.id;
      console.log(this.queryId);
      var that = this;
                axios({
                        method:'post',
                        url: config.url+ "EditShowCate",
                        params:{
                            id:this.queryId
                        }
                }).then(function(resp){
                        that.$nextTick(function () {
                        console.log(resp.data);
                        that.cateForm = resp.data;
                        })

                console.log("hello");
            })

      console.log("Created");
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
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