## webpack
使用webpack 需要安装 webpack 和 webpack-cli 两个模块

```
yarn add webpack webpack-cli
npm i webpack webpack-cli
pnpm add webpack webpack-cli
```
以上命令 会初始化一个 package.json

在 webpack中，所有的文件都是一个模块

### 运行webpack
直接执行 webpack 命令
执行 npx webpack 命令
执行 node_modules 中bin下的 webpack.cmd

### 配置webpack
首先创建 一个 webpack.config.js 配置文件
该配置文件导出 配置模块，在webpack打包命令执行之后，该文件会被自动执行

```
module.exports = {
    //设置打包文件的入口
    entry:'./src/index.js',
    //配置webpack打包的模式 development 开发模式，production 生产模式
    mode:'development'
};
```

### 打包html文件
需要安装插件 html-webpack-plugin
安装方法 npm i html-webpack-plugin

插件在配置文件的 plugins属性中使用

```
plugins:[
        //清空打包之前的内容
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //打包的html模版
            template:'./public/index.html',
            minify:{
                //去掉 引号
                removeAttributeQuotes:true,
                // 打包成一行
                // collapseWhitespace:true
            },
            /*
            inject 引入主js的位置
            true 或者 head标签 表示放在head 标签里
             body 标签 表示放在body 标签里，最底部
            */ 
            inject:'body'
        })
    ]
```



