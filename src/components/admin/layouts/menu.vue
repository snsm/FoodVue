<template>
  <div class="menu">
    <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
      <div class="am-offcanvas-bar admin-offcanvas-bar">
        <ul class="am-list admin-sidebar-list">
          <li><router-link :to="{path:'/index'}"><span class="am-icon-home"></span> 首页</router-link></li>
          <li class="admin-parent">
            <a class="am-cf" data-am-collapse="{target: '#collapse-nav'}"><span class="am-icon-file"></span> 页面模块 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
            <ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
              <li><a href="admin-user.html" class="am-cf"><span class="am-icon-check"></span> 个人资料<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>
              <li><a href="admin-help.html"><span class="am-icon-puzzle-piece"></span> 帮助页</a></li>
              <li><router-link :to="{ path:'sort-list'}"><span class="am-icon-th"></span> 类别管理<span class="am-badge am-badge-secondary am-margin-right am-fr">24</span></router-link></li>
              <li><a href="admin-log.html"><span class="am-icon-calendar"></span> 系统日志</a></li>
              <li><a href="admin-404.html"><span class="am-icon-bug"></span> 404</a></li>
            </ul>
          </li>
          <li><a href="admin-table.html"><span class="am-icon-table"></span> 表格</a></li>
          <li><a href="admin-form.html"><span class="am-icon-pencil-square-o"></span> 表单</a></li>
          <li><router-link :to="{ path: '/' }"><span class="am-icon-sign-out"></span> 注销</router-link></li>
        </ul>
        <div class="am-panel"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
}
</script>

<style>

</style>
