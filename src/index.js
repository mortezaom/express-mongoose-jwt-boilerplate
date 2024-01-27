import app from './app.js';

const port = process.env.PORT || 5000;
app.listen(port)
  .on('listening', () => {
    console.log(`🚀 are live on ${port}`);
  })
  .on('error', (err) => {
    console.error(err);
  });
process
  .on('unhandledRejection', (reasone, p) => {
    console.error(reasone, 'Unhandeled Rejection on: ', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err);
    process.exit(1)
  });
