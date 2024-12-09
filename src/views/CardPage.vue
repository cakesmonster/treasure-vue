<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-container>
        <SidebarMenu/>
        <el-container>
          <el-main>
            Card
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'; // 确保路径正确
import SidebarMenu from '../components/SidebarMenu.vue'; // 确保路径正确

export default {
  name: 'CardPage',
  components: {
    TopBar,
    SidebarMenu
  },
  data() {
    return {
      tableData: [
        {person: '张三', date: '2023-10-01', completed: '否'},
        {person: '李四', date: '2023-10-02', completed: '是'},
        // 其他数据条目...
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log('编辑', index, row);
    },
    handleDelete(index, row) {
      console.log('删除', index, row);
    },
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

.page-main {
  margin-bottom: 50px;
}



.section {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
}

.card{
  margin-right: 20px;
}

.card-content {
  display: flex;
  align-items: center;
}

.card-text {
  margin-right: 10px;
}

.card-icon {
  margin-left: 20px;
  flex: 1;
}

.header .el-divider {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
