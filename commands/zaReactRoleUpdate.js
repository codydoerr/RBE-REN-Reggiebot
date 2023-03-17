const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const {ChannelType} = require('discord-api-types/v10')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('za_reactroleupdate')
        .setDescription('Command flow to update information on our react role panels')
        .addChannelOption(option => 
            option.addChannelTypes(ChannelType.GuildText)
            .setName("React Role Channel")
            .setDescription("Choose the channel that the react roles are in")
            .setRequired(true)
            )
        .addIntegerOption(option =>
            option.setName("Message ID")
            .setDescription("The Message ID of the embed you are changing")
            .setRequired(true)
            )        
        .addStringOption(option =>
            option.setName("Attachment Name")
            .setDescription("The name of the attachment at the top of the embed")
            .setRequired(true)
            )
        .addStringOption(option =>
            option.setName("New Embed Title")
            .setDescription("The new title that should be in the Embed title")
            .setRequired(false)
            )        
        .addStringOption(option =>
            option.setName("New Embed Description")
            .setDescription("The new message that should be in the Embed description")
            .setRequired(false)
            )        
        .addStringOption(option =>
            option.setName("New Emoji")
            .setDescription("The new emoji that should be added to the reactions")
            .setRequired(false)
            )        
        .addStringOption(option =>
            option.setName("New Custom Emoji")
            .setDescription("The name of the emoji that should be added to the reactions")
            .setRequired(false)
            ),
    async execute(interaction, clientm) {
        let custom = 0;
        const emojiCache = interaction.guild.emojis.cache
        if(interaction.options.getString("New Emoji",true)!=null){
                const newEmoji = `${interaction.options.getString("New Emoji",true)}`
                custom = 1;
        }        
        if(interaction.options.getString("New Custom Emoji",true)!=null){
                const newCustomEmoji = emojiCache.find(emoji => emoji.name === `${interaction.options.getString("New Custom Emoji",true)}`)
                custom = 2;
        }

        const embed = new MessageEmbed()
        .setColor('CE1126')
        .setTitle(interaction.options.getString("New Embed Title"))
        .setDescription(interaction.options.getString("New Embed Description"));    

        let aGuild = await interaction.guild.fetch()
        let channel = await aGuild.channels.fetch(interaction.options.getChannel("React Role Channel", true)); 
        let message = await channel.messages.fetch(interaction.options.getInteger("Message ID", true));

        await message.removeAttachments();
        if(interaction.options.getString("New Embed Title")=="Select the games you play from our Redbird Gaming Clubs:"){
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('inviteList')
                    .setLabel('Click here to see your servers to join!')
                    .setStyle('SECONDARY')
            );
            await message.edit({ embeds: [embed], files: [`assets/${interaction.options.getString("Attachment Name")}.png`], fetchReply: true });
        }else{
            await message.edit({ embeds: [embed], components: [row], files: [`assets/${interaction.options.getString("Attachment Name")}.png`], fetchReply: true });
        }
        if(custom == 1){
            await message.react(newEmoji);
        }else if (custome == 2){
            await message.react(newCustomEmoji);
        }

        await interaction.reply("Role Panel Updated");
        
        
        

    }
}