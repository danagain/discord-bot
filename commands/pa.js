const d = require('../functions/dispatcher');

module.exports = {
	name: 'pa',
    description: 'Pause any current audio',
    cooldown: 5,
    args: false,
    usage: '!pa',
	execute(message, args) {
        if (message.member.voiceChannel) {
            d.pauseDispatcher(message);
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};