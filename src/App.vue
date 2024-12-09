<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

a {
  color: #409eff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.25;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  font-family: inherit;
}

/* 自定义Element Plus的一些样式 */
.el-button {
  border-radius: 4px;
}

.el-input {
  border-radius: 4px;
  border-color: #dcdfe6;
}

/* 自定义全局的颜色变量 */
:root {
  --primary-color: #409eff;
  --secondary-color: #67c23a;
  --success-color: #67c23a;
  --warning-color: #e6a23c;
  --danger-color: #f56c6c;
  --info-color: #909399;
}

body {
  background-color: #ffffff;
  color: var(--primary-color);
}

.el-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 修正Element Plus的默认表单输入高度 */
.el-form-item {
  margin-bottom: 20px;
}

.el-input {
  height: 40px;
}

/* 调整页面布局和间距 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.column {
  flex: 1;
  padding: 10px;
}
</style>
