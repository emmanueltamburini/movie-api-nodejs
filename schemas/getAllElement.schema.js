const Joi = require('joi')
const {PAGE, NUMBER_BASE_TEXT, NUMBER_POSITIVE_TEXT} = require("../constant/messages");

const getAllElement = Joi.number().positive().allow('').optional().messages({ 'number.base': NUMBER_BASE_TEXT(PAGE), 'number.positive': NUMBER_POSITIVE_TEXT(PAGE) });

module.exports = getAllElement;