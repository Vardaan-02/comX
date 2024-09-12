const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

function cloudinaryConnect(){
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });
    // cloudianry storage setup
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          folder: 'uploads', 
          format: async (req, file) => 'png', 
          public_id: (req, file) => file.originalname.split('.')[0], // gets the name of file and make id
        },
      });
 
    console.log("cloudinary connect");
    return upload = multer({ storage: storage }); // using multer store
}

module.exports = cloudinaryConnect;