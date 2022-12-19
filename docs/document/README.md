# Markdown
下面是我学习Markdown的学习记录，都是
Markdown简单语法，更多详情可以查看[Markdown官网](http://www.markdown.cn/)

## 标题
Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。
类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题），例如：
```
This is an H1
=============

This is an H2
-------------
```
任何数量的 = 和 - 都可以有效果。
类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如：
```
# 这是 H1
## 这是 H2
###### 这是 H6
```
你可以选择性地「闭合」类 atx 样式的标题，这纯粹只是美观用的，若是觉得这样看起来比较舒适，你就可以在行尾加上 #，而行尾的 # 数量也不用和开头一样（行首的井字符数量决定标题的阶数）：
```
# 这是 H1 #
## 这是 H2 ##
### 这是 H3 ######
```
# 区块引用
```
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
```
效果如下
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.

# 列表
Markdown 支持有序列表和无序列表。

无序列表使用星号、加号或是减号作为列表标记：

```
*   Red
+   Red
-   Red
1.  Bird
2.  McHale
```
效果如下
*   Red
+   Red
-   Red
1.  Bird
2.  McHale


## 表格使用
``` js
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
效果如下
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# 链接
Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。
```
This is [an example](http://example.com/ "Title") inline link.
```
效果如下
This is [an example](http://example.com/ "Title") inline link.

## js使用
``` js
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

::: danger STOP
危险区域，禁止通行
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 高亮js{4}
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
## 高亮css{4}
``` css{4}
.style:{
    font-size:14px；
    width: 100px;
    height: 200px
}
```
