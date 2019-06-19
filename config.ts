import convict from 'convict';

export default convict({
  server: {
    host: {
      format: String,
      default: 'http://localhost',
      env: 'SERVER_HOST'
    },
    port: {
      format: 'port',
      default: 3000,
      env: 'SERVER_PORT'
    },
  }
})
