<template>
  <div id="footer" class="footer">
    <div class="links">
      <router-link v-for="item in links" :to="item.url">{{ item.title }}</router-link>
    </div>
    {{ copyright }} <i class="el-icon-upload"></i>
  </div>
</template>
<style lang="sass" scoped>
  .footer
    border-top: 1px solid #f3f3f3
    text-align: center
    font-size: 14px
    font-family: 'Microsoft Yahei', "Source Code Pro", sans-serif
    margin: 50px 0
    padding: 20px 0
    line-height: 22px
    .links
      padding: 10px 0
      a
        margin: 0 5px
        color: #8492A6!important
    i
      font-size: 22px
      color: #58B7FF
      margin-left: 5px
</style>
<script>
  var year = new Date().getYear() + 1900

  export default {
    data () {
      return {
        copyright: '@ ' + year + ' Jaeheng',
        links: [
          {
            title: '帮助中心',
            url: '/help'
          },
          {
            title: '反馈建议',
            url: '/callback'
          },
          {
            title: '关于我们',
            url: '/aboutus'
          },
          {
            title: '捐赠',
            url: '/donation'
          }
        ]
      }
    }
  }
</script>
