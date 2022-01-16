const client = require("./repository");
const koa = require('koa');
const logger = require('koa-logger');
const swagger = require("swagger2");
const { ui } = require("swagger2-koa");
const dotenv = require('dotenv')
dotenv.config();

const swaggerDocument = swagger.loadDocumentSync("api.yaml");
const app = new koa();
const bodyParser = require('koa-bodyparser');
const moviesRouter = require('./controller/Movies.controller')

app.use(logger((str, args) => {
    console.log(str, args);
}));

app.use(bodyParser());

app.use(ui(swaggerDocument, "/swagger")).use(moviesRouter.routes()).use(moviesRouter.allowedMethods());

app.listen(3000);

console.log("Application is running on port 3000");