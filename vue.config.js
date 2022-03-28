const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {      // 代理
      "/api": {
        target: process.env.VUE_APP_API,
        changeOrigin: true,   // 允许跨域
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
});
