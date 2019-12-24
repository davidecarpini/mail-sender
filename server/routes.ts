import Router from 'koa-router';
import { logger } from '../logger';
import mailer from 'nodemailer';
const router = new Router();
import config from '../config';

router
  .get('/', ctx => {
    ctx.body = 'mail-sender online!';
  })
  .post('/send', ctx => {
    logger.info('mail data: ', ctx.request.body);
    console.log(config.get('mail.test'));
    ctx.body = 'mail-sender online!';
    let options: any;
    if (config.get('mail.test')) {
      options = {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '',
          pass: ''
        }
      };
    } else {
      options = {
        host: config.get('mail.smtp.host'),
        port: config.get('mail.smtp.port')
      };
    }
    const transporter = mailer.createTransport(options);
    transporter.verify(error => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to send messages');
      }
    });
    const data = ctx.request.body;
    ctx.body = transporter.sendMail(data, err => {
      if (err) {
        return err;
      } else {
        return `sended mail: ${data}`;
      }
    });
  });

export default router;
