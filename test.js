const Koa = require('koa');
const Router = require('koa-router');
const { getRandomJoke } = require('./utils/jokes');
const { getRandomQuote } = require('./utils/quotes');

const app = new Koa();
const router = new Router();

// 笑话路由
router.get('/joke', (ctx) => {
  ctx.body = getRandomJoke();
});

// 名言路由
router.get('/quote', (ctx) => {
  ctx.body = getRandomQuote();
});

// 主页路由
router.get('/', (ctx) => {
  ctx.body = '欢迎来到有趣的世界！试试访问 /joke 获取随机笑话 或 /quote 获取编程名言';
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000; // 使用环境变量或默认端口 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});