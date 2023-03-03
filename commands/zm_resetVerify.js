const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('zm_reset_verify')
		.setDescription('Resets a users verification file to retry. (Mod only)')
        .addStringOption(option => option.setName('input')
                                        .setDescription("user file discord id + .json ")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        const filename = interaction.options.getString("input", true);
        try{
            if(filename.length != null || filename.length == 0){
                const path = "./userfiles/" + filename
                fs.unlinkSync(path)
                interaction.reply({content:"User has been reset",ephemeral:true});
                }
                else{
                interaction.reply({content:"Input ERROR",ephemeral:true});
            }
        }
        catch(error){
            console.log(error)
        }
    }
};
