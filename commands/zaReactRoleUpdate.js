const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment,MessageActionRow,MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('za_reactroleupdate')
        .setDescription('Command flow to update information on our react role panels')
        .addChannelOption(option => 
            option.addChannelTypes()
            .setName("reactrolechannel")
            .setDescription("Choose the channel that the react roles are in")
            .setRequired(true)
            )
        .addStringOption(option =>
            option.setName("messageid")
            .setDescription("The Message ID of the embed you are changing")
            .setRequired(true)
            )        
        .addStringOption(option =>
            option.setName("attachmentname")
            .setDescription("The name of the attachment at the top of the embed")
            .setRequired(true)
            )
        .addStringOption(option =>
            option.setName("newembedtitle")
            .setDescription("The new title that should be in the Embed title")
            )        
        .addStringOption(option =>
            option.setName("newembeddescription")
            .setDescription("The new message that should be in the Embed description")
            )        
        .addStringOption(option =>
            option.setName("newemoji")
            .setDescription("The new emoji that should be added to the reactions")
            )        
        .addStringOption(option =>
            option.setName("newcustomemoji")
            .setDescription("The name of the emoji that should be added to the reactions")
            ),
    async execute(interaction, clientm) {
        const emojiCache = interaction.guild.emojis.cache
        let newCustomEmoji = emojiCache.find(emoji => emoji.name === `${interaction.options.getString("newcustomemoji")??''}`)
        let newEmoji = `${interaction.options.getString("New Emoji")??''}`

        let aGuild = await interaction.guild.fetch()
        let channel = interaction.options.getChannel("reactrolechannel", true); 
        let message = await channel.messages.fetch(interaction.options.getString("messageid", true));

        let curTitle = message.embeds[0].title
        let curDescription = message.embeds[0].description

        const embed = new MessageEmbed()
        .setColor('CE1126')
        .setTitle(interaction.options.getString("newembedtitle")??`${curTitle}`)
        .setDescription(interaction.options.getString("newembeddescription")??`${curDescription}`);    
        await message.removeAttachments();
        if(curTitle=="Select the games you play from our Redbird Gaming Clubs:"){
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('inviteList')
                    .setLabel('Click this Button to recieve your server invites as a Personal Message')
                    .setStyle('PRIMARY')
            );
            await message.edit({ embeds: [embed], components: [row], files: [`assets/${interaction.options.getString("attachmentname")}.png`], fetchReply: true });
        }else{
            await message.edit({ embeds: [embed],  files: [`assets/${interaction.options.getString("attachmentname")}.png`], fetchReply: true });
        }
        if(!newEmoji==''){
            await message.react(newEmoji);
        }else if (!newCustomEmoji==''){
            await message.react(newCustomEmoji);
        }

        await interaction.reply("Role Panel Updated");
        
        
        

    }
}