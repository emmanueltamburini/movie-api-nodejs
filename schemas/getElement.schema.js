const Joi = require('joi')

const getElement = Joi.object({
    title: Joi.string().required().messages({ 'string.base': "Title must be a text", 'any.required': "There must be a title" }),
    year: Joi.number().allow('').optional().messages({ 'number.base': "Year must be a number" })
});

module.exports = getElement;