<template>
  <div id="app">
    <div id="nav" >
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu index="1">
          <template slot="title">最近用过</template>
          <el-menu-item index="1-1">JSON转换</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">转码</template>
          <el-menu-item index="2-1">JSON转换</el-menu-item>
          <el-menu-item index="2-2">base64转换</el-menu-item>
          <el-menu-item index="2-3">UrlEn/Decode</el-menu-item>
          <el-menu-item index="2-4">MD5</el-menu-item>
          <el-menu-item index="2-5">unicode</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">压缩</template>
          <el-menu-item index="3-1">图片压缩</el-menu-item>
          <el-menu-item index="3-2">JS压缩</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">其他工具</template>
          <el-menu-item index="4-1">网络状态</el-menu-item>
          <el-menu-item index="4-2">二维码</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">

  * {
    font-family: 'Microsoft Yahei','STHeiti';
    margin: 0;
    padding: 0;
  }

  html,
  body { 
    position: relative;
    height: 100%;
    width: 100%;
   }
 #app{
   position: relative;
   height: 100%;
    width: 100%;
    overflow: hidden;
 }
 #nav{
   display: inline-block;
   position: relative;
   height: 100%;
   overflow: scroll;
   width: 150px;
   background: #324157;
 }

</style>
