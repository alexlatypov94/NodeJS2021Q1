import { app } from './app';
import { PORT } from './common/config';
import { TryDBConnect } from './common/localDb';

TryDBConnect(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
