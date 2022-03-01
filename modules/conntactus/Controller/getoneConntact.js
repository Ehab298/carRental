const  conntactUs =require('../../../DB/models/conntactUs')

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await conntactUs.findOne({ _id})
        res.json({message:'success',data})
        
};


