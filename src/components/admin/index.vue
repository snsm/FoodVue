<template>
  <div class="index">
      <v-header></v-header>
      <div class="am-cf admin-main">
          <!-- sidebar start -->
          <v-menu></v-menu>
          <!-- sidebar end -->

          <!-- content start -->
          <v-main></v-main>
          <!-- content end -->

      </div>
  </div>
</template>

<script>
import header from './layouts/header'
import menu from './layouts/menu'
import main from './layouts/main'

export default {
  name: 'index',
  components: {
      'v-header': header,'v-menu':menu,'v-main':main
  },
}
</script>

<style>
  .index{
    height:100%;
  }
  @import '../../../static/amaze/css/amazeui.css';
  @import '../../../static/amaze/css/admin.css';
</style>
