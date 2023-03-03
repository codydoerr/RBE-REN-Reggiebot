const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("za_clean")
    .setDescription("Removes messages cannot go over a hundred.")
    .addIntegerOption(option => option.setName('num')
                                        .setDescription("Number of messages to delete UNDER 100 DONT BREAK THIS")
                                        .setRequired(true)),
  async execute(interaction, clientm) {
    let amount = interaction.options.getInteger("num", true);

    interaction.channel.bulkDelete(amount)
    await interaction.reply("Cleaned!");
  },
};
