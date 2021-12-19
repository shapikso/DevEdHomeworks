exports.uniValidator = require('./uni.validator').uniValidator;
exports.uniIDValidator = require('./uni.validator').uniIDValidator;
exports.uniPages = require('./uni.validator').uniPages;
exports.teacherValidator = require('./teacher.validator').teacherValidator;
exports.teacherId = require('./teacher.validator').teacherId;
exports.courseValidator = require('./course.validator').courseValidator;
exports.courseId = require('./course.validator').courseId;
exports.courseDelId = require('./course.validator').courseDelId;
exports.studentValidator = require('./student.validator').studentValidator;
exports.studentId = require('./student.validator').studentId;
exports.studentDelId = require('./student.validator').studentDelId;
exports.courseBests = require('./course.validator').courseBests;
exports.studentChangeValidator = require('./student.validator').studentChangeValidator;
exports.UniId = require('./student.validator').UniId;




exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });
  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  return { value: result.value };
};