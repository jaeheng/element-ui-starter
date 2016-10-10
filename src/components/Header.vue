<template>
  <div id="header" class="header">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16">
        <el-menu theme="dark" default-active="/home" class="el-menu-demo" mode="horizontal" :router=true>
          <el-menu-item index="/">
            <div class="logo"><i class="el-icon-upload"></i></div>
          </el-menu-item>
          <el-menu-item v-for="item in mainMenus" :index="item.index">{{ item.title }}</el-menu-item>
          <div class="right">
            <el-submenu index="/plus">
              <template slot="title"><i class="el-icon-plus"></i></template>
              <el-menu-item index="/demand/add">提交需求</el-menu-item>
              <el-menu-item index="/bug/add">提交bug</el-menu-item>
            </el-submenu>
            <el-submenu index="/user">
              <template slot="title">jaeheng</template>
              <el-menu-item index="/user/mydemand">我的需求</el-menu-item>
              <el-menu-item index="/user/safe">安全中心</el-menu-item>
              <el-menu-item index="/user/logout">退出</el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainMenus: [
        {
          title: '首页',
          index: '/home'
        },
        {
          title: '需求列表',
          index: '/demand'
        },
        {
          title: 'bug列表',
          index: '/bug'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  #header
    background-color: #324057
  .right
    float: right
  .logo
    font-size: 40px
    color: #58B7FF
</style>
