#react项目之维拉度假
##项目名称
###维拉度假

##演示
、、、

    官网：
    webAPP上线地址：
    后台管理系统地址：

、、、

## git仓库地址

、、、

    webAPP github地址：
    后台管理github地址：
、、、

## 团队与分工
、、、

    组长：熊小超
    组员：何新建、袁素兰、张成

    负责模块说明：
       熊小超：主要负责首页以及对应的提交需求的后台接口的实现，主要用了ant-design框架、react、react-router和动态路由，以及利用axios发送网络请求。
       袁素兰：主要负责移动APP项目搭建，目的地ui、列表页ui、详情页ui、搜索页面ui、我的ui、登录ui以及对应的后台接口的实现。主要用了ant-design框架、react，react-route,利用axios发送网络请求。

       何新健：主要负责发现页面以及对应的详情页和对应的后台接口的实现。主要用了ant-design框架、react、react-router和动态路由，以及利用axios发送网络请求。

       张成： 后台管理系统全流程（前后端）、详情页2ui、以及指导组长完成首页主要功能。。。


## 项目目录
#### 项目目录说明
、、、

    WEILALVYOU文件夹里面的是所有的内容；
    assets文件夹存放的是静态资源；
    src里面的主要内容如下：
    其中api文件夹存放的是后台接口；
    pages文件夹存放的是组件；
            Destination是目的地页面
            Discover是发现页面；
            Home是首页;
            Login是登入页面；
            Mine是我的页面；
            Thinktank是提交需求；
    redux文件夹存放的是store.js；
    style文件夹存放的是样式内容；

    #### 项目目录树形结构
    、、、

    │  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  tree.txt
│  webpack.config.js
│
├─assets
│  ├─Destination
│  │
│  └─home
│
├─public
│      favicon.ico
│      index.html
│      manifest.json
│      robots.txt
│
└─src
    │  .gitignore
    │  App.js
    │  main.js
    │  serviceWorker.js
    │  template.html
    │
    ├─api
    │  │  .gitignore
    │  │  index.js
    │  │
    │  └─src
    │      │  config.json
    │      │  index.html
    │      │  server.js
    │      │
    │      ├─db
    │      │      mongo.js
    │      │
    │      ├─router
    │      │      destination.js
    │      │      discover.js
    │      │      home.js
    │      │      index.js
    │      │      proxy.js
    │      │      sort.js
    │      │      user.js
    │      │
    │      └─utils
    │              index.js
    │              token.js
    │
    ├─pages
    │  ├─Destination
    │  │  │  detail.js
    │  │  │  index.js
    │  │  │  realDetail.js
    │  │  │  realDetail2.js
    │  │  │  search.js
    │  │  │
    │  │  ├─data
    │  │  │      cities
    │  │  │      citieslist.txt
    │  │  │      detail2_data.js
    │  │  │      detailList
    │  │  │
    │  │  └─images
    │  │          flowers_32px_1208616_easyicon.net.ico
    │  │
    │  ├─Discover
    │  │  │  discoverlist.js
    │  │  │  index.js
    │  │  │
    │  │  └─css
    │  │          discover.scss
    │  │          discoverlist.scss
    │  │
    │  ├─Home
    │  │  │  index.js
    │  │  │
    │  │  └─css
    │  │          home.scss
    │  │
    │  ├─Login
    │  │      index.js
    │  │
    │  ├─Mine
    │  │      Coupon.js
    │  │      index.js
    │  │      order.js
    │  │      Record.js
    │  │      shareCard.js
    │  │      Want2Go.js
    │  │
    │  └─ThinkTank
    │      │  index.js
    │      │
    │      └─css
    │              think.scss
    │
    ├─redux
    │      store.js
    │
    └─style
            common.css
            common.min.css
            common.scss
            realDetail2.css
            realDetail2.min.css
            realDetail2.scss
            rem.js

    ##项目页面截图




