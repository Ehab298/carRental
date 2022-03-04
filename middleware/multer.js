const Multer = require('multer')
// const path = require('path')
const FirebaseStorage = require('multer-firebase-storage')
const multer  = Multer({
    storage: FirebaseStorage({
      bucketName: 'car-rental',
      credentials: {
        clientEmail: 'ehabmohammed296@gmail.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfTElco8DarmqZ\nQCyDigvGpEQvgX4GMQQIP2CbRoSQa82FDqGNGOodLN9qcerVpMSO8yZvzvLcPp5g\nRn6kmBbKu+veaIKIAvWjX9X9T5ofWJKekObkym9J0xWRz4PayjZj1HP3ePhOYiUl\nqKyyj4Dc7DDecdi8P5sddTFyUwqG9m29gqnjaRPiGsi5WnaaLrdEl/3p/SQYnp3H\ni6Xzu9opaywNGBfD3T2mR549kcpirnETQ+wp5Ib05CofYjLw8F5ScaB2lmiN6bTh\ndNiigzIuxJMwtbchUthe9topdKIwLyL/BExCdz85KA+FiJbqVzltR31c+95Ep/nE\n356jrdT5AgMBAAECggEAA/1/lHEbJHcsPya8/rYDZcBJX3XDTAEoEFNTFoyhhzMW\nGLRFPnEucxjjx0kveFbKYCjN0Izq5zKv2apGY5XWM1GZ/s4YH/NQBx3AUNowuoKH\n2K45RGegOkWN86MysrUwP9eraHpooOEDPHJhUg83a4FEl5vbMZr3xhkAijQzji4d\nsqrmwoA5xllaLOPwSgynMswqC3Cf7hY2ui8OoaC3gWqbyuJW6K7XI/eQ7Mwt/IFI\n0nCHulfUjuAYx9+R5XOrAtwFbxk6b3XkFV8s7u0LBiR09JqIxdQo7oAFPgMTZYwZ\n5AbZpZ7kQGaDxb5dBSBoBS+7XC/+CWluPK4ipxhgQQKBgQDO3D2Wckxfi6Ts52vN\nA96ks7vuIjO6A60xN4XIlysUJo3IP+PwRtSwe7cfP2OdtaxVwNxNh89PIipKKigi\nvkTIbmfLr62C4iY7ZIF5s5aWhO9TDRKdNg4rMrY1K9APzcaDMN5iGAXERKSjTrxE\nc8Zswext8ILURr+iNjeFF2dWOQKBgQDFI6WnrlJxO0l4Nmt3gwYY7aDO80m3oWfk\nTcfd/tkSPx52pv8gfKnD/aPejHtIdp6uV1wIxar1UgKKGLAq5lh5QF8CHkVitTSp\nsSa03JDN7RYgiCTdeTTYu+csYh44vKk7unYywwcMsmQXFlw8ZhYMpmd4Ttjeu4oX\nGLSj6VR0wQKBgAoc8lXcmKdDKHj8h2Sqf8QFlXZ67ZR2gY0abcv0uAJwMBZOKVKh\n49wM8FLywmf/bcFzgFG6BgSUYwTlMrkgHDTAUQrAN/diHwRgUYQlp4MMVLb2uKY+\n8kpiXE4VKkLbiIz5YqXhDscdo/7n5oRiNJ00jd6CF6NRIiVICUbUchThAoGBAI0f\nhp+x39ylJ2QB+Q6V4hCIU5yydqwYxGmf8JsPq88vFhy0UWCtPU5LTTqscDigidme\nOgkhj8+MBLtdDwe229D47spyZxNRSsDLSz0fxB1WQofJTjKpaNZaNRQFrULKc4+J\nXMHb8Tj6n0ITxLWMEu69VMbAEunncOQ10GKiTs5BAoGAfsRqIN38agHyx2kOlNIB\nRljP7847Gab0ffN0Ae4kcO3clHlHmw8kgBuV2hi/DMQsYoCJTc08JCgT8FGptO/S\nsX++nln75WIgePg4T2AUTNZnNC3NprUEDz4BknyHo4fnpBhcKawdzu8hAPFWQkkU\nYLkw92qkbuLSsRz4gk+luSc=\n-----END PRIVATE KEY-----\n',
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