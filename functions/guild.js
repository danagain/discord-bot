const Discord = require('discord.js')
const guild = new Discord.Guild()

guild_ =  {
     getChannels() {
         console.log(guild.channels)
        guild.channels.forEach((value, key) => {console.log(value)})
        return guild.channels;
    },

    createChannel(){
        guild.createChannel('new-general', 'text')
        .then(console.log)
        .catch(console.error);
    }
};

module.exports = guild_