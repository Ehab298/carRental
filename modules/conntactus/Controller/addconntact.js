const  conntactUs =require('../../../DB/models/conntactUs')


 module.exports = async(req,res)=>{
    const {  Message} = req.body;
   
        const Data= await conntactUs.insertMany({ Message, UserID: req.User.id})
        res.json({message:"done",Data})
        
}



