/**
 * author       : liuliyuan
 * createTime   : 2017/11/20 12:10
 * description  :
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
       config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
       config = rewireLess.withLoaderOptions({
             modifyVars: { "@primary-color": "#108ee9" },
       })(config, env);
    return config;
};