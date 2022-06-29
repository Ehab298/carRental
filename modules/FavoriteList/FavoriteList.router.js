const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');

const  {FavoriteList}  = require('./validations');
const handelValidations = require('../../middleware/handelValidations');

const FavoriteListController =require('./Controiler/addlike');
 const getFavorite =require('./Controiler/getFavorite');

 router.get('/getFavorite/:UserID',getFavorite)

router.post("/addFavorite/:UserID",handelValidations(FavoriteList),FavoriteListController)

   
module.exports=router
