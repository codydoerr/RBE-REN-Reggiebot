const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('za_reactroleupdate')
        .setDescription('MUST BE RAN AFTER UPDATING CODE Update the message listed in code'),
    async execute(interaction, clientm) {
        const emojiCache = interaction.guild.emojis.cache

        const newEmoji = emojiCache.find(emoji => emoji.name === 'STARWARSfan')//===MUST CHANGE THIS TO PROPER EMOJI===


        /*
        ===MUST CHANGE THIS EMBED TO PROPER EMBED===
        */
        const otherGames = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select the games you play that are talked about in our server:`)
            .setDescription(` 
        **Shooters**
        ${emojiCache.find(emoji => emoji.name === 'DESTINY2fan')} - Destiny 2
        ${emojiCache.find(emoji => emoji.name === 'FNfan')} - Fortnite
        ${emojiCache.find(emoji => emoji.name === 'PUBGfan')} - PlayerUnknown's Battlegrounds
        ${emojiCache.find(emoji => emoji.name === 'TARKOVfan')} - Escape from Tarkov
        ${emojiCache.find(emoji => emoji.name === 'GEARSfan')} - Gears of War
        
        **Sports**
        ${emojiCache.find(emoji => emoji.name === 'NBA2Kfan')} - NBA 2K
        ${emojiCache.find(emoji => emoji.name === 'MADDENfan')} - Madden
        ${emojiCache.find(emoji => emoji.name === 'FIFAfan')} - FIFA
        
        **Roleplaying Games**
        ${emojiCache.find(emoji => emoji.name === 'STARWARSfan')} - Star Wars: The Old Republic

        **Card Games**
        ${emojiCache.find(emoji => emoji.name === 'HSfan')} - Hearthstone
        ${emojiCache.find(emoji => emoji.name === 'MTGfan')} - Magic: The Gathering
        ${emojiCache.find(emoji => emoji.name === 'YUGIOHfan')} - Yu-Gi-Oh!
        
        **MOBA**
        ${emojiCache.find(emoji => emoji.name === 'SMITEfan')} - Smite
        ${emojiCache.find(emoji => emoji.name === 'DOTAfan')} - DOTA
        
        **Arcade and Others**
        ${emojiCache.find(emoji => emoji.name === 'AMONGUSfan')} - Among Us
        ${emojiCache.find(emoji => emoji.name === 'PokeGOfan')} - Pokémon GO
        ${emojiCache.find(emoji => emoji.name === 'OTHERfan')} - Other Games
        `);
        /*
        ===END OF CHANGES===
        */
        let aGuild = await interaction.guild.fetch()
        let channel = await aGuild.channels.fetch('1081301966510100480');
        let message = await channel.messages.fetch('1081302070574985287'); //MUST CHANGE THIS TO PROPER MESSAGE
        //   await message.removeAttachments();
        //   await message.edit({ embeds: [otherGames], files: ["assets/Other Games Panel.png"], fetchReply: true });
        //   await message.react(newEmoji);
        
        

    }
}