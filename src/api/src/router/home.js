const express = require('express');
const Router = express.Router();
const {find} = require('../db/mongo');
const { formatData } = require('../utils')

Router.get('/',async (req,res)=>{
    let data = await find('home',{},{});
    res.send(formatData({data}))
})
module.exports = Router;
