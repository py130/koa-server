const Koa = require('koa');
const app = new Koa();

// 响应
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

const port = process.env.PORT || 3000; // 使用环境变量或默认端口 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});