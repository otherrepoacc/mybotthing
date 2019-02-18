const commando = require('discord.js-commando')
const {queue} = require(__dirname + '/json files/queue.json')

class QueueCommand extends commando.Command
{
constructor(client)
    {
        super(client,{
            name: 'queue',
            group: 'music',
            memberName: 'queue',
            description: 'Plays music in voice channel of the commander'

        });
    }
    async run(message, args)
    {
          message.channel.send(queue)
    }
}
    module.exports = QueueCommand