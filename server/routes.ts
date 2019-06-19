import Router from 'koa-router';
import { logger } from '../logger';
const router = new Router();

router
  .get('/', (ctx) => {
    logger.info('Hello!');
    ctx.body = 'Hello!'
  })

export default router;
