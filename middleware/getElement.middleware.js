const Validator = require('../schemas/getElement.schema');
const {getMovie} = require("../service/Movies.service");
const {YEAR} = require("../constant/middleware");
const {MOVIE_NOT_FOUND} = require("../constant/messages");
const {INTERNAL_SERVER_ERROR_CODE, UNPROCESSABLE_ENTITY_CODE, NOT_FOUND_CODE} = require("../constant/codeResponse");

module.exports = async ctx => {
    try {
        const title = ctx.params.title;
        const year = ctx.get(YEAR);
        await Validator.validateAsync({title, year});
        ctx.body = await getMovie(title, year);
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