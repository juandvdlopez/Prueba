import errorHelper from './errors.helper.js';


const validateUser = async (schema , data)=>{
    try{
      
        
        await schema.validateAsync(data);
    }catch(error){
             
        errorHelper.badRequestError(error.details[0]?.message);
    }
}


export default validateUser; 