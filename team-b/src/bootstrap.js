let Dropdown = await import("./dropdown")
let Button = await import("./button")
import isArray from "is-array";
console.log(Dropdown.default, Button.default, isArray.name)

// webpack中配置 支持顶级 await-import 即上面的写法,否则只能如下写法
// topLevelAwait:true
    // (function async() {
    //     let Dropdown = await import("./dropdown")
    //     let Button = await import("./button")
    //     import isArray from "is-array";
    //     console.log(Dropdown.default, Button.default, isArray.name)
    // })()