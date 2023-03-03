const { SlashCommandBuilder } = require("@discordjs/builders");
const { strictEqual } = require("assert");
const fs = require('fs')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("za_jsonpull")
    .setDescription("Pulls Users Json info from verification ")
    .addStringOption(option => option.setName('input')
              .setDescription("user file discord id")
              .setRequired(true)),
  async execute(interaction, clientm) {
    try{
    filename = './userfiles/'+interaction.options.getString("input", true) + '.json'   
    let rawdata = fs.readFileSync(filename);
    let userinfo = JSON.parse(rawdata);
    //userinfo.verify;
    await interaction.reply("Verify: " + String(userinfo.verify) + " UserName: " + userinfo.UserName + " Ilstu Email: "+   userinfo.IlstuEmail + " Discord ID: " + userinfo.DiscordID);
    }
    catch(error){
      interaction.reply("Error with this command. File most likely does not exist make sure to run /email to generate a json file.")
    }
  },
};
