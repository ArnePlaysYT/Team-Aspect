const Discord= require('discord.js');
const client = new Discord.Client();

bot.on ('ready', () => {
    console.log ('i am ready!');
});

client.on('message', message => {
    if(message.content === '!commands') {
        message.reply ('U can use thes commands: !rank, !levels, !commands');
    }
});


client.login(process.env.BOT_TOKEN);
