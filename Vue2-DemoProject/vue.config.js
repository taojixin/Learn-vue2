module.exports = {
  // 关闭eslint 严格模式
  lintOnSave: false,
  // 代理 跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}