import bcrypt from 'bcrypt';

import validateUser from '../utils/validate.utils.js';
import userSchema from '../dao/models/user.js';
import loginSchema from '../dao/models/Login.js';


import {userService} from '../services/index.js';
// import userService from '../services/user.services.js';



const createUser = async(req,res,next)=>{
    
    try{
        await validateUser(userSchema, req.body);
        req.body.password = await bcrypt.hash(req.body.password, 5);
        await userService.createUser(req.body);
        res.send('Usuario creado con éxito')
    }catch(error){
        next(error)

    }

}


const loginUser = async(req,res,next)=>{
        try{
        await validateUser(loginSchema, req.body);
   
        const token = await userService.loginUser(req.body);
        res.send(token)
      
    }catch(error){
        next(error)

    }


} 


export default {createUser, loginUser} ;

