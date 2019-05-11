var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  // common
  webpackConfig.plugins.some(function(plugin, i){
    if(plugin instanceof webpack.optimize.CommonsChunkPlugin || plugin.constructor.name === 'CommonsChunkPlugin') {
      webpackConfig.plugins.splice(i, 1);
      return true;
    }
  });

  // babel 的 plugins 添加 transform-runtime , 为支持Generator函数
  webpackConfig.babel.plugins.push("transform-runtime");

  // 返回 webpack 配置对象
  return webpackConfig;
};