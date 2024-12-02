<template>
  <div class="topbar">
    <div class="topbar-left">
      <router-link to="/" class="home-link">Treasure</router-link>
    </div>
    <div class="topbar-right">
      <el-dropdown>
        <span class="el-dropdown-link custom-dropdown-link">
          <el-avatar
              size="40"
              src="https://avatars.githubusercontent.com/u/42994120?v=4&size=64"
              shape="circle"
          ></el-avatar>
          <span class="username">cakemonster</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goToProfile">空间首页</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    goToProfile() {
      this.$router.push('/profile');
    },
    logout() {
      console.log('Logout initiated');
    }
  }
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 60px;
  padding: 0 40px;
  background-color: #409EFF;
  color: #fff;
}

.home-link {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.topbar-right {
  display: flex;
  align-items: center;
}

.custom-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  /* 移除边框 */
  border: none;
  outline: none;
}

.username {
  margin-left: 10px;
  color: #fff; /* 设置用户名为白色 */
  line-height: 40px;
}

.custom-dropdown-link:focus {
  outline: none; /* 移除聚焦状态下的默认边框 */
}

.custom-dropdown-link:hover {
  text-decoration: none;
}
</style>
