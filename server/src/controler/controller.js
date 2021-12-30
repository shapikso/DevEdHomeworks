const validators = require('./validation');
const axios = require("../../../node_modules/axios/index");

 async function getHistory (body)  {
    const { value, error } = validators.validate(body, validators.jobsValidate);
    if (error) return { error };
    try {
      const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/${value.country}/history`,
        { params: { app_id: '91f2ffdf', app_key: 'df22e92c49631fc7a02f50e0e68f2815', category: value.type},
            headers: {"content-type": "application/json"}});
      return {result: { data: res.data.month, status: 200 }}
    } catch (error) {
      const throwNewError = { status: 400, data: error.message };
      return {error: throwNewError};
    }
    
  };
  module.exports = {getHistory};