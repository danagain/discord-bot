module.exports = {
	name: 'mcbone',
    description: 'It\'s a mcbone you mad mc fuck',
    cooldown: 5,
	execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                console.log('looking in the directory : ' + __dirname +'/../audio/mcbone.mp3');
                const dispatcher = connection.playFile(__dirname +'/../audio/mcbone.mp3');
                dispatcher.on('end', () => {
                    message.member.voiceChannel.leave();
                  });
              })
              .catch(console.log('error'));
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};