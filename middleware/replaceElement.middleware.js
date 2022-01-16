const Validator = require('../schemas/replaceElement.schema');
const {searchAndUpdateByTitle} = require("../service/Movies.service");
const {MOVIE_NOT_FOUND} = require("../constant/messages");
const {INTERNAL_SERVER_ERROR_CODE, UNPROCESSABLE_ENTITY_CODE, NOT_FOUND_CODE} = require("../constant/codeResponse");

module.exports = async ctx => {
    try {
        const body = ctx.request.body;
        await Validator.validateAsync(body);
        ctx.body = await searchAndUpdateByTitle(body.movie, body.find, body.replace);
        if (!ctx.body) {
            ctx.body = MOVIE_NOT_FOUND;
            ctx.response.status = NOT_FOUND_CODE;
        } 
    } catch (err) {
        if(err.isJoi) {
            ctx.response.status = UNPROCESSABLE_ENTITY_CODE;
            ctx.body = err.message;
            return;
        }
        ctx.response.status = INTERNAL_SERVER_ERROR_CODE;
        ctx.body = err.message;
    }
}