const {Router} = require('express')
const ImgToTextController = require('../controllers/ImgToText')
const router = Router()

router.post('/img-to-txt', ImgToTextController.transformImgtoText)

module.exports = router