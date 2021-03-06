const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"; 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!Vote|!Bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
  if (message.content === ('!Bot')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers**📚 :', [client.guilds.size], true)
          .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner**👑 :' , `[<@231101412258349056>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});


client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "Vote") {
    if(!args.join(" ")) return message.channel.send(`**you must write suggestion **`);
    let channel = message.guild.channels.find(c => c.name == "📕votes");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(``)
    .setFooter(` Select a reaction below to vote on suggestion`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      msg.channel.send(`@everyone`);
      message.delete()
      message.channel.send(`**DONE!!the suggestion was sent to Channel 📕votes :white_check_mark:  **`);
    });
  }
});


client.login(process.env.BOT_TOKEN);
