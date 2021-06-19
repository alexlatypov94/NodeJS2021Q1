import { app } from './app';
import { env } from './common/config';

app.listen(env.PORT, () =>
  console.log(`App is running on http://localhost:${env.PORT}`)
);
