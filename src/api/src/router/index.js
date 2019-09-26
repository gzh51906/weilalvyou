const express = require('express');

const Router = express.Router();
const proxy = require('http-proxy-middleware');

const {
    token,
    formatData
} = require('../utils');

// 引入路由文件
const sortRouter = require('./sort');
const userRouter = require('./user');
const homeRouter = require('./home');
const destinationRouter = require('./destination')
const discoverRouter = require('./discover');
// let proxyRouter = require('./proxy');



// 利用中间bodyParse格式化请求参数
Router.use(express.json(), express.urlencoded({
    extended: false
}))

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
})
Router.use('/villa', proxy({
    "target": "https://m.villaday.com",
    "changeOrigin": true,
    // 重写路径：参数第一个是地址中要删除的，第二个是要添加的内容
    "pathRewrite": {
        "^/villa": "/"
    }
}));
// 商品
Router.use('/destination', destinationRouter);
Router.use('/user', userRouter);
Router.use('/home', homeRouter);
Router.use('/sort', sortRouter);
Router.use('/discover', discoverRouter);
Router.get('/verify', (req, res) => {
    // 获取前端传入的token
    // 对token进行校验
    let authorization = req.header('Authorization');

    let result = token.verify(authorization);
    if (result) {
        res.send(formatData({
            data: {
                authorization: true
            }
        }))
    } else {
        res.send(formatData({
            code: 0,
            data: {
                authorization: false
            }
        }))
    }

});
// 地址以/proxty开头的请求，进入代理服务器
// Router.use('/proxy', proxyRouter);

module.exports = Router;