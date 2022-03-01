
const  conntactUs =require('../../../DB/models/conntactUs')




module.exports= async(req, res) => {
    const {Message} = req.body;
    const _id = req.params.id
    const newBooking =  await conntactUs.updateOne({ _id: _id }, {Message},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};