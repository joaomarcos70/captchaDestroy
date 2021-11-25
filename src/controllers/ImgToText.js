const Tesseract = require('tesseract.js')

const uploadFolder = './uploads';
const fs = require('fs');
/* 
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); */

class ImgToText {
    static async transformImgtoText(req, res) {
        try {

            fs.readdir(uploadFolder, (err, files) => {
                files.every(file => {
                    console.log(file);
/*                    return Tesseract.recognize(`uploads/${file}`, "eng", { logger: m => console.log(m) })
                        .then(result => {
                             console.log("alonicolas",result.data.text); 
                        }) */
                        
                        return
                });
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ImgToText