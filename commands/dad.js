const request = require('request');
const options = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
      'User-Agent': 'request',
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  };
module.exports = {
	name: 'dad',
    description: 'Tells a random dad joke',
    cooldown: 5,
	execute(message, args) {
        request.get(options, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            message.channel.send(JSON.parse(body).joke);
        });
	},
};