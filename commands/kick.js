const fs = require('fs');

module.exports = {
	name: 'kick',
    description: 'Kicks a member in the head',
    cooldown: 5,
    args: true,
    usage: '<user>',
	execute(message, args) {
        if( message.member.hasPermission('KICK_MEMBERS')) {
            const user = message.mentions.users.first();
            console.log(user);
            if (user) {
                const member = message.guild.member(user);
                if(member) {
                    member.kick(`${new Date()} ${user.tag} was kicked in the head`).then(() => {
                        message.reply(`Successfully kicked ${user.tag} in the head`);
                    }).catch(err => {
                        message.reply(`I was unable to kick the member`);
                        console.log(err);
                    });
                }else{
                    message.reply(`That user isn't in this guild!`);
                }
            }else {
                message.reply('You didn\'t mention the user to kick!');
              }
        }else{
            message.reply(`${message.author.username} you do not have permissions to kick someone in the head`);
        }
    }
};