const express = require('express');

const Router = express.Router();

const {
    insert,
    remove,
    find
} = require('../db/mongo');
const {
    formatData,
} = require('../utils')
Router.post('/', async (req, res) => {
    let {
    } = req.body;
    let data = await find('discoverlist', {
    });
    res.send(formatData({
        data
    }))
})
module.exports = Router;