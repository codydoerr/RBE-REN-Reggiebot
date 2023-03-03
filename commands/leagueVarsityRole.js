const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lolvarsitysub")
    .setDescription("In development! Gives a temp vasity role for league")
    .addIntegerOption(option => option.setName("length_of_access")
                                      .setDescription("How long this user will have access to the channel based on IN MINUTES")
                                      .setRequired(true))
    .addUserOption(option => option.setName("username")
                                   .setDescription("The user you are giving the sub role to.")
                                   .setRequired(true)),
  async execute(interaction, clientm) {
    accessLengthMilli = (interaction.options.getInteger("length_of_access", true) * 60) * 1000 //Converting minutes into milliseconds

    SubRole = interaction.guild.roles.cache.find(
      (role) => role.name === "VarsityLOLsub"
    );
    test = await interaction.options.getUser("username",true)
    memberu = interaction.guild.members.cache.find(user => user.id === test.id)

    memberu.roles.add(SubRole)
    setTimeout(() => {
      memberu.roles.remove(SubRole)
  }, accessLengthMilli);
    await interaction.reply("Pong!");
  },
};
