const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("refresh")
    .setDescription("Refreshes your current roles! "),
  async execute(interaction, clientm) {
    try{
        const ErrorRole = interaction.guild.roles.cache.find(role => role.name === "ERROR")
        mainServer = interaction.client.guilds.cache.find(guild=> guild.id === "145107585178140673")
        console.log(mainServer)
        mainServerUser = mainServer.members.cache.find(user => user.id === interaction.member.id)
        if(mainServerUser.roles.cache.some(role => role.name === "Redbirds")){
            const RedbirdSubRole = interaction.guild.roles.cache.find(role => role.name === "Redbirds");
            interaction.member.roles.add(RedbirdSubRole)
            interaction.member.roles.remove(ErrorRole);
        }
        else if(mainServerUser.roles.cache.some(role => role.name === "Alumni")){
            const RedbirdSubRole = interaction.guild.roles.cache.find(role => role.name === "Alumni");
            interaction.member.roles.add(RedbirdSubRole)
            interaction.member.roles.remove(ErrorRole);
        }
        else if(mainServerUser.roles.cache.some(role => role.name === "Admitted Prospects")){
            const RedbirdSubRole = interaction.guild.roles.cache.find(role => role.name === "Admitted Prospects");
            interaction.member.roles.add(RedbirdSubRole)
            interaction.member.roles.remove(ErrorRole);
        }
        else if(mainServerUser.roles.cache.some(role => role.name === "Prospects")){
            const RedbirdSubRole = interaction.guild.roles.cache.find(role => role.name === "Prospects");
            interaction.member.roles.add(RedbirdSubRole)
            interaction.member.roles.remove(ErrorRole);
        }
        else if(mainServerUser.roles.cache.some(role => role.name === "Community Members")){
            const RedbirdSubRole = interaction.guild.roles.cache.find(role => role.name === "Community Members");
            interaction.member.roles.add(RedbirdSubRole)
            interaction.member.roles.remove(ErrorRole);
        }
        interaction.reply("Roles updated!")
    }
    catch(error){
        console.log(error)
    }
  },
};
