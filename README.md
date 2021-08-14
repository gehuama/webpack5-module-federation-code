# webpack5-module-federation-code
Webpack 5 增加了一个新的功能 "模块联邦"，它允许多个 webpack 构建一起工作。 从运行时的角度来看，多个构建的模块将表现得像一个巨大的连接模块图。 从开发者的角度来看，模块可以从指定的远程构建中导入，并以最小的限制来使用。https://webpack.docschina.org/concepts/module-federation/


# 步骤：
1. 创建项目
    mkdir team-a
    cd team-a
    npm init -y
    mkdir team-b
    cd team-b
    npm init -y
2. 安装依赖
    cd team-a
    cd team-b
    npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
    npm install is-array --save

The top-level-await experiment is not enabled 
top-level-await 没有被启用