const Tesseract = require('tesseract.js')

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

class ImgToText {
    static async transformImgtoText(req, res) {

        let img = upload.single(req.file)

        try {
            Tesseract.recognize('captcha2pib.jpg', "eng", {logger:m => console.log(m)})
            .then(result =>{
                return res.status(200).json(result.data.text)
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ImgToText