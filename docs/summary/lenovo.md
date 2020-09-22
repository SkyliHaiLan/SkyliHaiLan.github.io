# 联想工作总结

> 2016-07-06入职的公司，来公司快四个年头了。从刚毕业的小毛驴，到现在也成长一位老油条了😂。联想是我在公司入职开始的第一个项目，在项目中的驱动下，个人无论在学习，技能上都得到了很大的提升。下面针对联想做过的项目，进行了如下的总结。

<a name="VcZIS"></a>
# Summary
| Short Name | Full Name | Role |
| --- | :---: | ---: |
| PCR | Product change Request | Front-End / Back-End |
| PPM | PCSD Portfolio&Project Management | Front-End |
| ODP | Online Dialogue Product | Front-End |
| OSB | One System BOM | Front-End |



<a name="o1cFe"></a>
# 项目介绍


<a name="WBmFv"></a>
## PCR
> PCR是一个产品需求变更申请的控制流程，当某个产品需要变更时，user/admin可以申请创建一个PCR并进行流程控制。PCR主要存放的是变更请求和受影响的项目



<a name="421pM"></a>
### 技术框架
<a name="R9YSD"></a>
##### 前端

- 使用 **jquery**_ 实现代码编程_
- 基于 [AdminLTE](https://adminlte.io/themes/AdminLTE/index2.html) 搭建的模板
- UI框架选用的是 [Bootstrap](https://v3.bootcss.com/)
- 基于web的文本编辑器，使用的是 [CKEditor](https://ckeditor.com/)
- [jsTree](https://www.jstree.com.cn/) 是一个jquery 插件, 提供交互式树.它是完全免费的,开源的，并根据MIT许可进行分发。jsTree易于扩展，可定义和配置，它支持HTML和JSON数据源以及AJAX加载。
- 使用 [Select2.js](https://select2.org/) 下拉插件，它能让丑陋的、很长的select选择框变的更好看、更方便，支持搜索，远程数据集，以及无限滚动的结果
- 使用 [Datatables](https://datatables.net/) 是一款基于jQuery开源表格插件，有丰富的，即时表格数据过滤，自动处理列宽度，数据排序以及数据类型自动检测等
- 使用 [Font-Awesome](http://www.fontawesome.com.cn/) 字体提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用CSS的样式
- [jBox](http://stephanwagner.me/jBox) 是一款基于 jQuery 的多功能对话框插件，可鼠标拖动对话框、改变对话框大小等



> 不总结不知道，总结之后吓一跳，PCR前端既然使用了那么多的插件，其中还有一些插件就不一一例取了，比如  _icheck 、ionicons等_



<a name="mGOpC"></a>
##### 后端

- 整体框架使用[Spring MVC](https://spring.io/projects/spring-framework) + [Spring Security](https://spring.io/projects/spring-security)
- 数据持久层框架使用[Mybatis](https://mybatis.org/mybatis-3/) + [Mybatis generator](http://mybatis.org/generator/)
- 数据库使用[MySql](https://www.mysql.com/)
- 工作流程使用[Activiti](https://www.activiti.org/)/[Flowable](https://flowable.com/open-source/)工作流,目前使用较多是Flowable,Activiti比较少用
- 使用[LDAP](http://www.ldapadmin.org/)，LDAP（Light Directory Access Portocol），它是基于X.500标准的轻量级目录访问协议，

目录是一个为查询、浏览和搜索而优化的数据库，它成树状结构组织数据，类似文件目录一样。(联想域账号       使用)

- 使用[Java Email](https://www.oracle.com/java/technologies/javamail.html)进行邮件发放
- 使用[Quartz](https://www.oracle.com/java/technologies/javamail.html)定时执行任务，如邮件，报表生成，数据集成同步
- 单点登陆使用[OneLogin Java SAML](https://github.com/onelogin/java-saml)
> 后端我这边开发的比较少，主要是PCR维护，S&A的维护以及WorkitemTpl 功能的开发<br />



<a name="R6StK"></a>
### 功能介绍
> 我这边做的功能不是特别多，中途有过离项，后期虽然回来了，但是整体的项目已经结束，因此后期也只是做了些 CR功能的开发

<a name="akFxB"></a>
##### 主要负责的功能：

- PCR功能的维护
   - 实现PCR的增删改
   - Product Hierarchy 树维护
   - 上传附件
   - 留言板等功能
- S&A维护
   - 用户维护
   - 组维护
   - 权限维护
   - 用户和组之间的维护
   - 组和权限之间的维护
   - 用户和权限之间维护
- WorkitemTpl维护
   - Work Item 主要是一个配置模块，在PCR流程中，用于Assessment阶段，OTM leader将收到一个评估审查任务时进入这个阶段在任务
   - 页面中就要用到Work item来分配任务
- Home page
   - 主页的详细介绍,当用户在登录界面，登录进来的就是这个主界面，可以查看自己的任务，主要包括三个，Activity task、Vote task和workitem task
   - PCR Search
   - PCR New Search
- New SBB Message
   - Product Category列表
   - SBB Category列表
   - Target SKU/Requestor Search
   - Message Board维护
- PCR Export Excel导出
   - 通过搜索报表，导出报表统计，有饼状图、柱状图和折线图展示PCR的维护数据
- SSO单点登录

<br />
<a name="DyN6m"></a>
### 文档梳理
> 项目很多需求方面，除了录频，还有就文档提供，录频太长了，我这边就准备文档，查看文档请下载百度网盘



<a name="zQKlc"></a>
##### PCR Blueprint
链接:https://pan.baidu.com/s/1WnsfqCUUGOdrDtJnH1_R9A  密码:r6ol<br />

<a name="9mJIQ"></a>
##### 表结构设计模式
链接:https://pan.baidu.com/s/1lmOE6ZBA1H3sE_gNzqoj8w  密码:j2xd<br />

<a name="KRGNP"></a>
##### PCR Process
链接:https://pan.baidu.com/s/1pnaWuAX0CHpMplZseDapNg  密码:2hdk<br />

<a name="eeuyj"></a>
### 心得
此项目的架构比较旧，前后端是不分离项目，所以调试起来特别的麻烦。每次做修改，得页面进行刷新，这是其次，主要刷新后还得等待时间比较久，心累呀。。。。。

---

<a name="zR7Zc"></a>
## PPM
> PPM系统是负责管理Porfolio和项目信息产品研发系统。该系统后台技术主要是基于Spring Boot的SSH框架开发，前端技术主要是使用基于DVA的React.js，前端组件库使用的是Ant Design组件库，使用Mysql作为数据库；系统源码是使用GIt仓库负责版本管理，系统文件系统是使用Amazon S3文件系统管理系统中文件，系统中流程任务使用基于Flowable工作流的微服务。

<br />
<a name="Api6x"></a>
### 技术框架
<a name="kmBJI"></a>
##### 前端

- 整个项目的框架使用的是 [DVA](https://dvajs.com/) Alibaba工程师开源的,基于 redux、redux-saga 和 react-router 的轻量级前端框架,项目的使用的版本是"1.2X"
- [Ant-desgin](http://ant.design) Alibaba的一套企业级的 UI 设计语言和 React 实现，可以dva结合一起使用
- [Highcharts](https://www.highcharts.com/)   是一个用纯 JavaScript 编写的一个图表库,支持20种图表
- [FileSaver](https://github.com/eligrey/FileSaver.js/) 是一款基于 HTML5 完成文件保存的插件,它可以帮我们直接从网页中导出多种格式文件
- [Quill](https://quilljs.com/) 是一款强大的现代富文本编辑器插件
- Iconfont 阿里妈妈MUX倾力打造的矢量图标管理
- [Core](https://github.com/zloirock/core-js) 标准库,它提供了 ES5、ES6 的 polyfills
- [ag-grid](https://www.ag-grid.com/)  是一个企业级的 JavaScript 数据网格。 ag-Grid 的目的是提供可用于构建企业级应用的表格
- [react-helmet](https://github.com/nfl/react-helmet) 动态修改页面title
<a name="brrh5"></a>
##### 后端

- 采用的是MyBatis/Spring Boot/Spring Cloud
- 采用S3存储方式
- 前后端采用的是Swagger-UI的联调测试方式。
<a name="x4S1e"></a>
#### <br />
<a name="zyc57"></a>
### 文档梳理


<a name="3qSdy"></a>
##### 需求文档
链接:https://pan.baidu.com/s/1TGzsKBo5PC_X5H4wq36iQQ  密码:cj2q<br />

<a name="vS6xm"></a>
##### 开发指南
链接:https://pan.baidu.com/s/1qdLgeVeXYzsYd5SUpCnGxA  密码:3xeg<br />

<a name="xJVDg"></a>
### 心得
PPM项目是我的第一个纯前端项目，用的前端技术也是市面上的潮流，当时做这个项目的时，刚学习react没几天就拉去搞，边做边学，不懂又没人问，只能埋头查资料问群，😂蛮傻的。但是也是那段时间，让我对前端有了很大的认识，体会到了前端技术的强大，前后端分离，高性能，灵活性强，代码逻辑简单。跑起项目来特6，边写边调试不担心卡。。。。<br />


---

<a name="y4HAW"></a>
## ODP
> ODP系统是建立一个在线对话工具，帮助PG用户更好地交流和参与quart对话会话。支持PG团队更好地管理工具中的问题和答案。提高会话的交互性和灵活性。该系统提高在线对话工具的灵活性和效率，进行问答管理、能够定义会议时间和出席的机会过程。建立区分不同类别的Q&A的能力、创建的能力，以给予喜欢和子弹屏幕的过程中启用多种语言(中文和英文)作为选项



<a name="4EfcG"></a>
### 技术框架
> 选取的框架和ppm的框架差不多

前端：dva/antd/echarts<br />后端：采用的是MyBatis/Spring Boot/Spring Cloud主流开发架构, MySQL5.7+JDK1.8+Linux的环境开发<br />

<a name="ehUzZ"></a>
### 模块

- 权限管控，ODP系统有独立的权限控制机制。
- 用户可以发起会议，用户可以在参与会议的过程中以论坛的方式，提出问题。
- 用户能实时的看到自己需要参与的会议和消息提醒，以及当前在线人数。
- 用户可以看到需要自己解答的问题，和自己的提出的问题，还有自己所在会议其他用户提出的所有问题信息。



<a name="SO6qc"></a>
### 文档梳理
<a name="Qr0uT"></a>
##### ODP Blueprint
链接:https://pan.baidu.com/s/1STmmWvo8pVH2CI_qi3iLKg  密码:hymm
<a name="rHR8X"></a>
##### 部署教程
链接:https://pan.baidu.com/s/1hNtOACRM-yenp642oIvsKg  密码:3fig<br />

<a name="tkDqh"></a>
### 心得
ODP项目是我在做PPM的时候，PPM一期结尾一个项目。虽然项目周期不长，但是这个项目给我带来了很大的收获，巩固了PPM一期所用的技术点，弥补了PPM开发时设计上的漏洞以及培训新人所带来的成长。

---

<a name="GAAoL"></a>
## OSB
> OSB系统是支持PLM中产品BOM的早期开发，如产品MRD, CBB数据，系统BOM等。建立BOM对象之间的数据关系。将Confluence、PDS、Diamond、EC GO、Smart Worksheet tools的功能和流程整合为一个统一的OSB设施，以提高效率



<a name="bRbFf"></a>
### 技术框架


<a name="Abdkc"></a>
##### 前端
> OSB用的UI库是一样的，采用的也是antd，但是选取的脚手架是umijs

- [UMI](https://umijs.org/) 插件化的企业级前端应用框架
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) 实现列表拖拽



<a name="5CILy"></a>
### Gardget的使用


<a name="9ccNb"></a>
##### 参考文档
[https://www.yuque.com/docs/share/693364ac-227b-48dc-81f9-7d1e13954a8d?#](https://www.yuque.com/docs/share/693364ac-227b-48dc-81f9-7d1e13954a8d?#)（密码：wv2q） 《Gadget开发》<br />

<a name="KsZ0v"></a>
### OSB微前端集成
> OSB框架使用的是umijs，内部的功能是多个单页面集成，比如parts，ecrequest，cto,s&a,dmf等



<a name="pHjUf"></a>
##### 流程

1. 完成应用的开始，部署到云平台(Group应用)
1. 新建group 入口文件（group.js）

    ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1002886/1594113549394-a068e373-7b1c-4aa1-a755-5d0dd49939b5.png#align=left&display=inline&height=179&margin=%5Bobject%20Object%5D&name=image.png&originHeight=358&originWidth=832&size=63004&status=done&style=none&width=416)

3. 动态加载云平台的group manager 的gadget

    ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1002886/1594113597018-e74c8a37-46d7-46d2-a804-0f9d43a2a7ac.png#align=left&display=inline&height=290&margin=%5Bobject%20Object%5D&name=image.png&originHeight=580&originWidth=832&size=144406&status=done&style=none&width=416)<br />这样的话自己的项目就可以使用了。但是自己框架使用前提必须依赖与云平台<br />


---

<a name="BBE1w"></a>
## 技术感悟
> PCR项目是前后端不分离，刚开始接触的时候，由于没经验，前后端都做，因此并不觉得啥，自从在PPM开始之后，接触一段时间之后，觉得分离真好，互不影响，而且性能也不错



<a name="zX5kt"></a>
### 什么是前后端分离？
> **我们将基于B/S架构的WEB开发分为三层：表现层、业务层、持久层。那么前后端分离其实就是将表现层单独工程化的实践方法。**

单独工程化表现在以下几个方面：

- 开发阶段：在node或其他平台开发独立工程，进行调试以及打包；
- 部署阶段：以静态页面的形式部署在静态文件服务器（Nginx、Apache）或tomcat等web容器
- 运行阶段：客户端（浏览器）独自完成画面渲染，所需的数据则通过REST与后台交互



<a name="gtTaf"></a>
### 前后端分离的优缺点
**优点：**

- 进一步的关注点分离<br />在不分离的时代，前端没有形成独立的关注点，它在很长时间都是后台的“附属品”。当然，也有专门的技术领域去探索它，但绝对没有今天这样技术大发展的繁荣的景象。<br />
- 表现层解耦<br />分离后，表现层与后台松耦合，以数据接口对接，那么在接口不变的前提下，任何一层的更换都没有影响，并且可以轻松的实现多端化，同一套后台，不同终端采用不同的表现层；同时，这种解耦也会使系统具有更好的扩展性。<br />
- 更专业更高效的团队<br />前后端分离分工明确，对技术人员要求技术更专注，开发效率更高，技术积累更好。<br />

**缺点：**

- 复杂度增加 对于不太会扩展的小项目，比如个人博客、公司网站等等，如果实施前后端分离的话，有点小题大做了，还是传统一点比较好。<br />
- SEO<br />如果是开发单页面应用，有一个绝对无法避免的问题，就是搜索引擎优化，可以参见SPR和SSR。



<a name="H2VXS"></a>
## 项目经验总结

1. 项目需求不清楚，一定得问清楚，最好和业务对需求的时候，你可以在重复一遍来保证是否理解的一致。
1. 在项目开发中，文档的书写是极为重要的，业务那边虽然提供了需求文档，但是细节上不会描述的很详细，不要以为自己的大脑一下子能记住开发需求，所以文档此时尤为重要。(这一点我做的还是不够好，还待提高)
1. 程序员最烦的就是沟通，这是我刚开始进行PCR开发的时候的想法，这个想法是错误的。沟通交流是必不可少的，多交流沟通，对程序员来说，能尽快了解需求，提供更好的方案，避免需求隐藏的问题，发现问题，从而及时解决，提升开发效率。
1. 合理安排好项目上开发的时间，赶不及的上线任务及时和负责人提出。
1. 任务顺序得合理化，不清楚的优先级的需要及时提出。
1. 完成一个task,及时让PA去测试环境测试，保证开发测试效率。
1. 对jira分配的任务，合理评估时间，开始的任务和结束的任务需要进行jira进度的更新，以此保证业务知道你这边工作的顺序和时刻查看完成度

# 
