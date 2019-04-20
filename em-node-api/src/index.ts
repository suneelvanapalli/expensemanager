const koa = require('koa');
const app = new koa();
const port = 3000;
const serverName = 'test';


app.use(async ctx => {
    ctx.body  = "Hello world!";
});

app.listen(port, ()=>{
 console.log(`Server listening on port ${port}`);
});