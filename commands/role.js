module.exports = {
    name: 'role',
    args: true,
    usage: '<user> <role>',
    description: 'Assign a user a given role',
    execute(message, args) {
        message.channel.send('Setting user role !');
    },
};