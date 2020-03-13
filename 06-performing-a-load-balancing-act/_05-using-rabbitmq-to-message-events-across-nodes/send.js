var amqp = require('amqplib');

console.log('connecting');

amqp.connect('amqp://localhost').then(function(connection) {
    console.log('connected');
    connection.createChannel().then(function(channel) {
        var topic = 'foo';
        var message = 'Foobar';

        channel.sendToQueue(topic, new Buffer(message));
    });
});
