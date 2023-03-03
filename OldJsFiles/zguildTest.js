const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('zguildtest')
		.setDescription('A testing command'),

	async execute(interaction, clientm) {
        for(x of interaction.client.guilds.cache){
            console.log('/////')
            const member = x[1].members.cache.find(user => user.id === interaction.member.id)
            TestRole = interaction.guild.roles.cache.find(role => role.name === "Redbird")
            interaction.member.roles.remove(TestRole);
        }
	},
};
