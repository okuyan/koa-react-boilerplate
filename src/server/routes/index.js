import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  console.log(ctx);
//  ctx.body = 'router index............';
  await ctx.render('index');
});

router.get('/flow', async (ctx, next) => {
  await ctx.render('index');
})

export default router;
