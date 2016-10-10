<template>
  <div id="app">
    <headerComponent />

    <div class="breadthumb">
      <div class="el-row is-justify-center el-row--flex">
        <div class="el-col el-col-16">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <el-row>
      <el-col :span="16" :offset="4">
        <router-view></router-view>
      </el-col>
    </el-row>

    <footerComponent />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  data () {
    return {
    }
  },

  methods: {
  },
  components: {
    headerComponent: Header,
    footerComponent: Footer
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #20a0ff;
  text-decoration: none;
}
#app a.router-link-active{
  color: #20a0ff;
}

.breadthumb{
  padding: 20px 0;
}
</style>
