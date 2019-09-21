const express = require('express');

const Router = express.Router();

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


module.exports = Router;