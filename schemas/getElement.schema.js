const Joi = require('joi')

const getElement = Joi.object({
    title: Joi.string().required().messages({ 'string.base': "Title must be a text", 'any.required': "There must be a title" }),
    year: Joi.number().positive().allow('').optional().messages({ 'number.base': "Year must be a number", 'number.positive': "Year cannot be negative"})
});

module.exports = getElement;