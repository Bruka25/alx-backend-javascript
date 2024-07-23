import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

const port = 1245;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is running http://${host}:${port}`);
});

export default app;
