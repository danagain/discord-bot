const d = require('../functions/dispatcher');

module.exports = {
	name: 'ra',
    description: 'Resume audio',
    cooldown: 5,
    args: false,
    usage: '!ra',
	execute(message, args) {
        if (message.member.voiceChannel) {
            d.resumeDispatcher(message);
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};