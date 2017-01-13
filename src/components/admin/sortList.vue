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
                                  <th>ID</th><th>用户名</th><th>最后成交任务</th><th>成交订单</th>
                              </tr>
                              </thead>
                              <tbody>

                              <tr>
                                  <td>1</td><td>John Clark</td><td><a href="#">Business management</a></td> <td><span class="am-badge am-badge-success">+20</span></td>
                              </tr>
                              <tr>
                                  <td>1</td><td>John Clark</td><td><a href="#">Business management</a></td> <td><span class="am-badge am-badge-success">+20</span></td>
                              </tr>
                              <tr>
                                  <td>1</td><td>John Clark</td><td><a href="#">Business management</a></td> <td><span class="am-badge am-badge-success">+20</span></td>
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
  components: {
      'v-header': header,'v-menu':menu,'v-footer': footer
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
