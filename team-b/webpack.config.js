let HtmlWebpackPlugin = require("html-webpack-plugin");
const { experiments } = require("webpack");
// 引入模块联邦插件
let ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports = {
    mode: "development",
    devtool: false,
    // team-a port 3000 host
    // team-b port 8000 container(容器) remote
    devServer:{
        port:8000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "teamB", // 应用的唯一标识
            filename: "remoteEntry.js", // 生产的文件名
            library: {type: "var", name: "varTeamB"}, // team-b 加载team-b的时候，加载的结果 其实是得到一个全局变量 变量名为varTeamB
            exposes:{ //  作为容器，需要向外暴露的模块或者说组件 key就是别名 值就是本地引入的路径
                "./dropdown": "./src/dropdown.js",
                "./button": "./src/button.js",
            },
            shared:["is-array"]
        }),
    ],
    experiments: {
        // 支持顶级 await-import
        topLevelAwait:true
    }

}