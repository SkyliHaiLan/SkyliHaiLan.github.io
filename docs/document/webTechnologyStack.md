# 技术栈
Summary

创建日期：2019-09-18

初稿作者：Sky

目的：
根据此文档可以了解目前前端行业的技术栈

目标读者：
	前端开发人员
	
## 前端定位
前端的定位关乎到你需要吸收什么样的知识和技能，决定在技术世界里你对什么需要格外敏感。如果你认为前端仅仅停留在切页面，实现交互和视觉的要求，那你对前端的认识还停留在初级阶段。
前端的终极目标其实就是创造用户体验，提升用户体验，以用户体验为中心。不管你是从交互设计上下手，还是从性能优化出发，或者改进工作流提升工作流效率，
最终都是为了创造和提升用户体验，最终都要体现到用户体验这一点上来。

## 前端技术栈
|基础| 框架 |中间语音| UI组件库 | 代码质量检测|包管理|模块打包器|脚手架|脚本引擎|转码器|测试框架|服务器|
|:-----:|:----:| :----: | :----: | :----: | :----: | :----: |:----: |:----: |:----: |:----: |:----: |:----: 
|HTML| JQuery | TypeScript | Bootstrap|ESLint|npm|webpack|DvaJS|NodeJS|Babel|Jest|nginx
| CSS | react | JSX |Ant-Design|Sonar|yarn| |UmiJS| | | | |
| JavaScript | vue |  |Element| | | | NuxtJS | | | | |
|  | angular |  |Material-UI| | | | | | | | |


## Web三剑客
HTML、CSS、JavaScript是入门的必修课，因此此三剑客是必须要学会，而且也要精通

* HTML (HyperText Markup Language)：超文本标记语言，是一种用于创建网页的标准标记语言，通过用HTML可以建立自己的 WEB 站点
* CSS (Cascading Style Sheets)：层叠样式表,CSS具有对网页的布局、颜色、背景、宽度、高度、字体进行控制，让网页按您的美工设计布局的更加美观漂亮。
* JavaScript：JavaScript是世界上最流行的脚本语言，因为你在电脑、手机、平板上浏览的所有的网页，以及无数基于HTML5的手机App，交互逻辑都是由JavaScript驱动的。
简单地说，JavaScript是一种运行在浏览器中的解释型的编程语言。在Web世界里，只有JavaScript能跨平台、跨浏览器驱动网页，与用户交互。

简单来说，HTML 是用于搭建结构，CSS用于美化页面，JavaScript用于实现动态的效果

## 框架
* jquery：jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单
    *曾经也是现在依然最流行的web前端js库，可是现在无论是国内还是国外他的使用率正在渐渐被其他的js库所代替，随着浏览器厂商对HTML5规范统一遵循以及ECMA6在浏览器端的实现，jquery的使用率将会越来越低
* react：用于构建用户界面的 JavaScript 框架
    * 在性能方面，由于运用了Virtual Dom技术，，当页面初次加载的时候会产生一颗dom树，内存中会产生一颗render树，当数据发生更改的时候，会将更改的内容和存有的render树进行对比，找出最优的算法，
    然后更改render树，最后重新生成页面的dom树，有了虚拟dom，前端的性能提高了很多。
    * react更关注UI的组件化，和数据的单向更新，将view层分成各个独立的组件，降低耦合度，组件化使得组件间可组合，可重用，可维护，从而大大提高开发效率
    * react的使用基本上是大型项目的首选，组件化和灵活性是大型项目的条件
* vue:是一套构建用户界面的渐进式框架,与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合
    * API设计上简单，语法简单，学习成本低
    * 性能好，容易优化 
    * 简单的语法及项目搭建，更快的渲染速度和更小的体积
* angular:angular是一个 JavaScript 框架。它可通过 script 标签添加到 HTML 页面,angularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。
    * angular性能存在很大的缺陷，当项目对性能要求不高的时候，可以使用angular
    * angular也是比较完善的前端框架，不像react,react是单一的框架需要结合其他框架一起使用，angular它有自己的服务，模版，模块化，路由，过滤器，依赖注入等所有功能。

## 中间语音
* TypeScript:是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集,扩展了JavaScript的语法，所以任何现有的JavaScript程序可以不加改变的在TypeScript下工作。TypeScript是为大型应用的开发而设计，而编译它时产生 JavaScript 以确保兼容性。
* JSX: 是一种JavaScript的语法扩展，运用于React架构中,React 使用 JSX 来替代常规的 JavaScript

---
JavaScript 与 TypeScript 的区别:
  - TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，
  TypeScript 通过类型注解提供编译时的静态类型检查。
  - TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译
---

## UI组件库
* Bootstrap：Bootstrap是一组用于网站和网络应用程序开发的开源前端UI框架，包括HTML、CSS及JavaScript的框架，
提供字体排印、窗体、按钮、导航及其他各种组件及Javascript扩展，旨在使动态网页和Web应用的开发更加容易。
* Ant-Design：antd 是基于 Ant Design 设计体系的 UI 组件库，主要用于研发企业级中后台产品,提炼自企业级中后台产品的交互语言和视觉风格
* Element：Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库【简单来说就是一个网站快速成型工具】
* Material-UI:它是React组件，实现了谷歌Material Design设计规范。世界上最流行的React界面框架。里面内置高级版主题。模版样式也很丰富

## 代码质量检测
* ESLint:提供一个插件化的javascript代码检测工具,可以检查JavaScript的语法错误，提示潜在的bug，可以有效提高代码质量，
维持前端团队高度一致的编码风格。ESLint不但提供一些默认的规则，也提供用户自定义规则来约束所写的JavaScript代码
* Sonar：是一个用于代码质量管理的开源平台，用于管理Java源代码的质量也可以扫描Javascript代码。通过插件机制，Sonar 可以集成不同的测试工具，代码分析工具，以及持续集成工具

## 包管理
* npm（node package manager）：npm是随同NodeJS一起安装的包管理工具，npm 可以让 JavaScript 开发者在共享代码、复用代码以及更新共享的代码上更加方便
* yarn：yarn 对你的代码来说是一个包管理器， 你可以通过它使用全世界开发者的代码， 或者分享自己的代码。Yarn 做这些快捷、安全、可靠，可以理解它是npm的替代品

备注：npm 和bower 的最大区别，就是 npm 支持嵌套地依赖管理，而 bower只能支持扁平的依赖（嵌套的依赖，由程序员自己解决),现在不建议使用bower了，官网也不在维护

## 模块打包器
webpack：webpack可以看做是模块打包器：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言，并将其转换和打包为合适的格式供浏览器使用

## 脚手架
* DvaJS: 是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。
dva = React-Router[路由](https://github.com/ReactTraining/react-router/tree/v2.8.1) + Redux[架构](https://github.com/reduxjs/redux) + Redux-saga[异步操作](https://github.com/redux-saga/redux-saga)

* UmiJS:中文可发音为乌米，是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持类 next.js 的约定式路由，以及各种进阶的路由功能，
并以此进行功能扩展，比如支持路由级的按需加载。然后配以完善的插件体系，
覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，目前内外部加起来已有 50+ 的插件。

* NuxtJS:Nuxt.js 是一个基于 Vue.js 的通用应用框架,作为框架，Nuxt.js 为 客户端/服务端 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。

## 脚本引擎
nodeJS:是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
简单的说 Node.js 就是运行在服务端的 JavaScript

## 转码器
Babel是一个 JavaScript 编译器,也可以理解为一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码

## 测试框架
Jest：是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，
是一款几乎零配置的测试框架。并且它对同样是 Facebook 的开源前端框架 React 的测试十分友好

## 服务器
nginx是一款是由俄罗斯的程序设计师Igor Sysoev所开发高性能的 Web和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器

::: tip
后续会持续更新
:::
