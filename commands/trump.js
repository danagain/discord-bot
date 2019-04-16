const request = require('request');
const options = {
    url: 'https://api.tronalddump.io/random/quote',
    headers: {
      'User-Agent': 'request',
      'content-type': 'accept: image/jpeg',
      'accept': 'image/jpeg'
    }
  };
module.exports = {
	name: 'trump',
    description: 'Retrieve a random meme as jpeg',
    cooldown: 5,
	execute(message, args) {
        request.get(options, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            message.channel.send(JSON.parse(body).value);
        });
	},
};