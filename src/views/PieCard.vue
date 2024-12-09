<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-container>
        <SidebarMenu/>
        <el-container>
          <el-main  class="page-main">
            <div class="page-container">
              <!-- 第一部分：横栏 -->
              <el-row class="section header">
                <el-col>
                  <el-divider>画了就必须实现！</el-divider>
                </el-col>
              </el-row>

              <!-- 第二部分：卡片 -->
              <el-row class="section cards">
                <el-col :span="6">
                  <el-card class="card">
                    <div class="card-content">
                      <div class="card-text">
                        <el-statistic title="男人的饼" :value="268500">
                          <template #suffix>条</template>
                        </el-statistic>
                      </div>
                      <div class="card-icon">
                        <el-icon size="48">
                          <Burger/>
                        </el-icon>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card>
                    <div class="card-content">
                      <div class="card-text">
                        <el-statistic title="女人的饼" :value="268500">
                          <template #suffix>条</template>
                        </el-statistic>
                      </div>
                      <div class="card-icon">
                        <el-icon size="48">
                          <Burger/>
                        </el-icon>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>

              <!-- 第三部分：表格 -->
              <el-row>
                <el-col>
                  <el-timeline style="max-width: 600px">
                    <el-timeline-item timestamp="2024-01-10" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                      </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2024-01-09" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/3 20:46</p>
                      </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2024-01-08" placement="top">
                      <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/2 20:46</p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </el-col>
              </el-row>
            </div>
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
  name: 'PiePage',
  components: {
    TopBar,
    SidebarMenu
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
