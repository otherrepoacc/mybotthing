const commando = require('discord.js-commando')

class LeaveChannelCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Plays music in voice channel of the commander'

        });
    }
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                const channel = message.member.voiceChannel;
                 channel.leave()
                 console.log('Disconnected!')
                 message.react('👍')
            }
        }
        else
        {
            message.channel.send('You must be in a voice channel for me to join it.')
        }
    }
}
    module.exports = LeaveChannelCommand