# learnVue

## 介绍

Vue.js源码分析，记录了个人学习Vue.js源码的过程中的一些心得以及收获。以及对于Vue框架，周边库的一些个人见解。

在学习的过程中我为Vue.js（2.3.0）、Vuex（2.4.0）、Vue-router（3.0.1）加上了注释，分别在文件夹[vue-src](./vue-src)、[vuex-src](./vuex-src)以及[vue-router-src](./vue-router-src)中，希望可以帮助有需要的同学更好地学习理解Vue.js及周边库的源码。

感谢[尤大](https://github.com/yyx990803)提高生产力。

本项目希望对Vue.js做更进一步的探索与学习，Vue.js基础内容请参考Vue.js官网，[https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)。
可能会有理解存在偏差的地方，欢迎提issue指出，共同学习，共同进步。

---

## 目录

### 源码相关

[Vue.js响应式原理](./docs/响应式原理.MarkDown)

[Vue.js依赖收集](./docs/依赖收集.MarkDown)

[从Vue.js源码角度再看数据绑定](./docs/从源码角度再看数据绑定.MarkDown)

[Vue.js事件机制](./docs/Vue事件机制.MarkDown)

[VNode节点(Vue.js实现)](./docs/VNode节点.MarkDown)

[Virtual DOM与diff(Vue.js实现)](./docs/VirtualDOM与diff(Vue实现).MarkDown)

[聊聊Vue.js的template编译](./docs/聊聊Vue的template编译.MarkDown)

[Vue.js异步更新DOM策略及nextTick](./docs/Vue.js异步更新DOM策略及nextTick.MarkDown)

[从template到DOM（Vue.js源码角度看内部运行机制）](./docs/从template到DOM(Vue.js源码角度看内部运行机制).MarkDown)

[Vuex源码解析](./docs/Vuex源码解析.MarkDown)

[聊聊keep-alive组件的使用及其实现原理](./docs/聊聊keep-alive组件的使用及其实现原理.MarkDown)

### 随笔杂谈

[Vue组件间通信](./docs/Vue组件间通信.MarkDown)

[说说element组件库broadcast与dispatch](./docs/说说element组件库broadcast与dispatch.MarkDown)

---

## 对于新手同学

由于以上内容都是针对 Vue.js 源码进行讲解了，可能有一些不太熟悉源码的同学读起来感觉晦涩难懂。

笔者撰写的[《剖析 Vue.js 内部运行机制》](https://juejin.im/book/5a36661851882538e2259c0f)或许可以帮到你。

## 获取更多前端领域优质技术博文

扫码或微信搜索“前端技术优选”，长期分享前端及Node.js领域优质技术博文，欢迎关注。

![前端技术优选](./images/youxuan2.jpg)

## 与更多技术同行交流

![加群](./images/youxuan.png)

## 关于作者

作者： 染陌

Email：answershuto@gmail.com

Github: [https://github.com/answershuto](https://github.com/answershuto)

知乎：[https://www.zhihu.com/people/cao-yang-49/activities](https://www.zhihu.com/people/cao-yang-49/activities)

掘金：[https://juejin.im/user/58f87ae844d9040069ca7507](https://juejin.im/user/58f87ae844d9040069ca7507)

## 目录

├── build --------------------------------- 构建相关的文件
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放使用Vue开发的的例子
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json -------------------------- 项目依赖
├── test ---------------------------------- 包含所有测试文件
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├──platforms --------------------------- 包含平台相关的代码
│   │   ├──web -----------------------------  包含了不同构建的包的入口文件
│   │   |   ├──entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意
│   │   |   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染
│   ├── core ------------------------------ 存放通用的，平台无关的代码
│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 包含抽象出来的通用组件
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared ---------------------------- 包含整个代码库通用的代码

链接：https://juejin.im/post/5ab07a63f265da2389258b12
