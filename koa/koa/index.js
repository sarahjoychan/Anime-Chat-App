'use strict';
const Koa = require('koa');
const koaBody = require('koa-body');
const serve = require('koa-static');

const app = new Koa();
const router = require('./router');

const port = process.env.PORT || 3000;
const path = require('path');


app.use(koaBody());
app.use(serve(path.resolve(__dirname, '../../anime-app')));
app.use(router.routes());


app.listen(port, () => console.log(`Listening on port ${port}`));

