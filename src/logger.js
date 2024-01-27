import pino from 'pino';
import pretty from 'pino-pretty';

export default pino(
  pretty({
    colorize: true,
    messageFormat: '{if pid}{pid} - {end}{req.method} {req.url} {res.statusCode}',
    hideObject: true,
  })
);