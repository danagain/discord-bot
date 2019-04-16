const d = require('../functions/dispatcher');

module.exports = {
	name: 'uhhaw',
    description: 'UH HAW HAW HAW',
    cooldown: 5,
	execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                d.startMP3Dispatcher(message, connection, __dirname +'/../audio/uhhaw.mp3');
                d.dispatcher.on("end", end => {
                  message.member.voiceChannel.leave();
                  // d.dispatcher = null;
              });
              })
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};