const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('zguild_button_menu')
		.setDescription('Sets up the guild buttons in the main server')
        .addChannelOption(option => option.setName('input')
                                        .setDescription("Channel for the discord invites on main server")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        //Guild button urls
        
        const emojiCache = interaction.guild.emojis.cache
        const test = interaction.options.getChannel("input", true);
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel(`Join`)
                    .setEmoji(`${emojiCache.find(emoji => emoji.name === 'ANIMEfan')}`)
                    .setStyle('LINK')
                    .setURL('https://discord.gg/QGv4eYBkXz'),
                new MessageButton()
                    .setLabel('Apex')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/nMRADqfCsY'),
                    
                new MessageButton()
                    .setLabel('Call Of Duty')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/Np9QGyqJm5'),
                    
                new MessageButton()
                    .setLabel('CS:GO')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/JjHj2SmjPx'),
                    
                new MessageButton()
                    .setLabel('League Of Legends')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/TsM3ZPXz84'),
                    );
        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Overwatch')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/ngSfhHm28F'),
                new MessageButton()
                    .setLabel('R6:Siege')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/G6tMPUmfxu'),
                    
                new MessageButton()
                    .setLabel('Rocket League')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/SC2YhfvkN3'),
                    
                new MessageButton()
                    .setLabel('Valorant')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/mMbmA2bsag'),
                    );
        const row3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Minecraft')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/qMQFvUwpgW'),
                new MessageButton()
                    .setLabel('FFXIV')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/HD8wYHYdCu'),
                new MessageButton()
                    .setLabel('D&D')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/9P5vU56Uzv'),
                new MessageButton()
                    .setLabel('FGC')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/7BX65tSxVA'),
                );
        const row4 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('HALO')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/bhTTfxZQ7a'),
                new MessageButton()
                    .setLabel('Wargaming')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/cvxVzSQrd4'),
                new MessageButton()
                    .setLabel('Super Smash Bros.')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/ar6pU6G'),
                );
        test.send(/*compoenets/buttons*/{ content: 'Click the button to go to the selected clubs server!', components: [row, row2, row3, row4] })
	},
};
