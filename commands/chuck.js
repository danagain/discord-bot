const request = require('request');

module.exports = {
	name: 'chuck',
    description: 'Tells a random chuck norris joke!',
    cooldown: 5,
	execute(message, args) {
        request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            message.channel.send(JSON.parse(body).value);
        });
	},
};