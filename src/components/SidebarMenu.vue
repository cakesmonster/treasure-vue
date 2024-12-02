<!-- src/components/AppSidebar.vue -->
<template>
  <el-menu
      class="el-menu-vertical-demo"
      router
      default-active="1"
      background-color="#f4f4f4"
      text-color="#333"
      active-text-color="#409eff"
  >
    <el-menu-item index="/">
      <template #title>
        <i class="el-icon-house"></i>
        <span>Home</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/profile">
      <template #title>
        <i class="el-icon-user"></i>
        <span>Profile</span>
      </template>
    </el-menu-item>
    <!-- 你可以添加更多菜单项 -->
  </el-menu>
</template>

<script>
export default {
  name: "AppSidebar" // 使用多词名称
}
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 200px;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>
