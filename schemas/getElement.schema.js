const Joi = require('joi')
const {YEAR, TITLE, STRING_BASE_TEXT, ANY_REQUIRED_TEXT, NUMBER_BASE_TEXT, NUMBER_POSITIVE_TEXT} = require("../constant/messages");

const getElement = Joi.object({
    title: Joi.string().required().messages({ 'string.base': STRING_BASE_TEXT(TITLE), 'any.required': ANY_REQUIRED_TEXT(TITLE) }),
    year: Joi.number().positive().allow('').optional().messages({ 'number.base': NUMBER_BASE_TEXT(YEAR), 'number.positive': NUMBER_POSITIVE_TEXT(YEAR)})
});

module.exports = getElement;