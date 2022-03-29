<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <el-menu background-color="rgb(50,64,87)" text-color="#fff" :router="true">
          <el-menu-item>
              <span class="title">ElementUi管理后台</span>
          </el-menu-item>
          <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span class="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单文章管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
              <el-menu-item index="2-2">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
            <!-- 二级路由出口组件 -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
<style scoped>
.aside{
  height: 100vh;
  background:rgb(50,64,87);
}
.home{
  text-align:left;
}
.header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:#eee;
}
.header img{
  width: 36px;
  height: 36px;
}
</style>
