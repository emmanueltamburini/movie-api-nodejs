const client = require("./dal");

const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const moviesRouter = require('./routes/Movies.routes')

app.use(bodyParser());

app.use(moviesRouter.routes()).use(moviesRouter.allowedMethods());

app.listen(3000);

console.log("Application is running on port 3000");