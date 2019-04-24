# 快速搭建一个文档站
vuepress,markdown，在gitlab新建一个项目【例如 project Name: xportal-docs】

## 在已有项目中安装【xportal-docs】
克隆gitlab仓库代码，安装本地依赖包
``` bash
# clone
git clone http://gitlab.xpaas.lenovo.com/lihl12/xportal-docs.git
# 创建一个 package.json 文件
cd.>package.json
# 安装为本地依赖项
npm install -D vuepress
# 创建一个 docs 目录
mkdir docs
# 切到docs目录
cd docs
# 在docs目录创建一个 .vuepress 目录
mkdir .vuepress
# 在docs 目录创建一个 markdown 文件
cd.>README.md
```
---
添加代码:
  - 在docs/README.md中添加代码
``` sh
# My Test
```

 - 给package.json 添加一些 scripts 脚本
``` json
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
```
---

## 启动项目
一个简单的文档就已经完成
``` bash
npm run dev
```





