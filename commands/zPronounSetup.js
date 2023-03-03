const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('zpronoun_setup')
		.setDescription('Add/Remove pronouns!')
        .addChannelOption(option => option.setName('input')
                                        .setDescription("Channel for the discord roles")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        const test = interaction.options.getChannel("input", true);
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
                .setCustomId('role')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(3)
                .addOptions([
                    {
                        label: 'they/them/their',
                        description: '',
                        value: 'they/them/their',
                    },
                    {
                        label: 'she/her/hers',
                        description: '',
                        value: 'she/her/hers',
                    },
                    {
                        label: 'he/him/his',
                        description: '',
                        value: 'he/him/his',
                    },
                ]),
            );
            test.send("Pronouns:")
            test.send(/*compoenets/buttons*/{ content: 'Select your pronouns in the drop down menu!', components: [row] })
	},
};