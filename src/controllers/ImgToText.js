const Tesseract = require('tesseract.js')

const uploadFolder = './uploads';
const fs = require('fs');
var rimraf = require("rimraf");

const vision = require('@google-cloud/vision')
/* 
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); */

const client = new vision.ImageAnnotatorClient({
    keyFilename: './API_KEY.json'
})

class ImgToText {
    static async transformImgtoText(req, res) {
        try {

            fs.readdir(uploadFolder, (err, files) => {
                client
                    .textDetection(`uploads/${files[0]}`)
                    .then((results) => {
                        const text = results[0].fullTextAnnotation.text

                        res.status(200).json(text.replace(/(\r\n|\n|\r|\s)/gm, ""))
                        rimraf.sync(`${uploadFolder}/${files[0]}`);

                    })
                    .catch((error) => {
                        res.status(500).json(error)
                    })
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ImgToText