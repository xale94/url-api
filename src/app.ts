import * as dotenv from 'dotenv';
dotenv.config();
import { initialise } from './entrypoint';

(async () => {
  await initialise();
})();