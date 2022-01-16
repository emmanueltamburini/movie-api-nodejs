const client = require("./repository");
const koa = require('koa');
let logger = require('koa-logger');

const app = new koa();
const bodyParser = require('koa-bodyparser');
const moviesRouter = require('./controller/Movies.controller')

app.use(logger((str, args) => {
    console.log(str, args);
}));

app.use(bodyParser());

app.use(moviesRouter.routes()).use(moviesRouter.allowedMethods());

app.listen(3000);

console.log("Application is running on port 3000");