var aws = require('aws-sdk')
var express = require('express')
var multer = require('multer')
var multerS3 = require('multer-s3')

var app = express()
var s3 = new aws.S3({ endpoint: process.env.FileBaseURL, 
    credentials: {
        accessKeyId: '0564912FC3777ABC9030',
        secretAccessKey: 'VNMfVpLA1cbvjhjxy7zosD7aSvwoFMtSxG2rCmv1'
    } 
})


const storage = multerS3({
    s3: s3,
    bucket: process.env.BucketName,
    metadata: function (req, file, cb) {
        debugger
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        debugger;
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '_' + file.originalname)
    }
})


function fileFilter(req, file, cb) {
    debugger;
    if (['image/jpg','image/jpeg', 'image/png','image/gif','image/jif','image/jfif'].findIndex(a=>a ==file.mimetype)>-1) {
        cb(null, true)
    } else {
        cb('in-valid file type', false)

    }
}

const upload = multer({ fileFilter, storage });

module.exports = upload