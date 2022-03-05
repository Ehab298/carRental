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
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jif' || file.mimetype == 'image/jpeg') {
        cb(null, true)
    } else {
        cb('in-valid file type', false)

    }
}

const upload = multer({ fileFilter, storage });

module.exports = upload