const CompanyBranchmodel =require('../../../DB/models/CompanyBranch')


 module.exports = async(req,res)=>{
    const {City,Street,BranchName,BranchPhone,CompanyID} = req.body;
    const Name =await CompanyBranchmodel.findOne({BranchName})
    if(Name){
        res.json({error:"there is same name in DB"})
    }else {
        const newBranch= await CompanyBranchmodel.insertMany({ City,Street,BranchName,BranchPhone,CompanyID})
        res.json({message:"done",newBranch})
        }
}

