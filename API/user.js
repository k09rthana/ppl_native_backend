import db=require("../schema/user");
module.exports={
    isUserExist=(value)=>{
        return new Promise((resolve,reject)=>{
            if(value===10)
            resolve(10);
            else
            reject("User Already Exists");
        })
    },
    f2=()=>{
        
    }
}