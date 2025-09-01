const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // Console for live viewing
    new transports.Console(),
    // Main security log -> your Week3_Security folder on Desktop
    new transports.File({
      filename: '/home/mousejakie/Desktop/Week3_Security/logs/security.log'
    })
  ],
  exceptionHandlers: [
    // Uncaught exceptions
    new transports.File({
      filename: '/home/mousejakie/Desktop/Week3_Security/logs/exceptions.log'
    })
  ],
  rejectionHandlers: [
    // Unhandled promise rejections
    new transports.File({
      filename: '/home/mousejakie/Desktop/Week3_Security/logs/rejections.log'
    })
  ]
});

module.exports = logger;
