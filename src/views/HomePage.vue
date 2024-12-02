<!-- Home.vue -->
<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AppSidebar/>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'; // 确保路径正确
import AppSidebar from '../components/AppSidebar.vue'; // 确保路径正确

export default {
  name: 'HomePage',
  components: {
    TopBar,
    AppSidebar
  }
}
</script>

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
  background-color: #f4f4f4;
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
