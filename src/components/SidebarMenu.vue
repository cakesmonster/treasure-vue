<template>
  <el-menu
      default-active="1"
      class="custom-el-menu"
  >
    <el-menu-item index="1" @click="toPhoto">
      <el-icon>
        <Location/>
      </el-icon>
      <span>相册</span>
    </el-menu-item>
    <el-menu-item index="2" @click="toCard">
      <el-icon>
        <IconMenu/>
      </el-icon>
      <span>画饼</span>
    </el-menu-item>
    <el-menu-item index="3" @click="toPie">
      <el-icon>
        <Setting/>
      </el-icon>
      <span>卡片</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {Location, Menu as IconMenu, Setting} from '@element-plus/icons-vue';

export default {
  name: "SidebarMenu", // 使用多词名称
  methods: {
    toPhoto() {
      this.$router.push("/photo");
    },

    toCard() {
      this.$router.push("/card");
    },

    toPie() {
      this.$router.push("/pie");
    }

  },
  components: {
    Location,
    IconMenu,
    Setting,
  },
}
</script>

<style scoped>
.custom-el-menu {
  width: 200px;
  align-items: center;
}
</style>
