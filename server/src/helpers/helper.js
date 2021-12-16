function deepValidation(name,surname,email,phone) {
const nameVal = /^[a-zA-Z\-]+$/;
const emailVal = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;
const phoneVal = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;
if(!name.match(nameVal)) return {validErr: true, message:'first name not valid'}
if(!surname.match(nameVal)) return {validErr: true, message:'last name not valid'}
if(!email.match(emailVal)) return {validErr: true, message:'login not valid'}
if(!phone.match(phoneVal)) return {validErr: true, message:'number not valid'}

return {}
}


module.exports = {deepValidation}
