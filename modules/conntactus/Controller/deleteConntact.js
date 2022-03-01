const  conntactUs =require('../../../DB/models/conntactUs')


module.exports =async (req, res) => {
    const _id = req.params.id;
    await conntactUs.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};