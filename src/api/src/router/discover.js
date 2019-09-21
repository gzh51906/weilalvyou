const express = require('express');

const Router = express.Router();
const {
    find,
} = require('../db/mongo');
const {
    formatData
} = require('../utils')
Router.post('/', async (req, res) => {
   
    let {
        val
    } = req.body;

    let data = await find('discoverlist', {
        sort:val
    });
    res.send(formatData({
        data
    }))
})
module.exports = Router;