const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton,MessageAttachment } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('community_member_roles')
		.setDescription('Sets up the guild buttons in the main server')
        .addChannelOption(option => option.setName('input')
                                        .setDescription("Channel for the buttons on main server")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        let infoEmbed = new MessageEmbed();
        let attachment = new MessageAttachment('./assets/SECONDARY_MARK.png')
        const test = interaction.options.getChannel("input", true);
        infoEmbed = new MessageEmbed()
					.setColor('CE1126')
                    .setTitle('Community Members')
					.setThumbnail("attachment://SECONDARY_MARK.png")
					.setDescription(`By opting into the community member role, you'll gain access to our esports and gaming arena category. You'll also gain limited access to our club servers. You'll then have the option to participate in community specific events!`);
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('SUCCESS')
                    .setCustomId('optin')
                    .setLabel('Opt In'),
                new MessageButton()
                    .setStyle('DANGER')
                    .setCustomId('optout')
                    .setLabel('Opt Out'),
                    );
        test.send({embeds:[infoEmbed], ephemeral: true, files: [attachment], components: [row]});
	},
};
