const { SlashCommandBuilder } = require("@discordjs/builders");
const {request} = require('undici');

const {rbl_token} = require('../config.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("rso_verify")
    .setDescription("Verifies that the ULID is within the Redbird RSO")
    .addStringOption(option => option.setName('ulid')
      .setDescription("Your ILSTU ULID: redbirdesports")
      .setRequired(true)),
  async execute(interaction, clientm) {
    
    const ulid = interaction.options.getString("ulid", true);
    let uri =`https://engage-api.campuslabs.com/api/v3.0/organizations/organization/239871/member?userId.campusEmail=${ulid}%40ilstu.edu`;

    const {body,list} = await request(`${uri}`,{
      method: `GET`,
      headers:{
        'X-Engage-Api-Key':`${rbl_token}`
      }
    });
    
    let bodyJson = await body.json()
    console.log('data',bodyJson)
    //console.log(`${requestResult.body.items.[0]}`)
    if(bodyJson.totalItems === 0){
      await interaction.reply("User not In RSO!")
    }else{
    await interaction.reply("User Found!");
    }
  },
};
