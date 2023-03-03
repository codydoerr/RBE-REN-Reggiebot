const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('zmain_role_setup')
		.setDescription('Add/Remove roles!')
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
                        label: 'Results',
                        description: 'See Redbird club results',
                        value: 'results'
                    },
                    {
                        label: 'Events',
                        description: 'Allows you to be pinged when events are happening',
                        value: 'events',
                    },
                    {
                        label: 'Social Media',
                        description: 'This will should you the #twitter channel',
                        value: 'socials',
                    },
                ]),
            );
            test.send("Announcement Roles:")
            test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
		
	},
};