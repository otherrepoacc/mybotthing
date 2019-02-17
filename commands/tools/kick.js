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
                 let name = message.mentions.users.first()
                let member = message.member.guild.members.find('username', name)
                member.kick('Member kicked by ' + message.author)
            }
            else
            {
                message.channel.send('You must specify a member.')
            }
        }       
    }
}
    module.exports = KickMemberCommand