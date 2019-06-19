import { logger } from './logger';
import Server from './server';

async function main() {
  const app = await Server();
}


try {
  main()
} catch (err) {
  logger.error(err)
}
