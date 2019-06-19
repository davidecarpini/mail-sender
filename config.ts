import convict from 'convict';

export default convict({
  server: {
    port: {
      format: 'port',
      default: 30201,
      env: 'SERVER_PORT'
    }
  },
  mail: {
    test: {
      format: Boolean,
      default: true,
      env: 'MAIL_TEST'
    },
    smtp: {
      host: {
        format: String,
        default: 'smtp.sdabocconi.it',
        env: 'SMTP_HOST'
      },
      port: {
        format: 'port',
        default: 25,
        env: 'SMTP_HOST'
      }
    }
  }
});
