const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ztest')
		.setDescription('A testing command')
        .addChannelOption(option => option.setName('input')
                                        .setDescription("Testing Input")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        const test = interaction.options.getChannel("input", true);
        test.send("sugma")

        const row = new MessageActionRow()
			.addComponents(
                    new MessageButton()
                        .setLabel('test')
                        .setStyle('LINK')
                        .setURL('https://discord.gg/T2sRNvrD'),
                        new MessageButton()
                        .setLabel('test')
                        .setStyle('LINK')
                        .setURL('https://discord.gg/T2sRNvrD'),
        );
        const row2 = new MessageActionRow()
			.addComponents(
                    new MessageButton()
                        .setLabel('test2')
                        .setStyle('LINK')
                        .setURL('https://discord.gg/T2sRNvrD'),
        );
        test.send({ content: 'Pong!', components: [row, row2] })
        interaction.reply("it worked")
	},
};
