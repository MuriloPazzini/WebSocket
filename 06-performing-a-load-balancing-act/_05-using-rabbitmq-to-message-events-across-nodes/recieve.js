var amqp = require('amqplib');

console.log('connecting');

amqp.connect('amqp://localhost').then(function(connection) {
  console.log('connected');
  connection.createChannel().then(function(channel) {
      var topic = 'foo';
      channel.assertQueue('foo', {durable: false}).then(function () {
          channel.consume('foo', function(msg) {
              console.log(" [x] Received '%s'", msg.content.toString());
          }, { noAck: true });
      });
  });
});
