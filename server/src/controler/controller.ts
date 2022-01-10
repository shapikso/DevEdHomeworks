const { userGetValidator, userValidator } = require('./validation/uni.validator');
const uniRepository = require('../database/repositories/uni.repositories');
const bcrypt = require('bcryptjs');
import { string } from 'joi';
import { getSeason } from '../request/request'
import { TDataResult, TError } from "../type";


 async function createUser (body : object)  {
    const { value, error } = userValidator.validate(body,{ abortEarly: false });
    if (error) return { error: { status: 400, data: error.message } };

    const hash: string = bcrypt.hashSync(value.password, 12);
  
    const { error: dbError } = await uniRepository.createUser(value.name,value.surname,hash,value.email,value.created_at,value.updated_at);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

async function getData ()  {
    // const { value, error } = userGetValidator.validate(body,{ abortEarly: false });
    // if (error) return { error: {status: 400, data: error.message} };
    
    const { error: dbError , result} = await getSeason();
    if (result){ console.log(result.data); }
    
    if (dbError) return { error: { status: 500, data: { error: string } } };
    return { result: { data: result, status: 200 } };
  };
  
  module.exports = {createUser,getData};
