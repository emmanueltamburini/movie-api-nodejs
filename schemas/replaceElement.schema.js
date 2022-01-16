const Joi = require('joi')

const getElement = Joi.object({
    movie: Joi.string().required().messages({ 'string.base': "Movie must be a text", 'any.required': "Movie field cannot be empty" }),
    find: Joi.string().required().messages({ 'string.base': "Find must be a text", 'any.required': "Find field cannot be empty" }),
    replace: Joi.string().required().messages({ 'string.base': "Replace must be a text", 'any.required': "Replace field cannot be empty" })
});

module.exports = getElement;