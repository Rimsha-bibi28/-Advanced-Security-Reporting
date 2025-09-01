// Use Juice Shop's built build entry
const app = require('./build/app');
const logger = require('./logger');

// Log when app starts (before listen)
logger.info('Juice Shop application starting...');

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  logger.info(`Juice Shop listening on port ${server.address().port}`);
});

// Global error logging (good evidence in security.log)
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception', { message: err.message, stack: err.stack });
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection', {
    reason: reason && reason.message ? reason.message : String(reason)
  });
});
