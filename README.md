# vue_qunar

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 配置移动端视口
```
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

## 移动端项目 1px 边框的问题（移动端1px 像素border 被渲染成几倍border 问题）
> 在入口文件引入 border.css 文件

## 解决移动端 浏览器 点击事件 300ms 延迟的问题
1. 安装插件： `npm i fastclick --save`
2. 入口文件(main.js)中引入插件： `import fastClick from 'fastclick'`
3. 入口文件(main.js)中使用插件： `fastClick.attach(document.body)`

## 项目背景色(全局设置)
1. 新建 `varibles.styl` 文件
2. 定义变量 `$bgColor = #00bcd4`
3. 在 style 标签内容通过 `@import` 引入该文件
4. 在css 设置中，就可以使用此变量了，例如：`background-color: $bgColor`


## 使用 vue-awesome-swiper 插件制作轮播图
1. 安装插件（使用2.6.7版本）：`npm i vue-awesome-swiper@2.6.7 --save`
2. 使用方式： github: [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper/blob/master/README.md)

## 解决网速慢时，轮播图组件不占据空间，导致下面布局问题
1. 在轮播图外部包裹 div 标签
2. 设置div标签 with: 100%; height: 0; padding-bottom: '轮播图的高度'; 这样在轮播图加载之前div 会占据空间

## 当 style 设置 scoped 属性时，对 style 的样式作用域有限制，当需要修改 轮播图组件 样式时，会修改无效问题？
1. 使用 `>>>` 符号，可以突破 scoped 的限制
2. 列如：
    ```
        <style scoped>
            .box >>> .min {}
        </style>
        // 给当前组件的 .box 元素 下其他组件 .min 设置样式
    ```

## icons 区域轮播图的实现：每页显示8 项数据，超过 8 项进行轮播
1. 使用计算属性：
   ```
    computed: {
        pages () {
            // 声明一个空数组, 存放每一页的轮播内容
            const pages = []
            this.iconsList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                // 将数据分为两页，pages[0] 为第一页， pages[1] 为第二页 ...
                pages[page].push(item)
            })
            return pages
        }
    }
   ```

   ## 文本超出盒子时候，将文本溢出隐藏，并且在文本后面加三个点(...)做结尾 的效果，css 实现
   1. 给当前文本的盒子添加
   ```
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
   ```

   ## 使用 axios 请求本地 `/static/mock` 中的数据:
   1. 开发时，将请求的模拟 json 数据放入 static/mock 中
   2. 开发时，在 config 的 index.js 中的 dev 对象节点的 proxyTable 对象节点中进行配置请求路径为本地的 static/mock
    ```
    proxyTable: {
        '/api': {
            target: 'http://localhost:8080',
            pathRewrite: {
              '^/api': '/static/mock'
            }
        }
    }
    ```

    ## 在父组件总使用  ajax 获取数据， 通过属性绑定的方法组件传值，将数据传递给子组件
    ## 子组件与子组件传值，通过事件绑定的函数参数将子组件的值传到父组件，在通过属性绑定将父组件的值传到子组件

    ## 使用 better-scroll 插件来实现页面滑动效果
    1. 使用方式： github [better-scroll](https://github.com/ustbhuangyi/better-scroll/blob/dev/README.md)


    ## Alphabet 组件的运行优化
    1. 在 touchMove 时，盒子的 offsetTop 的值是固定的，但一直被重复计算，所以可以在 updated 的构子中将值计算出来，保存到 data 中
    2. 使用 setTimeout 进行函数节流； touchMove 会一直被执行，浪费内存
