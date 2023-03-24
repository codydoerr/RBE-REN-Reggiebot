const { SlashCommandBuilder, SlashCommandStringOption } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("zc_varsitysub")
    .setDescription("Gives a temporary role for the chosen varsity team")
    .addIntegerOption(option => option.setName("length_of_access")
                                      .setDescription("How long this user will have access to the channel based on IN MINUTES")
                                      .setRequired(true))
     .addUserOption(option => option.setName("username")
                                    .setDescription("The user you are giving the sub role to.")
                                    .setRequired(true))    
                                   
     .addStringOption(option => option.setName("title")
                                      .setDescription("The title for game of the subbing player.")
                                      .setRequired(true)
                                      .addStringOption(
                                      {name:"Overwatch",value:"VarsityOWsub"},
                                      {name:"Rocket League",value:"VarsityRLsub"},
                                      {name:"League Of Legends",value:"VarsityLOLsub"},)
                                    ),
                                   
  async execute(interaction, clientm) {
    accessLengthMilli = (interaction.options.getInteger("length_of_access", true) * 60) * 1000 //Converting minutes into milliseconds

    SubRole = interaction.guild.roles.cache.find(
      (role) => role.name === `${interaction.options.getString("title")}`
    );

    test =  interaction.options.getUser("username",true)
    memberu = interaction.guild.members.cache.find(user => user.id === test.id)

    memberu.roles.add(SubRole)
    setTimeout(() => {
      memberu.roles.remove(SubRole)
  }, accessLengthMilli);
    await interaction.reply("Pong!");
  },
};
