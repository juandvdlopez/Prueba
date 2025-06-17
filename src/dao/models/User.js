import joi from 'joi';

const userSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(8).max(20).required()
}); 

export default userSchema;