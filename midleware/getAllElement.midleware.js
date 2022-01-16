const Validator = require('../schemas/getAllElement.schema');
const {getAllMovie} = require("../service/Movies.service");

module.exports = async ctx => {
    try {
        await Validator.validateAsync(ctx.get('page'));
        const page = ctx.get('page');
        ctx.body = await getAllMovie(page ? page : 1);
    } catch (err) {
        if(err.isJoi) {
            ctx.response.status = 422;
            ctx.body = err.message;
        }
    }
}