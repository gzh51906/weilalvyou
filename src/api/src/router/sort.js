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
    let data = await find('sort', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})
Router.get('/itemlist', async (req, res) => {
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('iemtlist', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})

// 查询指定的商品
Router.get('/goods', async (req, res) => {
    // console.log('----', req.query);
    let {
        id
    } = req.query;

    let data = await find('datalist', {
        name: id
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})
// 查询指定的商品
Router.get('/item', async (req, res) => {
    // console.log('----', req.query);
    let {
        id
    } = req.query;
    let data = await find('iemtlist', {
        ID: id * 1
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})


// 增：注册用户(应该实现加入到购物车)
Router.post('/reg', async (req, res) => {
    let {
        phone,
        password
    } = req.body;
    try {
        insert('user', {
            phone,
            password
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
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

// 查找数据中是否含有某项
// 查询指定的商品
Router.get('/cartlist', async (req, res) => {
    console.log("查找数据");

    let {
        id
    } = req.query;
    let data = await find('cart', {
        ID: id * 1
    });
    console.log("查找的", data);

    // res.send('res')
    res.send(formatData({
        data
    }))
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