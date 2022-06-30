
module.exports=(schema)=>{
    debugger
    return(req,res,next)=>{
        try{
        let ValidateError=[]

        let checkMethod=["body","params","query"]
        
        checkMethod.forEach((key)=>{
            if(req[key]){
                if(schema[key]){

                    let validationResluts = schema[key].validate(req[key])

                    if (validationResluts.error) {
                        ValidateError.push(validationResluts.error.details[0].message)
                    }
                }
            }
        })
        if (ValidateError.length) {
            res.json({message:"ValidateError",ValidateError})
        }
        else
            next()
        }
        catch(error){
            res.json({message:"unexpected error occured"});
        }
    }
}