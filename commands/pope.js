const d = require('../functions/dispatcher');

module.exports = {
  name: 'pope',
  description: 'Pope',
  cooldown: 5,
	execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                d.startMP3Dispatcher(message, connection, __dirname +'/../audio/pope.mp3');
                // const dispatcher = connection.playFile(__dirname +'/../audio/pope.mp3');
                d.dispatcher.on('end', () => {
                    message.member.voiceChannel.leave();
                  });
              })
              .catch(console.log('error'));
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};