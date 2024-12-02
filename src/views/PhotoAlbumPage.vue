<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-container>
        <SidebarMenu/>
        <el-container>
          <el-main>Photo</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-header {
  margin: 0;
  padding: 0;
}

.el-aside {
  margin: 0;
  padding: 0;
}

.el-main {
  padding: 20px;
  overflow: auto;
}

.el-footer {
  text-align: center;
  line-height: 50px;
  height: 50px;
}
</style>

<script>

import SidebarMenu from "@/components/SidebarMenu.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: 'PhotoAlbumPage',
  components: {
    TopBar,
    SidebarMenu
  }
}
</script>
