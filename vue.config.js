module.exports = {
  devServer: {
	  hot: true,
    liveReload: false,
    proxy: 'http://172.20.10.2:3000'
  },
  css: { extract: false },
  assetsDir: 'static',
  configureWebpack:{
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },


  chainWebpack: config => {
    config.module
    .rule('html')
    .test(/\.html$/)
    .use('html-loader')
    .loader('html-loader')
  }

  productionSourceMap: true, // NOTE: this is default

}
