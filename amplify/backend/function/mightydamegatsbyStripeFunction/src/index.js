const app = require('./app');

exports.handler = (event, context, callback) => {
  app.handler(event, context, callback)
};
