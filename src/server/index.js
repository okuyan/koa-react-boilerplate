import Koa from 'koa';
import convert from 'koa-convert';
import serveStatic from 'koa-static';
import views from 'koa-views';
import bodyParser from 'koa-bodyparser';
import nunjucks from 'nunjucks';
import path from 'path';
import router from './routes';
import consolidate from 'consolidate';

const app = new Koa();

// Fix searchPaths in nunjucks
consolidate.requires.nunjucks = nunjucks.configure(path.join(__dirname, '/views'));
consolidate.requires.nunjucks.addFilter('json', val => JSON.stringify(val));

app.use(convert(serveStatic('dist/client')));
app.use(views(path.join(__dirname, '/views'), { extension: 'nunjucks' }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
