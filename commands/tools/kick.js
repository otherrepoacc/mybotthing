const commando = require('discord.js-commando')
const bot = new commando.Client({
    owner: '452666956353503252',
    commandPrefix: '-'
});

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
            if(args = message.mentions.members.first())
            {
                const member = message.mentions.members.first();
                member.kick('Member kicked by ' + message.member.displayName);
                reply('Successfully kicked ' + message.mentions.members.first())
            }
            else
            {
                message.channel.send('You must specify a member.')
            }
        }       
    }
}
    module.exports = KickMemberCommand