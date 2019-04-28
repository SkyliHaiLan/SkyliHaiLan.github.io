# 介绍2
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 特性
* **易学易用**，仅有 6 个 api，对 redux 用户尤其友好，[配合 umi 使用](https://umijs.org/guide/with-dva.html)后更是降低为 0 API

## 在已有项目中安装
``` js{4}
# 安装为本地依赖项
npm install -D vuepress

# 创建一个 docs 目录
mkdir docs
# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md

# 开始编写文档
npx vuepress dev docs
```

---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
:tada: :100:

# All Link
[[toc]]

# 自定义容器(custom containers)
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
``` css{4}
.style:{font-size:14px}
```
