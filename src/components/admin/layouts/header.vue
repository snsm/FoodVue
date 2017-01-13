<template>
  <div class="header">
    <header class="am-topbar am-topbar-inverse admin-header">
      <div class="am-topbar-brand">
        <strong>Amaze UI</strong> <small>后台管理模板</small>
      </div>

      <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
          <li class="am-dropdown" data-am-dropdown="">
            <a class="am-dropdown-toggle" data-am-dropdown-toggle="" href="javascript:;">
              <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
            </a>
            <ul class="am-dropdown-content">
              <li><router-link :to="{ path: '/'}"><span class="am-icon-power-off"></span> 退出</router-link></li>
            </ul>
          </li>
          <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style>

</style>
