module.exports = {
	name: 'scream',
    description: 'The vargas classic',
    cooldown: 5,
	execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('I have successfully connected to the channel!');
                console.log('looking in the directory : ' + __dirname +'/../audio/scream.mp3');
                const dispatcher = connection.playFile(__dirname +'/../audio/scream.mp3');
                dispatcher.on('end', () => {
                    message.member.voiceChannel.leave();
                  });
              })
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};