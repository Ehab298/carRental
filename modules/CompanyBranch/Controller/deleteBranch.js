const CompanyBranchmodel = require("../../../DB/models/CompanyBranch")


module.exports =async (req, res) => {
    const _id = req.params.id;
    await CompanyBranchmodel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};