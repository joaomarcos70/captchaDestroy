const express = require('express')
const ImgToText = require('../routes/imgToText')

module.exports = app => {
    app.use(express.json())
    app.use(ImgToText)
}