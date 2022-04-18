module.exports = {

  publicPath: "./",

  //  构建时的输出目录

  outputDir: "dist",

  //  放置静态资源的目录

  assetsDir: "static",

  //  html 的输出路径

  indexPath: "index.html",

  //文件名哈希

  filenameHashing: true,




  //  是否使用带有浏览器内编译器的完整构建版本

  runtimeCompiler: false,

  productionSourceMap: false,
  // 关闭 eslint
  lintOnSave: false,
  // 代理跨域
  // devServer: {
  //   proxy: 'http://120.55.96.212:5000'
  // }

}