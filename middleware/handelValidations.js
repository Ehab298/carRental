

module.exports=(schema)=>{
    return(req,res,next)=>{

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
            res.status(400).json({err:"ValidateError",ValidateError})
        }
        next()
    }
}