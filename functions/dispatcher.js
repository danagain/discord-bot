const pl = require('./playlist');
const ytdl = require('ytdl-core');
dispatcher = {

    dispatcher: null,
    
    startYTDispatcher(message, connection, stream, streamOptions, url) {
        if(this.dispatcher == null) {
            this.dispatcher = connection.playStream(stream, streamOptions);
            this.dispatcher.on("end", end => {
                // console.log("end inside startYTDispatcher");
                // console.log("left channel");
                this.dispatcher = null;
                //message.member.voiceChannel.leave();

                if(pl.pl.length > 0){
                    message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                      const streamOptions = { seek: 0, volume: 1 };
                          console.log("joined channel");
                          const stream = ytdl("https://www.youtube.com/watch?v=B34DmsMxUlA", { filter : 'audioonly' });
                          try{
                             this.startYTDispatcher(message, connection, stream, streamOptions);
                             this.dispatcher = connection.playStream(stream, streamOptions);
                          }catch(error) {
                            console.log(error);
                          }
                    })
                    .catch(console.log('error'));
                }else{
                    console.log("end inside startYTDispatcher");
                    console.log("left channel");
                    this.dispatcher = null;
                    message.member.voiceChannel.leave();
                }
            });
        }else {
            pl.addRequest(url);
            message.reply("There is already something playing!");
        }
    },

    startMP3Dispatcher(message, connection, dir) { 
        if(this.dispatcher == null) {
            this.dispatcher = connection.playFile(dir);
        }else {
            message.reply("There is already something playing!");
        }
    },

    pauseDispatcher(message) {
        if(this.dispatcher != null) {
            this.dispatcher.pause();
        }else {
            message.reply('There is currently nothing to Mc\'Pause!');
        }
    },

    resumeDispatcher(message) {
        if(this.dispatcher != null) {
            this.dispatcher.resume();
        }else {
            message.reply("There is nothing to resume!");
        }
    },

    endDispatcher(message) {
        this.dispatcher.end();
        this.dispatcher = null;
    },

}
module.exports = dispatcher;