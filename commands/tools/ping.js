const commando = require('discord.js-commando');

class PingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ping',
            group: 'tools',
            memberName: 'ping',
            description: 'Displays ping'
        });
    }

    async run(message, args)
    {   
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! :ping_pong: The ping is ${sent.createdTimestamp - message.createdTimestamp}ms!`);
        });
    } 
}

module.exports = PingCommand
