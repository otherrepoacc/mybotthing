const Commando = require("discord.js-commando");
const bot = new Commando.Client({
    owner: '452666956353503252',
    commandPrefix: '-'
});

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('gifs', 'Gifs');
bot.registry.registerGroup('tools', 'Tools');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
global.green = '00FF00'


.




bot.on('ready', function(){
    console.log('Bot is ready.');



});
bot.on('guildMemberAdd', function(member){
    
    
        member.send('Welcome to ' + member.guild.name + '!')
        
    
});
bot.on('guildCreate', function(){   /* this code changes the bot activity to "Listening to (amount of servers bot is in) | @botname help" when the bot is added to a server or removed from a server (this is way too long) */
    bot.user.setActivity('' + bot.guilds.size + ' servers @Automatic help', {type: 'LISTENING'})
})
bot.on('guildDelete', function(){
    bot.user.setActivity('' + bot.guilds.size + ' servers @Automatic help', {type: 'LISTENING'})
})
bot.on('ready', function(){
    bot.user.setActivity('' + bot.guilds.size + ' servers @Automatic help', {type: 'LISTENING'})
})





bot.login(process.env.BOT_TOKEN)
