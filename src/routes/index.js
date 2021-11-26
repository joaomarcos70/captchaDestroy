const fs = require('fs')
const express = require('express')
const ImgToText = require('../routes/imgToText')


if(!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads')
}

module.exports = app => {
    app.use(express.json())
    app.use(ImgToText)
}