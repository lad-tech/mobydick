import {createLogger, format, transports} from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.errors({stack: true}),
    format.splat(),
    format.json(),
  ),
  transports: [],
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}
export default logger;

export const Prefix = 'Checker';
