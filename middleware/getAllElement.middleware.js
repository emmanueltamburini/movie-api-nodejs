const Validator = require('../schemas/getAllElement.schema');
const {getAllMovie} = require("../service/Movies.service");
const {PAGE} = require("../constant/middleware");
const {INTERNAL_SERVER_ERROR_CODE, UNPROCESSABLE_ENTITY_CODE} = require("../constant/codeResponse");

module.exports = async ctx => {
    try {
        const page = ctx.get(PAGE);
        await Validator.validateAsync(page);
        ctx.body = await getAllMovie(page ? page : 1);
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