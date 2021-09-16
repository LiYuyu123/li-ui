# Li UI
1. 这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。
2. 预览地址:https://liyuyu123.github.io/li-ui-website/index.html#/
## 使用方法
### 安装
在项目中，使用终端执行以下命令
~~~
npm install lizijie-ui
~~~
或者
~~~
yarn add lizijie-ui
~~~
### 引入
~~~
import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "lizjie-ui";
//若发现样式不生效，可手动引入css
import "lizijie-ui/dist/lib/lizjie.css";
~~~
### 示例
~~~
<template>
//不要加div
  <Button>按钮</Button>
</template>
<script>
  import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "lizjie-ui";
  import "lizijie-ui/dist/lib/lizjie.css";
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog. openDialog}
  }
</script>
~~~
