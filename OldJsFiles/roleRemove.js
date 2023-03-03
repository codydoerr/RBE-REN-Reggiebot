const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('role_remove')
		.setDescription('A way to remove roles'),
	async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
                .setCustomId('roleRemove')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(3)
                .addOptions([
                    {
                        label: 'they/them/their',
                        description: 'This is Redbird esports LoL club and will give you access the LoL category',
                        value: 'they/them/their',
                    },
                    {
                        label: 'she/her/hers',
                        description: 'This is Redbird esports CS:GO club and will give you access the csgo category',
                        value: 'she/her/hers',
                    },
                    {
                        label: 'he/him/his',
                        description: 'This is a description as well',
                        value: 'he/him/his',
                    },
                ]),
        );
		await interaction.reply({ content: 'Pong!', components: [row] });
	},
};