const express = require('express');
const Router = express.Router();

var proxy = require('http-proxy-middleware');
console.log(1234)


// /proxy/weibo
let proxyMiddleware = proxy({
    // 要代理的目标服务器
    target: 'https://m.villaday.com',
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '/', // 删除路径中多余的字符
    },
})
Router.get('/*', proxyMiddleware)



module.exports = Router;