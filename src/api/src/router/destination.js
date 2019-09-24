const express = require('express');

const Router = express.Router();
const {
    insert,
    find,
    update
} = require('../db/mongo');
const {
    formatData
} = require('../utils')
// 查找
Router.get('/', async (req, res) => {
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('cities', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})

// 查询指定
Router.post('/detailList', async (req, res) => {
    let {
        url
    } = req.body;
    let data = await find('detailList', {
        url: url
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})
Router.post('/content', async (req, res) => {
    // console.log("post");
    let {
        sort
    } = req.body;

    let data = await find('citieslist', {
        sort: sort
    });
    res.send(formatData({
        data
    }))
})




// 添加数据
Router.post('/cart', async (req, res) => {
    // console.log("增加数据");
    let {
        APPPrice,
        ID,
        Pic,
        ProductName,
        qty
    } = req.body;
    try {
        insert('cart', {
            APPPrice,
            ID,
            Pic,
            ProductName,
            qty
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})


// 修改数据
Router.post('/updata', async (req, res) => {
    // console.log("修改数据");
    let {
        ID,
        i
    } = req.body;
    // console.log(i);//前端传来的qty要被修改的值

    let data = await update('cart', {
        ID
    }, {
        $set: {
            qty: i
        }
    });

    res.send(formatData({
        data
    }))
})

// 搜索功能，查看数据中是否含有某项
Router.get('/search', async (req, res) => {
    // console.log('----', req.query);
    let {
        id
    } = req.query;
    let query = req.query;
    console.log(query);

    let data = await find('datalist', {
        name: id
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})
module.exports = Router;