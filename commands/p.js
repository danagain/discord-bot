const ytdl = require('ytdl-core');
const d = require('../functions/dispatcher');

module.exports = {
	name: 'p',
    description: 'Play a YouTube Song!',
    cooldown: 5,
    args: true,
    usage: '<song>',
	execute(message, args) {
        const dispatcher = null;
        if (message.member.voiceChannel) {
            console.log(args);
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                const streamOptions = { seek: 0, volume: 1 };
                    console.log("joined channel");
                    const stream = ytdl(args[0], { filter : 'audioonly' });
                    try{
                      d.startYTDispatcher(message, connection, stream, streamOptions);
                    }catch(error) {
                      console.log(error);
                    }
                    d.dispatcher.on("end", end => {
                        console.log("left channel");
                        d.dispatcher = null;
                        voiceChannel.leave();
                    });
              })
              .catch(console.log('error'));
          } else {
            message.reply('You need to join a voice channel first!');
          }
	},
};