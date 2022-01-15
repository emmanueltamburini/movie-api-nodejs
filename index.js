const koa = require('koa');
const app = new koa();

app.use(ctx => {
    ctx.body = "Welcome to koa"
});

app.listen(3000);

console.log("Application is running on port 3000");