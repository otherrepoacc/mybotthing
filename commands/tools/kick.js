const commando = require('discord.js-commando')

class KickMemberCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'tools',
            memberName: 'kick',
            description: 'Kicks specified member'
        });
    }
    async run(message, args)
    {
        if(args == '')
        {
            message.channel.send('You must specify a member.')
        }
        else
        {
            if(args = message.mentions.users.first())
            {
                message.mentions.users.member.kick('Member kicked by ' + message.member.displayName + '.')
            }
            else
            {
                message.channel.send('You must specify a member.')
            }
        }       
    }
}
    module.exports = KickMemberCommand