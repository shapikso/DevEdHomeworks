exports.userValidator = require('./uni.validator').userValidator;
const {deepValidation} = require('../../helpers/helper')

exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });
  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  
  const {name,surname,email,phone,adress} = result.value;
  const {validErr, message}  = deepValidation(name,surname,email,phone,adress);
  if(validErr){ 
    const error = { status: 400, data: message };
    return { error };
  }

  return { value: result.value };
};