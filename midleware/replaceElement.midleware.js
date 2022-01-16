const Validator = require('../schemas/replaceElement.schema');
const {searchAndUpdateByTitle} = require("../service/Movies.service");

module.exports = async ctx => {
    try {
        const body = ctx.request.body;
        await Validator.validateAsync(body);
        ctx.body = await searchAndUpdateByTitle(body.movie, body.find, body.replace);
    } catch (err) {
        if(err.isJoi) {
            ctx.response.status = 422;
            ctx.body = err.message;
        }
    }
}