const commando = require('discord.js-commando')
const fs = require('file-system')
const messagesfile = require(__dirname + '/messages.json')
class GetMessageCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'get',
            group: 'tools',
            memberName: 'get',
            description: 'Get message to json file'
        });
    }
    async run(message, args)
    {
        let _message = messagesfile[message.member.displayName].message
        message.channel.send('Your message is: ' + _message)

    }

}
    module.exports = GetMesssageCommand
