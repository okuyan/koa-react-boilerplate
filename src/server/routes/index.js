import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  console.log('dgkajsdgksglds')
  console.log(ctx);
//  ctx.body = 'router index............';
  await ctx.render('index');
});

export default router;
