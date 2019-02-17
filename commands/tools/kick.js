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
            message.channel('You must specify a member.')
        }
        else
        {
            if(args = message.mentions.users.first())
            {
                message.mentions.member.first().kick('Member kicked by ' + message.member.name + '.')
            }
        }
    }
}
    module.exports = KickMemberCommand