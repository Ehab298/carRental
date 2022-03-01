const  conntactUs =require('../../../DB/models/conntactUs')

module.exports=async(req,res)=>{
    
     
        let data = await conntactUs.find()
        res.json({message:'success',data})
        
};

