const { SlashCommandBuilder, SlashCommandStringOption } = require("@discordjs/builders");
const emojiJSON = require("../emojiRoles.json");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("zm_club_inv")
    .setDescription("Gets invites from the server(s) you have listed")
    .addStringOption(option =>
      option.setName("club")
      .setDescription("Get the server invite for your chosen club, or all invites")
      .addChoices(
        {name:"Redbird Apex Legends Club",value:"APEXfan"},
        {name:"Redbird Call of Duty Club",value:"CODfan"},
        {name:"Redbird CS:GO Club",value:"CSfan"},
        {name:"Redbird Dungeons and Dragons Club",value:"DnDfan"},
        {name:"Redbird Halo Club",value:"HALOfan"},
        {name:"Redbird League of Legends Club",value:"LOLfan"},
        {name:"Redbird Overwatch Club",value:"OWfan"},
        {name:"Redbird Rainbow 6: Siege Club",value:"R6fan"},
        {name:"Redbird Rocket League Club",value:"RLfan"},
        {name:"BloNoSmashBros",value:"SMASHfan"},
        {name:"Redbird Valorant Club",value:"VALORANTfan"},
        {name:"Redbird Fighting Game Club",value:"FIGHTINGfan"},
        {name:"Redbird Final Fantasy XIV Club",value:"FFXIVfan"},
        {name:"Redbird Anime Club",value:"ANIMEfan"},
        {name:"Redbird Minecraft Club",value:"MCfan"},
        {name:"Redbird Destiny 2 Club",value:"DESTINY2fan"},
      )),
        
  async execute(interaction, clientm) {
  /* 
  This code is being utilized as a command in the bot application run from reggie.js
  It utilizes:

  End Utilizations

  This class is used in tandem with the SlashCommandBuilder as a part of discord.js/builders to create a command on the bot application that will allow permitted users to run /getinvites to receive an invite for a server connected to the main server as listed in the emojiRoles JSON
  */
 let linkString = ``
  try{
    linkString += emojiJSON[`${interaction.options.getString("club",true)}`].inviteLink
  }catch(error){
    emojiJSON.categories.clubGames.forEach(element =>
      linkString += `
${emojiJSON[element].clubName}
${emojiJSON[element].inviteLink}
      `)
  }
  interaction.reply({content: linkString,ephemeral: true})
  },
};
