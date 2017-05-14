<template>
  <div id="json">
      <el-alert
        v-show="showAlert"
        title="格式有误"
        type="error">
      </el-alert>
   <el-row>
      <el-col class="label" :span="4">
          JSON
      </el-col>
      <el-col :span="20">
        <el-input
          type="textarea"
          :rows="8"
          v-model="json"
          placeholder="请输入内容">
        </el-input>
      </el-col>
    </el-row>
    <el-row class="button-wrap">
      <el-button type="primary" @click="json2xml">
        <i class="el-icon-caret-bottom"></i>
      </el-button>
      <el-button type="primary" @click="xml2json" >
        <i class="el-icon-caret-top"></i>
      </el-button>
    </el-row>
    <el-row>
      <el-col :span="4">XML</el-col>
      <el-col :span="20">
        <el-input
          type="textarea"
          :rows="8"
          v-model="xml"
          placeholder="请输入内容"
        >
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import json2xmlParser from 'json2xml'
  import convert from 'xml-js'
  export default {
    components: {
    },
    data(){
      return {
        json: '',
        xml: '',
        showAlert: false
      }
    },

    methods:{
      json2xml(){
        console.log('json2xml')
        console.log(this.json)
        try{
        this.xml = json2xmlParser(JSON.parse(this.json))
        }catch(e){
          this.showAlert = true;
        }
      },
      xml2json(){
        this.json = convert.xml2json(this.xml,{compact: true})
      }
    },
    name: 'Json'
  }
</script>

<style lang="scss" scoped>
#json{
  position: absolute;
  box-sizing: border-box;
  padding: 20px;
  display: inline-block;
  top: 0;
  width: calc(100% - 150px);
  .el-alert{
    margin-bottom: 20px;
  }
  .button-wrap{
    text-align: center;
    padding: 20px 0;
  }
}
</style>
