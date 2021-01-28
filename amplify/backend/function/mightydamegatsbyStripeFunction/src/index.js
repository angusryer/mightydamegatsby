// const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

// const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context, callback) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  app.handler(event, context, callback)
  // return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
