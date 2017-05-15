<template>
  <div id="url-encode">
    <el-alert
      v-show="showAlert"
      title="格式有误"
      @close="hideAlert"
      type="error">
    </el-alert>
   <el-row>
      <el-col :span="24">
        <el-input
          type="textarea"
          :rows="8"
          v-model="input"
          placeholder="请输入内容">
        </el-input>
      </el-col>
    </el-row>
    <el-row class="button-wrap">
      <el-col :span="24">
        <el-button type="primary" @click="encode">
          encode
        </el-button>
        <el-button type="primary" @click="decode" >
          decode
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input
          type="textarea"
          :rows="8"
          v-model="output"
          placeholder="转换结果"
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
        input: '',
        output: '',
        showAlert: false
      }
    },

    methods:{
      encode(){
        this.output = encodeURIComponent(this.input)
      },
      decode(){
        try{
          this.output = decodeURIComponent(this.input)
        }catch(e){
          this.showAlert = true
        }
      },
      hideAlert(){
          this.showAlert = false
      }
    },
    name: 'urlencode'
  }
</script>

<style lang="scss" scoped>
#url-encode{
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
