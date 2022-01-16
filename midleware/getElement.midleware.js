const Validator = require('../schemas/getElement.schema');
const {getMovie} = require("../service/Movies.service");

module.exports = async ctx => {
    try {
        const title = ctx.params.title;
        const year = ctx.get('year');
        await Validator.validateAsync({title, year});
        ctx.body = await getMovie(title, year);
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