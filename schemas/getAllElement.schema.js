const Joi = require('joi')

const getAllElement = Joi.number().positive().allow('').optional().messages({ 'number.base': "Page must be a number", 'number.positive': "Page cannot be negative" });

module.exports = getAllElement;