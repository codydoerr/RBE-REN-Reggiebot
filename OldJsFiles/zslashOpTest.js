const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zslashoptest')
		.setDescription('A testing command')
        .addStringOption(option => option.setName('input')
                                        .setDescription("Testing Input")
                                        .setRequired(true))
        //This allows you to PICK ANY ROLE I don't know if you can exlude the roles?
        .addRoleOption(option => option.setName('test').setDescription("Pick Roles").setRequired(true)),
	async execute(interaction, clientm) {
        const test = interaction.options.getString("input", true);
        const x = interaction.options.getRole("test", true)
        console.log(x)
		await interaction.reply('Pong!' + test);
        console.log("\n\n\n\n\n\n" +interaction.member)
        setTimeout(()=> {interaction.deleteReply()},5000)
	},
};
