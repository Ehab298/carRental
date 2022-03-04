const Multer = require('multer')
// const path = require('path')
const key = require('../DB/mypravitkey.json')
const FirebaseStorage = require('multer-firebase-storage')
const multer  = Multer({
    storage: FirebaseStorage({
      bucketName: 'car-rental',
      credentials: {
        clientEmail: 'ehabmohammed677@gmail.com',
        privateKey:key,
        projectId: 'car-rental-77369'
      }
    })
})

    // ,filename: function (req, file, cb) {
    //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //     cb(null, uniqueSuffix + '_' + file.originalname)
    // }



// function fileFilter(req, file, cb) {
//     console.log('here');
//     if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jif' || file.mimetype == 'image/jpeg') {
//         cb(null, true)
//     } else {
//         cb('in-valid file type', false)

//     }
// }



module.exports = multer