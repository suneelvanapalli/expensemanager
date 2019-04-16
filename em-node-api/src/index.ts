import * as koa from "koa";

const app = new koa();

app.use(async ctx => {
    ctx.body  = "Hello world!";
});

app.listen(3000);