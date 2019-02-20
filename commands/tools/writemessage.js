const commando = require('discord.js-commando')
const fs = require('file-system')
const messagesfile = require(__dirname + '/messages.json')
class WriteMessageCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'write',
            group: 'tools',
            memberName: 'write',
            description: 'Write message to json file'
        });
    }
    async run(message, args)
    {
        messagesfile[message.member.displayName] =
        {
            message: message.content
        }
        
        fs.writeFile(__dirname + '/messages.json, JSON.stringify(messagesfile, null, 4'))

           message.channel.send('Message written to messages.json')

    }

}
    module.exports = WriteMesssageCommand
