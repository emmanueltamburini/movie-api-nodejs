const Joi = require('joi')
const {MOVIE, FIND, REPLACE, STRING_BASE_TEXT, ANY_REQUIRED_TEXT} = require("../constant/messages");

const getElement = Joi.object({
    movie: Joi.string().required().messages({ 'string.base': STRING_BASE_TEXT(MOVIE), 'any.required': ANY_REQUIRED_TEXT(MOVIE) }),
    find: Joi.string().required().messages({ 'string.base': STRING_BASE_TEXT(FIND), 'any.required': ANY_REQUIRED_TEXT(FIND) }),
    replace: Joi.string().required().messages({ 'string.base': STRING_BASE_TEXT(REPLACE), 'any.required': STRING_BASE_TEXT(REPLACE) })
});

module.exports = getElement;