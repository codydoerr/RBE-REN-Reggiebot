const { SlashCommandBuilder } = require("@discordjs/builders");
const {request} = require('undici');
const apiKey = `esk_live_da164b2f932126e51bc9a7dc5e79cbfe`
module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("tests whatever is listed under here")
    .addStringOption(option => option.setName('ulid')
      .setDescription("Your ILSTU ULID: redbirdesports")
      .setRequired(true)),
  async execute(interaction, clientm) {
    
    const ulid = interaction.options.getString("ulid", true);
    let uri =`https://engage-api.campuslabs.com/api/v3.0/organizations/organization/239871/member?userId.campusEmail=${ulid}%40ilstu.edu`;

    const {body,list} = await request(`${uri}`,{
      method: `GET`,
      headers:{
        'X-Engage-Api-Key':`${apiKey}`
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
