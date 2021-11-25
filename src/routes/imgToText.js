const { Router } = require('express')
const ImgToTextController = require('../controllers/ImgToText')
const router = Router()
const path = require('path')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/")
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname+ Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.post('/img-to-txt', upload.single('file'), ImgToTextController.transformImgtoText)

module.exports = router