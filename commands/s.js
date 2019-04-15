const d = require('../functions/dispatcher');

module.exports = {
	name: 's',
    description: 'Stop a YouTube Song!',
    cooldown: 5,
    args: false,
    usage: '!s',
	execute(message, args) {
    //console.log(d.getDispatcher());
    d.endDispatcher();
    //message.member.voiceChannel.leave();
	},
};