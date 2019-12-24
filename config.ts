import convict from 'convict';

export default convict({
  server: {
    port: {
      format: 'port',
      default: 3000,
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
        default: '',
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
