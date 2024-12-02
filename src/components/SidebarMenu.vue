<template>
  <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Location/>
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">
        <template #title>
          <el-icon>
            <Location/>
          </el-icon>
          <span>item four</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <IconMenu/>
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Setting/>
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {Location, Menu as IconMenu, Setting} from '@element-plus/icons-vue';

export default {
  name: "SidebarMenu", // 使用多词名称
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    Location,
    IconMenu,
    Setting,
  },
}
</script>

<style scoped>
.el-menu {
  margin: 0;
  padding: 0;
}
</style>
