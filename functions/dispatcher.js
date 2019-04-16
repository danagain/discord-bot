const pl = require('./playlist');
const ytdl = require('ytdl-core');
dispatcher = {

    dispatcher: null,
    
    startYTDispatcher(message, connection, stream, streamOptions, url) {
        if(this.dispatcher == null) {
            this.dispatcher = connection.playStream(stream, streamOptions);
            this.dispatcher.on("end", end => {
            console.log("end inside startYTDispatcher");
            console.log("left channel");
            this.dispatcher = null;
            message.member.voiceChannel.leave();
            });
        } else {
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
    },

}
module.exports = dispatcher;