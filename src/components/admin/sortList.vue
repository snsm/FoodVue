<template>
  <div class="sort">
      <v-header></v-header>
      <div class="am-cf admin-main">
          <!-- sidebar start -->
          <v-menu></v-menu>
          <!-- sidebar end -->

          <!-- content start -->
          <div class="admin-content">
              <div class="admin-content-body">
                  <div class="am-cf am-padding">
                      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">类别管理</strong> / <small>一些常用模块</small></div>
                  </div>

                  <div class="am-g">
                      <div class="am-u-sm-12">
                          <table class="am-table am-table-bd am-table-striped admin-content-table">
                              <thead>
                              <tr>
                                  <th>ID</th><th>用户名</th><th>排序</th><th>操作</th>
                              </tr>
                              </thead>
                              <tbody>

                              <tr v-for='item in sort'>
                                  <td>{{ item.sort_id }}</td><td>{{ item.sort_name }}</td><td>{{ item.sort_order }}</td> <td>修改</td>
                              </tr>

                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

              <v-footer></v-footer>

          </div>
          <!-- content end -->

      </div>
  </div>
</template>

<script>
import header from './layouts/header'
import menu from './layouts/menu'
import footer from './layouts/footer'


export default {
  name: 'sort',
  data() {
    return {
      sort:[]
    }
  },
  components: {
      'v-header': header,'v-menu':menu,'v-footer': footer
  },
  mounted(){
    this.axios.get("http://www.food.skip.pw/api/sort-list?accessToken=7FkRQQIY2wpLibtpNIuYa3iVGPWoUscJSaRnPbkOLj7Z51znr0lvIzk2yEBk").then((response) => {
        this.sort = response.data
     })
  },
}
</script>

<style>
  .sort{
    height:100%;
  }
  @import '../../../static/amaze/css/amazeui.css';
  @import '../../../static/amaze/css/admin.css';
</style>
