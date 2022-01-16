const Validator = require('../schemas/replaceElement.schema');
const {searchAndUpdateByTitle} = require("../service/Movies.service");

module.exports = async ctx => {
    try {
        const body = ctx.request.body;
        await Validator.validateAsync(body);
        ctx.body = await searchAndUpdateByTitle(body.movie, body.find, body.replace);
        if (!ctx.body) {
            ctx.body = 'Movie has not been found';
            ctx.response.status = 404;
        } 
    } catch (err) {
        if(err.isJoi) {
            ctx.response.status = 422;
            ctx.body = err.message;
            return;
        }
        ctx.response.status = 500;
        ctx.body = err.message;
    }
}