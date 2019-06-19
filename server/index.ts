import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import cors from '@koa/cors';

import config from '../config';
import router from './routes';

const server = async () => {
  const app = new Koa();
  return app
    .use(cors())
    .use(koaLogger())
    .use(
      bodyParser({
        onerror(err, ctx) {
          ctx.req.pipe(process.stdout);
          ctx.throw(`Parsing Error.`);
        }
      })
    )
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.get('server.port'), () => {
      console.log(`listening on port ${config.get('server.port')}`);
    });
};

export default server;
